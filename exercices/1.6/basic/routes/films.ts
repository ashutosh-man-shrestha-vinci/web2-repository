import express from "express";
import { Film, NewFilm } from '../types'; 
import path from "node:path";
import { parse, serialize } from "../utils/json";

const router = express.Router();

const jsonDbPath = path.join(__dirname, "/../data/films.json");

// Films en hardcode
const films: Film[] = [
  {
    id: 1,
    title: 'Inception',
    director: 'Christopher Nolan',
    duration: 148,
    budget: 160,
    imageUrl: 'https://example.com/inception.jpg'
  },
  {
    id: 2,
    title: 'The Matrix',
    director: 'Wachowskis',
    duration: 136,
    budget: 63,
    imageUrl: 'https://example.com/matrix.jpg'
  },
  {
    id: 3,
    title: 'Interstellar',
    director: 'Christopher Nolan',
    duration: 169,
    budget: 165,
    imageUrl: 'https://example.com/interstellar.jpg'
  }
];

router.post("/", (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    !("budget" in body) ||
    !("imageUrl" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    typeof body.budget !== "number" ||
    typeof body.imageUrl !== "string" ||
    !body.title.trim() ||
    !body.director.trim() ||
    !body.imageUrl.trim()
  ) {
    return res.sendStatus(400);
  }

  const { title, director, duration, budget, imageUrl } = body as NewFilm;

  const filmss = parse(jsonDbPath, films);
  const nextId = filmss.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) + 1;

  const addedFilm: Film = {
    id: nextId, title, director, duration, budget, imageUrl,
  };
  const exist = films.find((film) => film.title === title && film.director === director);
  if (exist) {
    return res.status(409).json();
  }

  serialize(jsonDbPath, filmss);

  return res.json(addedFilm);
});

let num = 0;

// Route pour obtenir un film par ID
router.get("/:id", (req, res) => {
  const filmss = parse(jsonDbPath, films);
  const idInRequest = parseInt(req.params.id, 10);
  const indexOffilmFound = filmss.findIndex(
    (film: Film) => film.id === idInRequest
  );

  if (indexOffilmFound < 0) return res.sendStatus(404);

  return res.json(filmss[indexOffilmFound]);
});

// Route pour obtenir tous les films avec une durée minimale
router.get("/", (req, res) => {
  const filmss = parse(jsonDbPath, films);
  if (!req.query["minimum-duration"]) {
    return res.json(filmss);
  }
  const minDuration = Number(req.query["minimum-duration"]);
  if (isNaN(minDuration) || minDuration <= 0) {
    return res.status(400).json({ error: "Wrong minimum duration" });
  }
  const filteredFilms = filmss.filter(film => film.duration >= minDuration);
  num++;
  console.log("GET counter / films " + num);
  return res.json(filteredFilms);
});


router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = films.findIndex((film) => film.id === id);
    if (index === -1) {
      return res.sendStatus(404);
    }
    const deletedElements = films.splice(index, 1); // splice() returns an array of the deleted elements
    return res.json(deletedElements[0]);
  });
  
  router.patch("/:id", (req, res) => {
    const id = Number(req.params.id);
    const film = films.find((film) => film.id === id);
    if (!film) {
      return res.sendStatus(404);
    }
  
    const body: unknown = req.body;
  
    if (
      !body ||
      typeof body !== "object" ||
      ("title" in body && (typeof body.title !== "string" || !body.title.trim())) ||
      ("director" in body && (typeof body.director !== "string" || !body.director.trim())) ||
      ("duration" in body && (typeof body.duration !== "number" || body.duration <= 0)) ||
      ("budget" in body && (typeof body.budget !== "number" || body.budget <= 0)) ||
      ("imageUrl" in body && (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
    ) {
      return res.sendStatus(400);
    }
  
    const { title, director, duration, budget, imageUrl }: Partial<NewFilm> = body;
  
    if (title) film.title = title;
    if (director) film.director = director;
    if (duration) film.duration = duration;
    if (budget) film.budget = budget;
    if (imageUrl) film.imageUrl = imageUrl;
  
    return res.json(film);
  });
  
  

export default router;

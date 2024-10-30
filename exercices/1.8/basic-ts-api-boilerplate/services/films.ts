
import path from "node:path";
import { Film, NewFilm } from "../types";
import { parse, serialize } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/movies.json");

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

function CreeUnFilm(newMovie: NewFilm): Film {
    const movies = parse(jsonDbPath, films);
  
    const nextId =
      movies.reduce((maxId, movie) => (movie.id > maxId ? movie.id : maxId), 0) +1;
  
    const createdMovie = {
      id: nextId,
      ...newMovie,
    };
  
    movies.push(createdMovie);
    serialize(jsonDbPath, movies);
  
    return createdMovie;
  }

// Route pour obtenir un film par ID

function LireUnFilm(id: number): Film | undefined {
    const movies = parse(jsonDbPath, films);
    const movie = movies.find((movie) => movie.id === id);
    if (!movie) {
      return undefined;
    }
    return movie;
  }


function LireTousLesFilms(minDuration: number): Film[] {
    const movies = parse(jsonDbPath, films);
    if (!minDuration) {
      return movies;
    }
  
    const minDurationNb = Number(minDuration);

    const filteredMovies = movies.filter((movie) => {return movie.duration >= minDurationNb; });
    return filteredMovies;
  }


function SupprimerUnFilm(filmId: number): Film | undefined {
    const filmss = parse(jsonDbPath, films);
    const index = films.findIndex((film) => film.id === filmId);
    if (index === -1) {
      return undefined;
    }
    const deletedElements = films.splice(index, 1); // splice() returns an array of the deleted elements
    serialize(jsonDbPath, filmss);
    return (deletedElements[0]);
  };

  function ModifierUnFilm(filmId: number,NewFilm: Partial<NewFilm>): Film | undefined {
    const filmss = parse(jsonDbPath, films);
    const index = films.find((film) => film.id === filmId);
    if (!index) {
        return undefined;
    }

    if (NewFilm.title !== undefined) {
        index.title = NewFilm.title!; // the router already checks for the presence of title
    }
    if (NewFilm.director !== undefined) {
      index.director = NewFilm.director!;
    }
    if (NewFilm.duration !== undefined) {
      index.duration = NewFilm.duration!;
    }
    if (NewFilm.budget !== undefined) {
      index.budget = NewFilm.budget!;
    }
    if (NewFilm.description !== undefined) {
        index.description = NewFilm.description!;
    }
    if (NewFilm.imageUrl !== undefined) {
        index.imageUrl = NewFilm.imageUrl!;
    }
  
    serialize(jsonDbPath, filmss);
    return index;
  }

  

  


  export {
    SupprimerUnFilm,
    ModifierUnFilm,
    LireTousLesFilms,
    CreeUnFilm,
    LireUnFilm

  };

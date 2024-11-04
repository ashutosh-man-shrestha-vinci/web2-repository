import { SyntheticEvent, useState } from "react";
import { Movie, Movie as MovieType } from "../Movie";

const Main = () => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState<number | undefined>(undefined);
  const [imageUrl, setImageUrl] = useState("");
  const [budget, setBudget] = useState<number | undefined>(undefined);

  const [movies, setMovies] = useState<MovieType[]>([
    { title: "Inception", director: "Christopher Nolan", duration: 148 , description:"blabluabua" },
    { title: "The Matrix", director: "Lana Wachowski, Lilly Wachowski", duration: 136 },
    { title: "Interstellar", director: "Christopher Nolan", duration: 169 },
    { title: "The Dark Knight", director: "Christopher Nolan", duration: 152 },
    { title: "Pulp Fiction", director: "Quentin Tarantino", duration: 154 },
  ]);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const newMovie: MovieType = {
      title,
      director,
      description,
      duration,
      imageUrl,
      budget,
    };
    setMovies([...movies, newMovie]);
    setTitle("");
    setDirector("");
    setDescription("");
    setDuration(undefined);
    setImageUrl("");
    setBudget(undefined);
  };

  return (
    <main>
      <h1>Mes Films Préférés</h1>
      <ul>
        {movies.map((movie, index) => (
          <Movie key={index} {...movie} />
        ))}
      </ul>
      <h2>Ajouter un Film</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Titre</label>
        <input
          value={title}
          type="text"
          id="title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="director">Réalisateur</label>
        <input
          value={director}
          type="text"
          id="director"
          name="director"
          onChange={(e) => setDirector(e.target.value)}
          required
        />
        <label htmlFor="description">Description</label>
        <input
          value={description}
          type="text"
          id="description"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="duration">Durée (minutes)</label>
        <input
          value={duration || ""}
          type="number"
          id="duration"
          name="duration"
          onChange={(e) => setDuration(parseInt(e.target.value))}
        />
        <label htmlFor="imageUrl">Lien vers une image</label>
        <input
          value={imageUrl}
          type="url"
          id="imageUrl"
          name="imageUrl"
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <label htmlFor="budget">Budget (en millions)</label>
        <input
          value={budget || ""}
          type="number"
          id="budget"
          name="budget"
          step="0.1"
          onChange={(e) => setBudget(parseFloat(e.target.value))}
        />
        <button type="submit">Ajouter</button>
      </form>
    </main>
  );
};

export default Main;

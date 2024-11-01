import { Movie } from "../Movie";
export interface CinemaProps {
  name: string;
  movies: Movie[];
}

export const Cinema = ({ name, movies }: CinemaProps) => {
  return (
    <div>
      <h3>{name}</h3>
      <ul>
        {movies.map((movie) => (
          <Movie title={movie.title} director={movie.director} description={movie.description} />
        ))}
      </ul>
    </div>
  );
};
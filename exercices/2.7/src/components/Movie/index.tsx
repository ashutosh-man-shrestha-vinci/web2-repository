import { useState } from "react";

export interface Movie {
  title: string;
  director: string;
  description?: string;
  duration?: number;
  imageUrl?: string;
  budget?: number;
}

export const Movie = ({ title, director, description, duration, imageUrl, budget }: Movie) => {
  const [visible, setVisible] = useState(false);
  return (
    <li>
      <p onClick={() => setVisible(!visible)}>
        <strong>{title}</strong> - Réalisateur : {director}
      </p>
      {visible && (
        <div>
          {description && <p>Description : {description}</p>}
          {duration && <p>Durée : {duration} minutes</p>}
          {imageUrl && <img src={imageUrl} alt={title} />}
          {budget && <p>Budget : {budget} millions</p>}
        </div>
      )}
    </li>
  );
};

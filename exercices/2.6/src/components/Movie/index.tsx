import {useState} from "react"

export interface Movie {
  title: string;
  director: string;
  description : string;
}

export const Movie = ({ title, director,description }: Movie) => {
  const [visible, setVisible] = useState(false);
  return (
    <li>
      <p onClick={() => setVisible(!visible)}>
        <strong>{title} </strong> - Réalisateur : {director}
      </p>
      <p> {visible ? <span> - Description : {description} </span> : null}</p>
    </li>
  );
};
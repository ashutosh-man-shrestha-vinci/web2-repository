import {Person} from "../Person";
export interface PeopleProps {
  people : Person[];
}

export const People = ({ people }: PeopleProps) => {
  return (
    <div>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            <h2>{person.name}</h2>
            <p>{person.age}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

type CinemaProps = {
  name: string;
  movie1 :{ 
    title: string,
    director: string
  },
  movie2 :{ 
    title: string,
    director: string
  },

}

type PageTitleProps  = {
  title: string;
}

// Component for displaying the page title
const PageTitle = (props : PageTitleProps) => <h1>{props.title}</h1>;
// Component for displaying cinema information
const Cinema = (props :CinemaProps ) => (
  <div>
    <h2>{props.name}</h2>
    <ul>
      <li>
        <strong>{props.movie1.title}</strong> - Réalisateur : {props.movie1.director}
      </li>
      <li>
        <strong>{props.movie2.title}</strong> - Réalisateur : {props.movie2.director}
      </li>
    </ul>
  </div>
);


const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";
  const cinema1Name = "UGC DeBrouckère";
  const movie1 = {
    title: "HAIKYU-THE DUMPSTER BATTLE",
    director: "Susumu Mitsunaka",
  };
  const movie2 = {
    title: "GOODBYE JULIA ",
    director: "Mohamed Kordofani",
  };
  const cinema2Name = "UGC Toison d'Or";
  const movie3 = {
    title: "THE WATCHERS",
    director: "Ishana Night Shyamalan",
  };
  const movie4 = {
    title: "BAD BOYS: RIDE OR DIE",
    director: "Adil El Arbi, Bilall Fallah",
  };
  return (
    <div>
      <PageTitle title={pageTitle} />
      <Cinema name={cinema1Name} movie1={movie1} movie2={movie2} />
      <Cinema name={cinema2Name} movie1={movie3} movie2={movie4} />
    </div>
  );
};
export default App;
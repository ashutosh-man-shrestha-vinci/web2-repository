const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";
  // ... for const definitions

  return (
    <div>
      <PageTitle title={pageTitle} />

      <Cinema
        name={cinema1Name}
        movie1Title={cinema1Movie1Title}
        // ...
      />

      <Cinema
        name={cinema2Name}
        //...
      />
    </div>
  );
};

const Header = () => {
  const pageTitle = "Informations sur les films dans les cinémas";


}
const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";
  const cinema1Movie1Title = "Film 1 - DeBrouckère";
  const cinema1Movie1Director = "Director A";
  const cinema1Movie2Title = "Film 2 - DeBrouckère";
  const cinema1Movie2Director = "Director B";

  const cinema2Name = "UGC Toison d'Or";
  const cinema2Movie1Title = "Film 1 - Toison d'Or";
  const cinema2Movie1Director = "Director C";
  const cinema2Movie2Title = "Film 2 - Toison d'Or";
  const cinema2Movie2Director = "Director D";

  return (
    <div>
      <h1>{pageTitle}</h1>

      <div>
        <h2>{cinema1Name}</h2>
        <ul>
          <li>
            <strong>{cinema1Movie1Title}</strong> - Réalisateur :{" "}
            {cinema1Movie1Director}
          </li>
          <li>
            <strong>{cinema1Movie2Title}</strong> - Réalisateur :{" "}
            {cinema1Movie2Director}
          </li>
        </ul>
      </div>

      <div>
        <h2>{cinema2Name}</h2>
        <ul>
          <li>
            <strong>{cinema2Movie1Title}</strong> - Réalisateur :{" "}
            {cinema2Movie1Director}
          </li>
          <li>
            <strong>{cinema2Movie2Title}</strong> - Réalisateur :{" "}
            {cinema2Movie2Director}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;

import express from "express";

import usersRouter from "./routes/users";
import pizzaRouter from "./routes/pizzas";
import filmRouter from "./routes/films";
import textRouter from "./routes/texts";



const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use("/pizzas", pizzaRouter);
app.use("/films", filmRouter);
app.use('/texts', textRouter);


let count = 0; // Compteur de requêtes GET

// Middleware pour compter les requêtes GET
app.use((req, _res, next) => {
  if (req.method === "GET") {
    count++; // Incrémente le compteur
    console.log(`GET counter: ${count}`);
  }
  next(); // Passe à la route suivante
});

export default app;

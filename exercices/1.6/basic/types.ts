interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface Film {
  id: number;
  title: string;
  director: string;
  duration: number;
  budget?: number;  // en millions
  description?: string;  // URL vers une image
  imageUrl?: string;  // URL vers une image
}



interface PizzaToUpdate {
  title?: string;
  content?: string;
}
type NewFilm = Omit<Film, "id">;
type NewPizza = Omit<Pizza, "id">;

export type { Pizza, NewPizza, PizzaToUpdate , Film, NewFilm};

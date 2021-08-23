import React from "react";
import { Switch, Route } from "react-router-dom";

import MovieContextProvider from "./context/movieContext";
import "./App.css";

import Pelicula from "./pages/Pelicula";

const App = () => {
  return (
    <Switch>
      <MovieContextProvider>
        <Route exact path="/" component={Pelicula} />
      </MovieContextProvider>
    </Switch>
  );
};

export default App;

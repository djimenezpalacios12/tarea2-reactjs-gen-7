import React from "react";
import { Switch, Route } from "react-router-dom";

import Pelicula from "./pages/Pelicula";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Pelicula} />
    </Switch>
  );
};

export default App;

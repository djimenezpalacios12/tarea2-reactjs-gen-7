import React, { createContext, useEffect, useState } from "react";

import { movieSearchAPI } from "../constant/index";

// Creamos el context
export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    fetch(movieSearchAPI())
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
        setMovies(data.results);
      })
      .catch((err) => console.log(err));
  };

  // Return provider
  return (
    <MovieContext.Provider value={{ movies }}>
      {/* .... */}
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;

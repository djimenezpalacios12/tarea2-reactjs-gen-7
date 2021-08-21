import React, { useState } from "react";
import { AppBar, Toolbar, Typography, TextField } from "@material-ui/core";
import { Search, LocalMovies } from "@material-ui/icons";

import "./BarStyle.css";

const Bar = ({ filtro }) => {
  const [input, setInput] = useState("");

  // Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit :", input);
  };

  // HandleChange
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <AppBar position="static" className="bg-info">
        <Toolbar className="d-flex justify-content-between">
          <Typography variant="h6" noWrap>
            <LocalMovies /> Cartelera de Películas
          </Typography>
          <form onSubmit={handleSubmit} className="d-flex align-items-center">
            <div>
              <Search className="mr-3" />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Buscar..."
                variant="outlined"
                className="colorInput my-2"
                name="filtro"
                onChange={handleChange}
                value={input}
              />
            </div>
          </form>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Bar;

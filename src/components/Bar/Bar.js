import React, { useState } from "react";
import { AppBar, Toolbar, TextField } from "@material-ui/core";
import { Search, LocalMovies } from "@material-ui/icons";

import "./BarStyle.css";

const Bar = ({ handleFiltro }) => {
  const [input, setInput] = useState("");

  // Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    handleFiltro(input);
  };

  // HandleChange
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <AppBar position="static" className="bg-info">
        <Toolbar className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <LocalMovies /> Cartelera de Películas
          </div>
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
                margin="dense"
                size="small"
              />
            </div>
          </form>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Bar;

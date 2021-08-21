import React, { Fragment, useState } from "react";

import Bar from "../components/Bar/Bar";

const Pelicula = () => {
  const [filtro, setFiltro] = useState("");

  const handleFiltro = (value) => {
    setFiltro(value);
  };

  // TODO: pasar el "filtro" al componente para buscar peliculas
  console.log("Pelicula: ", filtro);

  return (
    <Fragment>
      <Bar handleFiltro={handleFiltro} />
    </Fragment>
  );
};

export default Pelicula;

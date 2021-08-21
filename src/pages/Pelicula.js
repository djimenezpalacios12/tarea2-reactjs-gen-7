import React, { Fragment, useState } from "react";

import Bar from "../components/Bar/Bar";

const Pelicula = () => {
  const [filtro, setFiltro] = useState("");

  console.log("Pelicula: ", filtro);

  return (
    <Fragment>
      <Bar filtro={filtro} />
    </Fragment>
  );
};

export default Pelicula;

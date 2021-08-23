import React, { Fragment, useState } from "react";

import Bar from "../components/Bar/Bar";
import Footer from "../components/Footer";
import Cartel from "../components/Cartel";

const Pelicula = () => {
  const [filtro, setFiltro] = useState("");

  const handleFiltro = (value) => {
    setFiltro(value);
  };

  return (
    <Fragment>
      <Bar handleFiltro={handleFiltro} />

      <Cartel filtro={filtro} />

      <Footer />
    </Fragment>
  );
};

export default Pelicula;

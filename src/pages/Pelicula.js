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
      <div className="back-color">
        <Bar handleFiltro={handleFiltro} />

        <Cartel filtro={filtro} />

        <Footer />
      </div>
    </Fragment>
  );
};

export default Pelicula;

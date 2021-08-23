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
      {/* //? Verificar so vh-100 no provoca problemas */}
      <div className="back-color vh-100">
        <Bar handleFiltro={handleFiltro} />

        <Cartel filtro={filtro} />

        <Footer />
      </div>
    </Fragment>
  );
};

export default Pelicula;

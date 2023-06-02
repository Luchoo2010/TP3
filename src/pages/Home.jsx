import React from "react";
import Main from "../components/Main";
import Header from "../components/Header";
import Footer from "../components/Foteer"

const Home = () => {
  const alumno = {
    id: 1,
    nombre: "Luciano Salvador Azalot",
    edad: 21,
    titulo: "Tecnico Superior en Programacion",
    deporteFavortio: "Futbol",
    localidad: "San Miguel de Tucuman",
  };

  return (
    <>
      <Header />
      <Main alumno={alumno} />
      <Footer />
    </>
  );
};

export default Home;
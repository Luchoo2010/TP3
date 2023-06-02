import Header from "./Header";
import Foteer from "./Foteer";
import "../Css/MainAbout.css";
import { useState } from "react";
import "../Css/Foto.css" 

const MainAbout = () => {

  const [Foto,setFoto] = useState (1)



 const handleCambiar = () =>{

      if (Foto === 4)
        setFoto(1)
      else 
          setFoto(Foto+1)

}



  return (
   
    <div className="todoA">
      <Header />

      <section className="pantallaDividida">
        <div className="izq">
            <img src={`${Foto}.jpg`} alt="" className="Foto"/>
            <br />
            <br />
            <button onClick={handleCambiar} className="botonC" >Cambiar Foto</button>
         
           
        </div> 
       
       
       
        <div className="derecha">
          <p> Mi nombre es Luciano Salvador Azalot, soy estudiante de la tecnicatura
              superior en programacion de la Universidad Nacional de Tucuman,
              actualmente cuento con conocimientos como C#, SQL, HTML 5, JavaScript, Css, React.
          </p>
        </div>
      
      </section>
      <br />
      <Foteer />
      
   
    </div>
  );
};

export default MainAbout;




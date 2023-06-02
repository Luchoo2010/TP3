import {Link} from "react-router-dom"
import "../Css/Error.css"


const Error404 = () => {
  return (
    <div className="todoE">
    <img src= "https://www.hostingplus.pe/wp-content/uploads/2020/12/error404quees.jpg" alt="" className="foto" />
    <br />
    <h3 className="texto">Pagina no encontrada</h3>
    <p className="texto">desea volver a la ruta principal?? <Link to="/">Home</Link></p>
    <br />
    <br />
    <br />
    <br />
    
</div>
  )
}

export default Error404
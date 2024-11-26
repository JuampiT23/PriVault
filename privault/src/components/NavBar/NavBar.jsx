import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = ()=>{
      return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="../src/img/VaultOrg1.png" alt="" width="30" height="24"/>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/producto">Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categoria">Categorias</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
           <CartWidget cartCount={5}/>
          </form>
        </div>
      </div>
    </nav>
)
}

export default NavBar




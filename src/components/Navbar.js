import logo from '../assets/logo.jpg';

const Navbar = () =>
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href="#">
          <img className="logo" src={logo} alt="nav logo" />
        </a>
        <div className="collapse navbar-collapse flex-grow-0" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#Section4">Catálogo<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Productos
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Jabones</a>
                <a className="dropdown-item" href="#">Shampoos</a>
                <a className="dropdown-item" href="#">Velas</a>
                <a className="dropdown-item" href="#">Cremas y Balsamos</a>
                <a className="dropdown-item" href="#">Materiales</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Section5">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>;

export default Navbar;
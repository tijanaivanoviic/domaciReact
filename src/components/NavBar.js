import logo from '../img/logo.png'
import { Link } from 'react-router-dom';
function NavBar({toggleTheme}) {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Logo" width="150" height="100" className="d-inline-block align-text-center rounded-circle" />
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item nav-link ">
                            <Link to="/">Pocetna</Link>
                        </li>
                        <li className="nav-item nav-link">
                            <Link to="/kontakt">Kontakt</Link>
                        </li>
                    </ul>
                    <button className="btnNav" onClick={toggleTheme}>
                        Dark Theme
                    </button>
                </div>
            </div>
        </nav>




    );
}

export default NavBar


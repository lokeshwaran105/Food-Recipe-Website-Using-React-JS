import { Link } from "react-router-dom";
import logo from './Logo (4).png';

const NavBar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-custom mb-2">
                <img className="navbar-brand ms-3" style={{height: "70px"}} src={logo} alt="Home Cook" />
                <div className="collapse navbar-collapse d-flex justify-content-end me-3" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link fs-5 text-dark text-primary-custom" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5 text-dark text-primary-custom" to="/categories">Categories</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5 text-dark text-primary-custom" to="/about-us">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5 text-dark text-primary-custom" to="/contact-us">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default NavBar;

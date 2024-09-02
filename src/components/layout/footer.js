import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import logo from './Logo (4).png';
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <footer className="container-fluid bg-light px-5">
            <div className='row d-flex text-center'>
                <div className='col-12 col-md-6'>
                    <img src={logo} alt='footer-logo'/>
                    <p>
                    At Home Cook, we believe that anyone can cook delicious meals with the right recipes and inspiration. Our platform is designed to offer a wide variety of easy-to-follow recipes from around the world.
                    </p>
                </div>
                <div className='col-12 col-md-6 d-flex flex-column justify-content-end'>
                    <h5>Home Cook</h5>
                    <Link to='/' className='my-1 text-decoration-none text-dark footer-text'>Home</Link>
                    <Link to='/categories' className='my-1 text-decoration-none text-dark footer-text'>Categories</Link>
                    <Link to='/about-us' className='my-1 text-decoration-none text-dark footer-text'>About Us</Link>
                    <Link to='/contact-us' className='my-1 text-decoration-none text-dark footer-text'>Contact Us</Link>
                </div>
            </div>
            <hr class="hr" />
            <div className="row d-flex  align-items-center">
                <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start">
                    <p className='fw-bolder'>&copy; 2024 Food Recipe Website. All Rights Reserved.</p>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
                    <FaFacebook className='m-1' style={{fontSize: "25px"}}/>
                    <FaInstagram className='m-1' style={{fontSize: "25px"}} />
                    <FaTwitter className='m-1' style={{fontSize: "25px"}} />
                </div>
            </div>
        </footer> 
    )
}


export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="row">
            <div className="col">
                <nav className="navbar">
                    <div className="navbar-brand">
                        <Link to="/"><img className="logo space-left" src="assets/images/laguna-beach-logo.png" alt="Laguna Beach logo" width="220px" /></Link>
                    </div>
                    <ul className="list-inline space-right">
                        <li className="list-inline-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="list-inline-item"><Link to="/" className="nav-link">Spa</Link></li>
                        <li className="list-inline-item"><Link to="/" className="nav-link">Studio</Link></li>
                        <li className="list-inline-item"><Link to="/book" className="nav-link">Book Now</Link></li>
                        <li className="list-inline-item"><Link to="/" className="nav-link">Contact</Link></li>
                    </ul>
                </nav>

            </div>
        </div>
    );
};

export default Header;

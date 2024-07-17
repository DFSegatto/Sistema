import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../authContext';
import './Navbar.css';

function Navbar() {
    const { isAuthenticated } = useContext(AuthContext); 

    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Cadastrar</Link></li>
                {isAuthenticated && (
                    <li><Link to="/user-list">Lista de Usuarios</Link></li>
                )}
                <li><Link to="/contact">Contato</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;

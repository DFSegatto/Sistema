import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Cadastrar</Link></li>
                <li><Link to="/update-user">Editar Usuario</Link></li>
                <li><Link to="/user-list">Listar Usuarios</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;

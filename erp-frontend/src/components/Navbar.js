import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/update-user">Update User</Link></li>
                <li><Link to="/user-list">User List</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;

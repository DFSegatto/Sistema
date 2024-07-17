import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import UpdateUser from './components/UpdateUser';
import UserList from './components/UserList';
import ContactForm from './components/ContactForm';
// import PrivateRoute from './components/PrivateRoute'; // Comente esta linha se necessário
import { AuthProvider } from './authContext';
import './App.css';

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/update-user/:id" element={<UpdateUser />} />
                        <Route path="/user-list" element={<UserList />} />
                        <Route path="/contact" element={<ContactForm />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import UpdateUser from './components/UpdateUser';
import UserList from './components/UserList';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import './App.css';

function App() {
  return (
      <Router>
          <div className="App">
              <Navbar />
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/update-user" element={<UpdateUser />} />
                  <Route path="/user-list" element={<UserList />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;

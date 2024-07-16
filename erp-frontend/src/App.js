import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import UpdateUser from './components/UpdateUser';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ERP System</h1>
        <Register />
        <Login />
        <UpdateUser />
        <UserList />
      </header>
    </div>
  );
}

export default App;

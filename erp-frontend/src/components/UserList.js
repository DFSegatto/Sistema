import React, { useState, useEffect } from 'react';
import { getAllUsers, deleteUser } from '../services/userService';

function UserList() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const users = await getAllUsers();
      setUsers(users);
    } catch (error) {
      setMessage('Error fetching users');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setMessage('User deleted successfully');
      fetchUsers(); // Atualize a lista de usuários após a exclusão
    } catch (error) {
      setMessage('Error deleting user');
    }
  };

  return (
    <div>
      <h2>User List</h2>
      {message && <p>{message}</p>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nome}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;

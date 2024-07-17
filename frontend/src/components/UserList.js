import React, { useState, useEffect } from 'react';
import { getAllUsers, deleteUser } from '../services/userService';
import { useNavigate } from 'react-router-dom';
import './UserList.css';

function UserList() {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

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

    const handleEdit = (id) => {
        navigate(`/update-user/${id}`);
    };

    return (
        <div className="user-list-container">
            <h2>User List</h2>
            {message && <p className="message">{message}</p>}
            <table className="user-list-table">
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
                                <button onClick={() => handleEdit(user.id)} className="btn-edit">Edit</button>
                                <button onClick={() => handleDelete(user.id)} className="btn-delete">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;

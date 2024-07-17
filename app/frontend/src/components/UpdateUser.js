import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { updateUser, getUserById } from '../services/userService';
import './UpdateUser.css';

function UpdateUser() {
    const { id } = useParams();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await getUserById(id);
                setNome(user.nome);
                setEmail(user.email);
                setMessage('');
                setError(false);
            } catch (error) {
                setError(true);
                setMessage(`Error fetching user data: ${error.message}`);
                setMessage('');
                console.error('Error fetching user data:', error);
            }
        };

        fetchUser();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await updateUser(id, { nome, email, senha });
            setMessage('Usuário atualizado com sucesso');
            setError(false);
        } catch (error) {
            const errorMsg = error.response ? error.response.data.error : error.message;
            setError(true);
            setMessage(`Erro ao atualizar usuário: ${errorMsg}`);
        }
    };

    return (
        <div className="update-user-container">
            <h2>Editar Usuario</h2>
            <form onSubmit={handleSubmit} className="update-user-form">
                <div className="form-group">
                    <label>ID</label>
                    <input
                        type="text"
                        value={id}
                        readOnly
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Nome</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Senha</label>
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        className="form-control"
                    />
                </div>
                <button type="submit" className="update-btn">Atualizar</button>
            </form>
            {message && <p className={`message ${error ? 'error' : 'success'}`}>{message}</p>}
        </div>
    );
}

export default UpdateUser;

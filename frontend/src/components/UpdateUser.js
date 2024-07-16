import React, { useState } from 'react';
import { updateUser } from '../services/userService';
import './UpdateUser.css';

function UpdateUser() {
    const [id, setId] = useState(''); // ID do usuário a ser atualizado
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await updateUser(id, { nome, email, senha });
            setMessage('Usuário atualizado com sucesso');
            setNome(''); // Limpa o campo nome
            setEmail(''); // Limpa o campo email
            setSenha(''); // Limpa o campo senha
            setId('');
        } catch (error) {
            const errorMsg = error.response ? error.response.data.error : error.message;
            setMessage(`Erro ao atualizar usuário: ${errorMsg}`);
        }
    };

    return (
        <div className="update-user-container">
            <h2>Update User</h2>
            <form onSubmit={handleSubmit} className="update-user-form">
                <div className="form-group">
                    <label>User ID</label>
                    <input
                        type="text"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        required
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
            {message && <p className="message">{message}</p>}
        </div>
    );
}

export default UpdateUser;

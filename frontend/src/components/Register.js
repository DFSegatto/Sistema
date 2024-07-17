import React, { useState } from 'react';
import { register } from '../services/authService';
import './Register.css';

function Register() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await register(nome, email, senha);
            setMessage('Usu�rio registrado com sucesso');
            setNome('');
            setEmail('');
            setSenha('');
        } catch (error) {
            setMessage('Erro ao registrar usu�rio. Por favor, tente novamente.');
        }
    };

    return (
        <div className="register-container">
            <h2>Registrar</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <div className="form-group">
                    <label>Nome</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Senha</label>
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                        className="form-control"
                    />
                </div>
                <button type="submit" className="register-btn">Registrar</button>
            </form>
            {message && <p className="message error">{message}</p>}
        </div>
    );
}

export default Register;

import React, { useState } from 'react';
import { login } from '../services/authService';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await login(email, senha);
            setMessage('Login successful');
            console.log('Token:', data.token); // Você pode armazenar o token no localStorage ou contexto
        } catch (error) {
            const errorMsg = error.response ? error.response.data.error : error.message;
            setMessage(`Error logging in: ${errorMsg}`);
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
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
                <button type="submit" className="login-btn">Entrar</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
}

export default Login;

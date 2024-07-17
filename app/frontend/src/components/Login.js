import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../authContext'; // Importe o hook personalizado
import { login as loginService } from '../services/authService'; // Importe o serviço de autenticação
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth(); // Use o hook personalizado

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { token } = await loginService(email, senha);
            login(token);
            navigate('/');
        } catch (error) {
            setError('Credenciais inválidas');
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
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="login-btn">Login</button>
            </form>
        </div>
    );
}

export default Login;

import React, { useState } from 'react';
import { register } from '../services/authService'; // Importe a função de registro
import './Register.css';

function Register() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false); // Adicionar estado para sucesso

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await register(nome, email, senha);
            setNome(''); // Limpar o campo nome
            setEmail(''); // Limpar o campo email
            setSenha(''); // Limpar o campo senha
            setError(''); // Limpar mensagens de erro
            setSuccess(true); // Definir estado de sucesso
        } catch (error) {
            setError('Erro ao registrar usuário');
            setSuccess(false); // Definir estado de falha
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
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">Usuario registrado com sucesso!</p>}
                <button type="submit" className="register-btn">Registrar</button>
            </form>
        </div>
    );
}

export default Register;

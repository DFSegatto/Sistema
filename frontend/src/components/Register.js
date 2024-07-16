import React, { useState } from 'react';
import { createUser } from '../services/userService';

function Register() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await createUser({ nome, email, senha });
            setMessage('User created successfully');
            setNome('');
            setEmail('');
            setSenha('');
        } catch (error) {
            const errorMsg = error.response ? error.response.data.error : error.message;
            setMessage(`Error creating user: ${errorMsg}`);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome</label>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Senha</label>
                    <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                </div>
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Register;

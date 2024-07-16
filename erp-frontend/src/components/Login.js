import React, { useState } from 'react';
import { login } from '../services/authService';

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
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Senha</label>
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;

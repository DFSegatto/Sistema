import React, { useState } from 'react';
import { updateUser } from '../services/userService';

function UpdateUser() {
  const [id, setId] = useState(''); // ID do usuário a ser atualizado
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedUser = await updateUser(id, { nome, email, senha });
      setMessage('User updated successfully');
      setNome(''); // Limpa o campo nome
      setEmail(''); // Limpa o campo email
      setSenha(''); // Limpa o campo senha
    } catch (error) {
      const errorMsg = error.response ? error.response.data.error : error.message;
      setMessage(`Error updating user: ${errorMsg}`);
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID</label>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
        </div>
        <div>
          <label>Nome</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Senha</label>
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </div>
        <button type="submit">Update</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default UpdateUser;

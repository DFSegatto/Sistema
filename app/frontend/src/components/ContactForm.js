import React, { useState } from 'react';
import { sendContactMessage } from '../services/contactService';
import './ContactForm.css';

function ContactForm() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await sendContactMessage({ nome, email, mensagem });
            setResponseMessage('Mensagem enviada com sucesso!');
            setNome('');
            setEmail('');
            setMensagem('');
        } catch (error) {
            setResponseMessage('Erro ao enviar a mensagem. Tente novamente.');
        }
    };

    return (
        <div className="contact-form-container">
            <h2>Contato</h2>
            <form onSubmit={handleSubmit} className="contact-form">
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
                    <label>Mensagem</label>
                    <textarea
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                        required
                        className="form-control"
                    />
                </div>
                <button type="submit" className="submit-btn">Enviar</button>
            </form>
            {responseMessage && <p className="response-message">{responseMessage}</p>}
        </div>
    );
}

export default ContactForm;

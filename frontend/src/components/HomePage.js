import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <div className="home-page">
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Bem-vindo ao Sistema de Gestao de Restaurantes</h1>
                    <p>Gerencie seu restaurante com facilidade e eficiencia.</p>
                </div>
            </div>
            <div className="features-section">
                <h2>Funcionalidades</h2>
                <ul>
                    <li>Gerenciamento de Reservas</li>
                    <li>Controle de Estoque</li>
                    <li>Gestao de Funcionarios</li>
                    <li>Relatorios e Analises</li>
                </ul>
            </div>
        </div>
    );
}

export default HomePage;

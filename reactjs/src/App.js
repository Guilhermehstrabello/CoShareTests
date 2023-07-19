/* eslint-disable react/jsx-no-comment-textnodes */
// App.js
import React, { useState } from 'react';
import './App.scss';

const App = () => {
  const [selectedSection, setSelectedSection] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const handleSearch = () => {
    // Lógica de pesquisa aqui
    console.log('Pesquisando por:', searchQuery);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleLogout = () => {
    // Lógica para deslogar o usuário aqui
    console.log('Usuário deslogado!');
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <ul className="menu">
        <li
            id='logotipo'
          >
            CoShare
          </li>
          
          <li
            className={`menu-item ${selectedSection === 'dashboard' ? 'active' : ''}`}
            onClick={() => handleSectionClick('dashboard')}
          >
            Dashboard
          </li>
          <li
            className={`menu-item ${selectedSection === 'quadro' ? 'active' : ''}`}
            onClick={() => handleSectionClick('quadro')}
          >
            Quadro
          </li>
          <li
            className={`menu-item ${selectedSection === 'analise' ? 'active' : ''}`}
            onClick={() => handleSectionClick('analise')}
          >
            Análise
          </li>
          <li
            className={`menu-item ${selectedSection === 'configuracoes' ? 'active' : ''}`}
            onClick={() => handleSectionClick('configuracoes')}
          >
            Configurações
          </li>
        </ul>
        <button className="logout-button" onClick={handleLogout}>
          Sair
        </button>
      </aside>
      <div className="content">
        <header className="header">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Pesquisar..."
              value={searchQuery}
              onChange={handleInputChange}
            />
            <button className="search-button" onClick={handleSearch}>
            </button>
          </div>
        </header>
        {/* Renderizar o conteúdo correspondente à seção selecionada */}
        {selectedSection === 'dashboard' && <Dashboard />}
        {selectedSection === 'quadro' && <Quadro />}
        {selectedSection === 'analise' && <Analise />}
        {selectedSection === 'configuracoes' && <Configuracoes />}
      </div>
    </div>
  );
};

const Dashboard = () => <h1>Dashboard</h1>;
const Quadro = () => <h1>Quadro</h1>;
const Analise = () => <h1>Análise</h1>;
const Configuracoes = () => <h1>Configurações</h1>;

export default App;

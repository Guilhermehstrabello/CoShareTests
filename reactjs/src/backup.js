// App.js
import React, { useState } from 'react';
import './App.scss';

const App = () => {
  const [selectedSection, setSelectedSection] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
 

  // Listas de teste
  const [todoList, setTodoList] = useState([]);
  const [doingList, setDoingList] = useState([]);
  const [doneList, setDoneList] = useState([]);

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

  // Função para criar um novo cartão
  const handleCreateCard = (listName) => {
    const newCard = {
      id: Date.now(),
      text: `Nova tarefa ${Date.now()}`,
    };

    switch (listName) {
      case 'todo':
        setTodoList([...todoList, newCard]);
        break;
      case 'doing':
        setDoingList([...doingList, newCard]);
        break;
      case 'done':
        setDoneList([...doneList, newCard]);
        break;
      default:
        break;
    }
  };

  // Função para mover um cartão para outra lista
  const handleMoveCard = (card, fromList, toList) => {
    switch (fromList) {
      case 'todo':
        setTodoList(todoList.filter((item) => item.id !== card.id));
        break;
      case 'doing':
        setDoingList(doingList.filter((item) => item.id !== card.id));
        break;
      case 'done':
        setDoneList(doneList.filter((item) => item.id !== card.id));
        break;
      default:
        break;
    }

    switch (toList) {
      case 'todo':
        setTodoList([...todoList, card]);
        break;
      case 'doing':
        setDoingList([...doingList, card]);
        break;
      case 'done':
        setDoneList([...doneList, card]);
        break;
      default:
        break;
    }
  };

  // Função para excluir um cartão de uma lista
  const handleDeleteCard = (card, listName) => {
    switch (listName) {
      case 'todo':
        setTodoList(todoList.filter((item) => item.id !== card.id));
        break;
      case 'doing':
        setDoingList(doingList.filter((item) => item.id !== card.id));
        break;
      case 'done':
        setDoneList(doneList.filter((item) => item.id !== card.id));
        break;
      default:
        break;
    }
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
        <div className="lists-container">
          <div className="list">
            <h2>A fazer</h2>
            <ul className="card-list">
              {todoList.map((card) => (
                <Card key={card.id} card={card} listName="todo" onMoveCard={handleMoveCard} onDeleteCard={handleDeleteCard} />
              ))}
            </ul>
            <button className="add-card-button" onClick={() => handleCreateCard('todo')}>+ Novo cartão</button>
          </div>

          <div className="list">
            <h2>Fazendo</h2>
            <ul className="card-list">
              {doingList.map((card) => (
                <Card key={card.id} card={card} listName="doing" onMoveCard={handleMoveCard} onDeleteCard={handleDeleteCard} />
              ))}
            </ul>
            <button className="add-card-button" onClick={() => handleCreateCard('doing')}>+ Novo cartão</button>
          </div>

          <div className="list">
            <h2>Concluído</h2>
            <ul className="card-list">
              {doneList.map((card) => (
                <Card key={card.id} card={card} listName="done" onMoveCard={handleMoveCard} onDeleteCard={handleDeleteCard} />
              ))}
            </ul>
            <button className="add-card-button" onClick={() => handleCreateCard('done')}>+ Novo cartão</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ card, listName, onMoveCard, onDeleteCard }) => {
  const handleMove = (toList) => {
    onMoveCard(card, listName, toList);
  };

  const handleDelete = () => {
    onDeleteCard(card, listName);
  };

  return (
    <li className="card">
      <span className="card-text">{card.text}</span>
      <div className="card-actions">
        {listName !== 'todo' && <button className="move-button" onClick={() => handleMove('todo')}>A fazer</button>}
        {listName !== 'doing' && <button className="move-button" onClick={() => handleMove('doing')}>Fazendo</button>}
        {listName !== 'done' && <button className="move-button" onClick={() => handleMove('done')}>Concluído</button>}
        <button className="delete-button" onClick={handleDelete}>Excluir</button>
      </div>
    </li>
  );
};

// Componentes Dashboard, Quadro, Analise e Configuracoes permanecem os mesmos
const Dashboard = () => <h1>Dashboard</h1>;
const Quadro = () => <h1>Quadro</h1>;
const Analise = () => <h1>Análise</h1>;
const Configuracoes = () => <h1>Configurações</h1>;

export default App;

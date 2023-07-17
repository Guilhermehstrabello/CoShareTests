

function App() {
  return (
    <div className="container">
      <nav className="navbar app"> App Bar</nav>
      <nav className="navbar board"> Board Bar</nav>
      <div className="board-collumns">
        <div className="column">
          <header>Brainstorm</header>
          <ul>
            <li>
              <img src="https://trello.com/1/cards/5e6005496e20e75989cf9807/attachments/5e6005496e20e75989cf9898/previews/5e6005496e20e75989cf9894/download/Design.png"/>
              Design and Research
            </li>
            <li>Second</li>
          </ul>
          <footer>Add another card</footer>
        </div>
      </div>
    </div>
  );
}
//
export default App;

import "./App.css";

function App() {
  return (
    <div data-role="page" className="App">

      <div className="Frame">
        <header className="App-header">
          <div className="AppHeaderInnerDiv">
            <p className="TextSize">Tilman - Sören Bertram</p>
          </div>
          <hr />
        </header>
        <div className="DataDivWrapper">
          <span className="DataDiv">
            <img
              src={require("./ressources/pictureMe.png")}
              alt="Pictr. of Self"
              className="resize"
            />
            <text>Birth: 05.09.2001</text>
            <text>Loc: Bavery, Landshut</text>
            <text>Mail: tilmansoerenw@protonmail.com</text>
            <a className="link_" href="https://github.com/d2tsb">Github: d2tsb</a>
          </span>
        </div>
        <div className="ListItem1">
          <ul className="ul">
            <li>
              <a href="#home">About</a>
            </li>
            <li>
              <a href="#news">Preferences and Focus</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

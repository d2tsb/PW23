import "./App.css";
import "./Texts";
import Texts from "./Texts";

function App() {
  return (
    <body>
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
              <text style={{paddingTop: "5px"}}>Birth: 05.09.2001</text>
              <text>Loc: Bavaria, Landshut</text>
              <div>
                <text>Mail:</text>{" "}
                <a className="link_" href="mailto:tilmansoerenw@protonmail.com">
                  tilmansoerenw@protonmail.com
                </a>
              </div>
              <div>
                <text> Github: </text>
                <a className="link_" href="https://github.com/d2tsb">
                  d2tsb
                </a>
              </div>
            </span>
          </div>
          <Texts />
        </div>
      </div>
    </body>
  );
}

export default App;

import "./App.css";

function App() {
  return (
    <div className="Frame">
        <header className="App-header">
          <div className="AppHeaderInnerDiv">
            <p className="">Tilman - Sören Bertram</p>
          </div>
          <hr />
          <img
            src={require("./ressources/pictureMe.png")}
            alt="Pictr. of Self"
            className="resize"
          />
        </header>
    </div>
  );
}

export default App;

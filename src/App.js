import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import "animate.css";
import TicTacToe from "./TicTacToe";
import Rps from "./Rps";
import Wordle from "./Wordle";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/tictactoe">
                <TicTacToe />
              </Route>
              <Route path="/rps">
                <Rps />
              </Route>
              <Route path="/wordle">
                <Wordle />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

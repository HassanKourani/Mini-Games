import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h2 id="all-games">All Games</h2>
      <div className="games">
        <Link className="links game-card" to="/tictactoe">
          <div>TicTacToe</div>
        </Link>
        <Link className="links game-card" to="/wordle">
          <div>Wordle</div>
        </Link>
        <Link className="links game-card" to="/rps">
          <div>Rock Paper Scissors</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;

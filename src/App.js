import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <img src='./logo.svg' alt='logo'></img>

        <div className="score">
          <p>SCORE</p>
          <span>12</span>
        </div>
      </header>

      <main className="play">

        <button className="choice-btn" data-choice="paper">
          <div className="choice paper">
            <img src='./icon-paper.svg' alt='icon-paper'></img>
          </div>
        </button>

        <button className="choice-btn" data-choice="scissors">
          <div className="choice scissors">
            <img src='./icon-scissors.svg' alt='icon-scissors'></img>
          </div>
        </button>

        <button className="choice-btn" data-choice="rock">
          <div className="choice rock">
            <img src='./icon-rock.svg' alt='icon-rock'></img>
          </div>
        </button>
      </main>

      Rules

      You Picked
      The House Picked

      You Win
      You Lose

      Play Again
    </div>
  );
}

export default App;

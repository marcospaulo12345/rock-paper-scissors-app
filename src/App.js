import {useState} from 'react';
import './App.css';

import ChoiceBtn from './components/ChoiceBtn/index';

function App() {

  const [choice, setChoice] = useState(false);

  return (
    <div className="container">
      <header>
        <img src='./logo.svg' alt='logo'></img>

        <div className="score">
          <p>SCORE</p>
          <span>12</span>
        </div>
      </header>

      <main >
        {choice && (
        <section className="play">
          <ChoiceBtn choice="paper" typeBtn='1' />
          <ChoiceBtn choice="scissors" typeBtn='1'/>
          <ChoiceBtn choice="rock" typeBtn='1'/>
        </section>

        )}

        <section className="results">
          <div className='picked'>
            <h1>YOU PICKED</h1>
            <ChoiceBtn choice="scissors" typeBtn='2' />
          </div>

          { true && (<div className='result'>
            <h1>YOU LOSE</h1>
            <button>PLAY AGAIN</button>
          </div>)}

          <div className='picked'>
            <h1>THE HOUSE PICKED</h1>
            <ChoiceBtn choice="rock" typeBtn='2' />
          </div>
        </section>
      </main>

      <button>Rules</button>
    </div>
  );
}

export default App;

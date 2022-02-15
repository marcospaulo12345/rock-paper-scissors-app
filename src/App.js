import {useState, useRef, useEffect} from 'react';
import './App.css';

import ChoiceBtn from './components/ChoiceBtn/index';
import Modal from './components/Modal/index';

function App() {

  const [choice, setChoice] = useState('');
  const [choiceCPU, setChoiceCPU] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState('YOU LOSE');
  const [num, setNum] = useState(3);
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0);

  let intervalRef = useRef()

  const decreaseNum = () => setNum((prev) => {
    if(prev != 0){
      return prev - 1
    }else{
      clearInterval(intervalRef.current);
    }
  });

  function handleChoice(choice) {
    setChoice(choice);

    intervalRef.current = setInterval(decreaseNum, 1000);
  }

  function playAgain() {
    setChoice('');
    setShowResult(false);
    setNum(3);
  }

  function play() {
    let choiceCPU = ['paper', 'scissors', 'rock'];

    let random = Math.floor(Math.random() * 3);
    setChoiceCPU(choiceCPU[random]);


    if(choice === 'paper' && choiceCPU[random] === 'rock') {
      setResult('YOU WIN');
      setScore(score + 1);
    } 
    if(choice === 'rock' && choiceCPU[random] === 'scissors') {
      setResult('YOU WIN');
      setScore(score + 1);
    } 
    if(choice === 'scissors' && choiceCPU[random] === 'paper') {
      setResult('YOU WIN');
      setScore(score + 1);
    } 

    if(choice === 'rock' && choiceCPU[random] === 'paper') {
      setResult('YOU LOSE');
      setScore(score - 1);
    } 
    if(choice === 'scissors' && choiceCPU[random] === 'rock') {
      setResult('YOU LOSE');
      setScore(score - 1);
    } 
    if(choice === 'paper' && choiceCPU[random] === 'scissors') {
      setResult('YOU LOSE');
      setScore(score - 1);
    } 
    
    if(choice === choiceCPU[random]){
      setResult("It's a tie!");
    }

  }

  useEffect(() => {
    if(num === 0){
      setShowResult(true);
      play();
    }
  }, [num]);

  return (
    <div className="container">
      <header>
        <img src='./logo.svg' alt='logo'></img>

        <div className="score">
          <p>SCORE</p>
          <span>{score}</span>
        </div>
      </header>

      <main >
        {choice === '' ? (
          <section className="play">
            <ChoiceBtn choice="paper" typeBtn='1' handleChoice={handleChoice} />
            <ChoiceBtn choice="scissors" typeBtn='1' handleChoice={handleChoice}/>
            <ChoiceBtn choice="rock" typeBtn='1' handleChoice={handleChoice}/>
          </section>
        ) : (
          <section className="results">
            <div className='picked'>
              <h1>YOU PICKED</h1>
              <ChoiceBtn choice={choice} typeBtn='2' />
            </div>

            { showResult && <div className='result'>
              <h1>{result}</h1>
              <button onClick={playAgain}>PLAY AGAIN</button>
            </div>}

            <div className='picked'>
              <h1>YOU HOUSE PICKED</h1>
              { num > 0 ? (
                <div className='count-down'>
                  <span>{num}</span>
                </div>
              ) : (
                <ChoiceBtn choice={choiceCPU} typeBtn='2' />
              )}
            </div>
          </section>
        )}

      </main>

      <button className='btn-rules' onClick={() => setShowModal(true)}>RULES</button>
      {showModal && (
        <Modal open={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default App;

import React, { useState } from 'react';

function App() {
  const [luckyNumber, setLuckyNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [count, setCount] = useState(0);

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const num = parseInt(guess);
    if (isNaN(num)) {
      alert('Please enter a valid number!');
    } else {
      setCount(count + 1);
      if (num < luckyNumber) {
        alert('You guessed a smaller number.');
      } else if (num > luckyNumber) {
        alert('You guessed a bigger number.');
      } else {
        alert(`Congratulations! You guessed the right number in ${count + 1} attempts.`);
        setLuckyNumber(Math.floor(Math.random() * 100) + 1);
        setGuess('');
        setCount(0);
      }
    }
  };

  return (
    <div className="App">
      <h1>Lucky Number Guessing Game</h1>
      <p>Guess a number between 1 and 100:</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={guess} onChange={handleGuessChange} />
        <button type="submit">Guess</button>
      </form>
    </div>
  );
}

export default App;

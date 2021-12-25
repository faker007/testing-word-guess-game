import './App.css';

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';

function App() {
  return (
    <div data-test="component-app" className="container">
      <h1>Word Guess Game</h1>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
      />
    </div>
  );
}

export default App;

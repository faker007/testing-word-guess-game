import React from 'react';

const Input = ({ success, secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState('');

  if (success) {
    return <div data-test="component-input" />;
  }

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={(event) => {
            event.preventDefault();
            setCurrentGuess('');
          }}
          // TODO: update guessedWords
          // TODO: check against secretWord and update success
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Input;

import axios from 'axios';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
};

/**
 * @function correctGuess
 * @returns {object} - Action object with type 'CORRECT_GUESS'
 */
export function correctGuess() {
  return { type: actionTypes.CORRECT_GUESS };
}

export const getSecretWord = () => {
  // TODO: write actual action in Redux / context section
  return axios.get('http://localhost:3000').then((response) => response.data);
};

import axios from 'axios';

export const getSecretWord = () => {
  // TODO: write actual action in Redux / context section
  return axios.get('http://localhost:3000').then((response) => response.data);
};

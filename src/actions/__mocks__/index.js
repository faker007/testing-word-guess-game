module.exports = {
  ...jest.requireActual('..'),
  __esModule: true, // update return value for Redux / contet implementation
  getSecretWord: jest.fn().mockReturnValue(Promise.resolve('party')),
};

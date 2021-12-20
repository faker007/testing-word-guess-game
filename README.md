# Learning with me, Jin

React 테스팅 도구인 Jest와 Enzyme에 대해서 배워요! 🎉

## 순서

### 1. click-counter

- [Click me!](https://github.com/faker007/testing-click-counter)

### 2. word-guess-game (now)

- [Click me!](https://github.com/faker007/testing-word-guess-game)

## Learning points

### Notes about PropTypes Testing

- There's no need for PropTypes if you're using `Typescript`
- use Typescript's `interface`

### What is a mock function

- Fake function that runs instead of a real function
  - Can run alternate code, or just act as a placeholder
- Jest replaces real function with mock

### Why Mock?

- Mock serve three purposes
- Keep real function from running
  - Prevent side-effects like network calls
- Spy on function to see when it's called
- Provide return values
  - Set up test conditions

### Method for Mocking Methods in Jest

- Reset properties on React module to replace methods with mocks
  - Will go into more detail on this later
- This means: no destructuring on imports in non-test code

### currentGuess State

- Local state for Input called `currentGuess` with `useState` hook
  - no other components need it
- Update `currentGuess` state on field change (state-controlled)
- In future lectures:
  - clear `currentGuess` state on submit
  - update `guessWords` shared state
    - `Redux` or `React contenxt`
  - check `currentGuess` against secretWord

### Notes on mocking useState

- Destructure `useState` on import
  - props: cleaner production code
  - cons: test code more complicated
- Multiple `useState` statements?
  - Option 1: useReducer, discussed in future lecture
  - Option 2: skip unit tests and got straight to functional tests(E2E)

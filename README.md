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

### Testing asynchronous functions

- `getSecretWord` returns `promise`
- Put assertions in `.then()` callback after running `getSecretWord()`
  - Assertion will run after `promise` resolves

### So Much Asynchronicity!

- `moxios.wait()` is alos asynchronous
- More important then ever to see test fails
- Very eazy for tests to complete before async

### Mocking Modules in Jest

- Before, we mocked pieces of modules individually: React.useState
- That was done test-file-by-test-file
  - reasonable: sometimes wanted to mack, sometimes didn't
- We are going to want to mock the `getSecretWord` action everywhere
  - never want to go across the network except maybe for e2e
- For this: mock the module globally

### Intro to Shared State

- Shared State is used for props needed by lots of components
  - Global settings (Languages, visual theme)
- Deeply nested components need access but ancestors don't

### React Context vs. Redux

- Simple apps: Context works great
- Redux has better tools for more sophisticated apps:
  - optimization for high frequency updates
  - rich ecosystem for developers
    - tools for debugging
  - middleware for automatic code upon any action
    - for example, logging events to analytics pipelines

### Note on Artifcie

- Jotto is too simple to need shared state
- Only two levels of components
  - keep state at App level
  - pass state and setters and prop
- Simple app for learning
  - shared state is artificial

### success State Planning

- Action creator `CORRECT_GUESS` action
- Success reudcer
  - Controls `success` piece of state
  - Start with value of `false`
  - Flip `success` to `true` upon `CORRECT_GUESS` action

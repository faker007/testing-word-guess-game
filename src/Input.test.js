import React from 'react';

import { shallow } from 'enzyme';

import { findByTestAttr } from '../test/testUtils';
import Input from './Input';

// mock entire module for destructuring on import
const mockSetCurrentGuess = jest.fn();

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: (initialState) => [initialState, mockSetCurrentGuess],
}));

const setup = (success = false, secretWord = 'party') => {
  return shallow(<Input success={success} secretWord={secretWord} />);
};

describe('render', () => {
  describe('success is ture', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup(true);
    });

    test('Input renders without error', () => {
      const wrapper = setup();
      const inputComponent = findByTestAttr(wrapper, 'component-input');
      expect(inputComponent.length).toBe(1);
    });

    test('input box does not show', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(false);
    });

    test('submit button does not show', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.exists()).toBe(false);
    });
  });

  describe('success is false', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup(false);
    });

    test('Input renders without error', () => {
      const wrapper = setup();
      const inputComponent = findByTestAttr(wrapper, 'component-input');
      expect(inputComponent.length).toBe(1);
    });

    test('input box shows', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(true);
    });

    test('submit button shows', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.exists()).toBe(true);
    });
  });
});

describe('state controlled input field', () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;
  let originalUseState;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();

    originalUseState = React.useState;

    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

    wrapper = setup();
  });

  afterEach(() => {
    React.useState = originalUseState;
  });

  test('state updates with value of input box upon change', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box');

    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  test('field is cleared upon submit button click', () => {
    const wrapper = setup();
    const submitButton = findByTestAttr(wrapper, 'submit-button');

    submitButton.simulate('click', { preventDefault() {} });

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});

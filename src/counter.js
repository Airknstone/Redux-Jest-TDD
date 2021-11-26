import { createStore } from 'redux'; // Import create store from redux npm i redux

export const IncreaseCount = (amount = 1) => ({
  //This is the Action
  type: 'INCREASE_COUNT',
  payload: amount,
});

const DEFAULT_STATE = {
  //Default State
  count: 0,
};

export function reducer(state = DEFAULT_STATE, action = {}) {
  //This is the Reducer
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {
        ...state,
        count: state.count + action.payload,
      };
  }
  return state;
}

export const store = createStore(reducer);

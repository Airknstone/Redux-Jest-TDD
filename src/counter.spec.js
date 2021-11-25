import { IncreaseCount, reducer, store } from './counter';

describe('Counter', () => {
  it('should have a default state', () => {
    const result = reducer();
    expect(result.count).toEqual(0);
  });
  it('should increase the count', () => {
    const action = IncreaseCount();
    const result = reducer(undefined, action);
    expect(result.count).toEqual(1);
  });
  it('should increase the count with a custom count value', () => {
    const action = IncreaseCount(5);
    const result = reducer(undefined, action);
    expect(result.count).toEqual(5);
  });
});

describe('Sheep counting store', () => {
  it('should return the state', () => {
    const state = store.getState();
    expect(state.count).toEqual(0);
  });
});

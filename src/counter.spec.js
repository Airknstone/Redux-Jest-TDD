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

//This is the API of Redux Store
describe('Sheep counting store', () => {
  it('should return the state', () => {
    const state = store.getState();
    expect(state.count).toEqual(0);
  });
  it('should dispatch actions and update the state', () => {
    const action = IncreaseCount();
    store.dispatch(action);
    expect(store.getState().count).toEqual(1);
  });
  it('should call the subscribers when the store data changes', () => {
    const listener = jest.fn();
    store.subscribe(listener);
    const action = IncreaseCount();
    store.dispatch(action);
    expect(listener).toHaveBeenCalled();
  });
  it('should unsubscribe from store', () => {
    const listener = jest.fn();
    const unsubscribe = store.subscribe(listener);
    const action = IncreaseCount();
    unsubscribe();
    store.dispatch(action);
    expect(listener).not.toHaveBeenCalled();
  });
});

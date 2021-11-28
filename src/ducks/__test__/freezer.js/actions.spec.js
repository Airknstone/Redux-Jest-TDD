import { actions, types } from '../../freezer';

describe('updateTemperature()', () => {
  it('should contain the right action type', () => {
    const action = actions.updateTemperature();
    expect(action.type).toEqual(types.UPDATE_TEMPERATURE);
  });
  it('should contain the temperature in the payload', () => {
    const action = actions.updateTemperature(-5);
    expect(action.payload).toEqual(-5);
  });
});
describe('addProductToFreezer()', () => {
  it('should contain the right action type', () => {
    const action = actions.addProductToFreezer();
    expect(action.type).toEqual(types.ADD_PRODUCT_TO_FREEZER);
  });
  it('should have the name in the action payload', () => {
    const action = actions.addProductToFreezer('foo');
    expect(action.payload.name).toEqual('foo');
  });
  it('should have the amout in the action payload', () => {
    const action = actions.addProductToFreezer('foo', 5);
    expect(action.payload.amount).toEqual(5);
  });
  it('should have the default amout in the action payload', () => {
    const action = actions.addProductToFreezer('foo');
    expect(action.payload.amount).toEqual(20);
  });
});
describe('doSomething()', () => {
  const getState = () => ({
    freezer: {
      temperature: 10,
    },
  });
  it('should dispatch the "FOO" action', () => {
    const dispatch = jest.fn();
    const action = actions.doSomething();
    action(dispatch, getState);
    expect(dispatch.mock.calls.length).toEqual(1);
    expect(dispatch.mock.calls[0][0].type).toEqual('FOO');
  });
  it('should use the temperature in the state for the payload', () => {
    const dispatch = jest.fn();
    const action = actions.doSomething();
    action(dispatch, getState);
    expect(dispatch.mock.calls.length).toEqual(1);
    expect(dispatch.mock.calls[0][0].payload).toEqual(10);
  });
});

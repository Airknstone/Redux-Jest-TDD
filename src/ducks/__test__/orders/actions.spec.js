import { actions, types } from '../../orders';

describe('placeOrders()', () => {
  it('should have the right action type', () => {
    const action = actions.placeOrder({});
    expect(action.type).toEqual(types.PLACE_ORDER);
  });
  /**
   * customerName: String
   * createdAt : Number
   * cone: Boolean
   * scoops: Object
   */
  it('should contain the customer name in the payload', () => {
    const action = actions.placeOrder({
      customerName: 'Cindy',
    });
    expect(action.payload.customerName).toEqual('Cindy');
  });
  it('should contain createdAT in the payload', () => {
    const action = actions.placeOrder({
      createdAt: 12,
    });
    expect(action.payload.createdAt).toEqual(12);
  });
  it('should contain current date if no selection is madein the payload', () => {
    const action = actions.placeOrder({});
    expect(typeof action.payload.createdAt).toEqual('number');
  });
  it('should contain the cone boolean in the payload', () => {
    const action = actions.placeOrder({
      cone: true,
    });
    expect(action.payload.cone).toEqual(true);
  });
  it('should default to true if no option is given', () => {
    const action = actions.placeOrder({});
    expect(action.payload.cone).toEqual(true);
  });
  it('should contain the number of scoops in the payload', () => {
    const action = actions.placeOrder({
      scoops: {},
    });
    expect(action.payload.scoops).toEqual({});
  });
});

describe('fulfillOrder()', () => {
  it('should have the right action type', () => {
    const action = actions.fulfillOrder(5);
    expect(action.type).toEqual(types.FULFILL_ORDER);
  });
  it('should have the ID in the payload', () => {
    const action = actions.fulfillOrder(5);
    expect(action.payload).toEqual(5);
  });
});

describe('payForOrder()', () => {
  it('should have the right action type', () => {
    const action = actions.payForOrder(5);
    expect(action.type).toEqual(types.PAY_FOR_ORDER);
  });
  it('should have the ID in the payload', () => {
    const action = actions.payForOrder(5);
    expect(action.payload).toEqual(5);
  });
});
describe('cancelOrder()', () => {
  it('should have the right action type', () => {
    const action = actions.cancelOrder(5);
    expect(action.type).toEqual(types.CANCEL_ORDER);
  });
  it('should have the ID in the payload', () => {
    const action = actions.cancelOrder(5);
    expect(action.payload).toEqual(5);
  });
});

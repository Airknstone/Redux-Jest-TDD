import { reducer, actions } from '../../orders';

describe('Orders reducer', () => {
  it('Should store the order in the state', () => {
    const newstate = reducer(
      undefined,
      actions.placeOrder({
        customerName: 'Cindy',
        cone: false,
        scoops: {
          vanilla: 1,
        },
      })
    );
    expect(newstate.length).toEqual(1);
    expect(newstate[0].customerName).toEqual('Cindy');
    expect(newstate[0].cone).toEqual(false);
    expect(newstate[0].scoops).toEqual({
      vanilla: 1,
    });
    expect(typeof newstate[0].createdAt).toEqual('number');
    expect(newstate[0].status).toEqual('pending');
  });

  it('should mark a given order as fulfilled in the store', () => {
    const existingState = [
      {
        customerName: 'Cindy',
        status: 'pending',
      },
    ];
    const newState = reducer(existingState, actions.fulfillOrder(0));
    expect(newState[0].status).toEqual('fulfilled');
  });
  it('should mark a given order as paid in the store', () => {
    const existingState = [
      {
        customerName: 'Cindy',
        status: 'pending',
      },
    ];
    const newState = reducer(existingState, actions.payForOrder(0));
    expect(newState[0].status).toEqual('paid');
  });
  it('should remove an order from the store', () => {
    const existingState = [
      {
        customerName: 'Cindy',
        status: 'pending',
      },
    ];
    const newState = reducer(existingState, actions.cancelOrder(0));
    expect(newState).toEqual([]);
  });
});

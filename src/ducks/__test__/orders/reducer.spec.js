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
});

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { actions, types } from '../../employees';

describe('fetchEmployees()', () => {
  it('should dispatch the Request action when the action is dispatched', () => {
    const spy = jest.fn();
    const thunk = actions.fetchEmployees();
    thunk(spy);

    expect(spy.mock.calls[0][0]).toEqual({
      type: types.FETCH_EMPLOYEES_REQUEST,
    });
  });

  it('should dispathc the success action when the data is fetched successfully', () => {
    const fakeData = [1, 2, 3];
    const mockAxios = new MockAdapter(axios);
    mockAxios.onGet('/employees.json').reply(200, fakeData);

    const spy = jest.fn();
    const thunk = actions.fetchEmployees();
    // eslint-disable-next-line jest/valid-expect-in-promise
    thunk(spy).then(() => {
      expect(spy.mock.calls[1][0]).toEqual({
        type: types.FETCH_EMPLOYEES_SUCCESS,
        payload: fakeData,
      });
    });
  });
  it('should dispathc the Failure action when the data is fetched successfully', () => {
    const mockAxios = new MockAdapter(axios);
    mockAxios.onGet('/employees.json').reply(404);

    const spy = jest.fn();
    const thunk = actions.fetchEmployees();
    // eslint-disable-next-line jest/valid-expect-in-promise
    thunk(spy).then(() => {
      expect(spy.mock.calls[1][0]).toEqual({
        type: types.FETCH_EMPLOYEES_FAILURE,
        payload: 'Request failed with status code 404',
      });
    });
  });
});

import { types, reducer } from '../../employees';

describe('Fetching employees', () => {
  describe('Request start', () => {
    it('should set the loading property to true when the fetchin starts', () => {
      const result = reducer(undefined, {
        type: types.FETCH_EMPLOYEES_REQUEST,
      });
      expect(result.loading).toEqual(true);
    });
  });
  describe('Successful fetch', () => {
    it('should set the loading property to false', () => {
      const result = reducer(
        { loading: true },
        {
          type: types.FETCH_EMPLOYEES_SUCCESS,
        }
      );
      expect(result.loading).toEqual(false);
    });
    it('should store the employee data', () => {
      const fakeData = [1, 2, 3];
      const result = reducer(undefined, {
        type: types.FETCH_EMPLOYEES_SUCCESS,
        payload: fakeData,
      });
      expect(result.data).toEqual(fakeData);
    });
  });
  describe('Failed fetch', () => {
    it('should set the loading property to false', () => {
      const result = reducer(
        { loading: true },
        {
          type: types.FETCH_EMPLOYEES_FAILURE,
        }
      );
      expect(result.loading).toEqual(false);
    });
    it('should store the Error', () => {
      const fakeData = '404 Not Found';
      const result = reducer(undefined, {
        type: types.FETCH_EMPLOYEES_FAILURE,
        payload: fakeData,
      });
      expect(result.error).toEqual(fakeData);
    });
  });
});

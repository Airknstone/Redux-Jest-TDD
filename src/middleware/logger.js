// eslint-disable-next-line import/no-anonymous-default-export
export default (store) => (next) => (action) => {
  console.log('Action', action);
  next(action);
  console.log('State:', store.getState());
};

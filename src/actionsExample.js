// Example of an action
const action = {
  type: 'INCREASE_COUNT',
  payload: 3,
};

// A small helper function that creates an action, called an action creator
// is a function and can take in parameters, to do something ie add to the payload.
function actionCreator() {
  return { ... } //returns your object
}
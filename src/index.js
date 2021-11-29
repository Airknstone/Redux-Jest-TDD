// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
import store from './store';
// import { actions } from './ducks/freezer';
// import { VANILLA } from './constants/flavors';
import { actions } from './ducks/employees';

//add a listener to a store by sbscribing
//removed because we can do that with middleware
// store.subscribe(() => console.log(store.getState()));

//dispatch actions for freezer
// store.dispatch(actions.updateTemperature(-8));
// store.dispatch(actions.addProductToFreezer(VANILLA, 15));
// store.dispatch(actions.doSomething());

store.dispatch(actions.fetchEmployees());

// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
import store from './store';
import { actions } from './ducks/freezer';
import { VANILLA } from './constants/flavors';

//add a listener to a store by sbscribing
store.subscribe(() => console.log(store.getState()));

//dispatch actions
store.dispatch(actions.updateTemperature(-8));
store.dispatch(actions.addProductToFreezer(VANILLA, 15));

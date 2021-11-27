// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
import store from './store';
import { addProductToFreezer, updateTemperature } from './actions/freezer';
import { VANILLA } from './constants/flavors';

//add a listener to a store by sbscribing
store.subscribe(() => console.log(store.getState()));

//dispatch actions
store.dispatch(updateTemperature(-8));
store.dispatch(addProductToFreezer(VANILLA, 15));

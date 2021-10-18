import { createStore } from 'redux';
import reducer from './redeucer';

const store = createStore(reducer);

export default store;

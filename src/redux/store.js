import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import counterValueReducer from './counter/counter-reducer'
import colorsReducer from './colors/colors-reducer'

const rootReducer = combineReducers({
    counterValue: counterValueReducer,
    colors: colorsReducer
})

const store = createStore(rootReducer,composeWithDevTools())

export default store;
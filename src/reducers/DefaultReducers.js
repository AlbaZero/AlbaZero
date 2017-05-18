import {combineReducers} from 'redux';
import * as reducers1 from './NeedsSearch';
import * as userData from './UserReducer';

const allReducers = Object.assign({}, reducers1, userData);
const reducer = combineReducers(allReducers);

export default reducer;

import {NA_CHANGE_MAXPRICE} from '../actions/needsActions';

const initialState = {
  needsSearch: {
    techValue: '',
    lastSort: 'name',
    maxPrice: 2000,
    availableWeeks: 52,
    searchResult: []
  }
};

export function updateSearch(state = initialState, action) {
  switch (action.type)
  {
    case NA_CHANGE_MAXPRICE:
      return Object.assign({}, state, {maxPrice: action.weeks})
    default:
      return state;
  }
}

//export default ConsultantUsers;

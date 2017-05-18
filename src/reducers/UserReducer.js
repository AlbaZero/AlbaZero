import {USER_REQUEST, USER_RECEIVE} from '../actions/UserObjectActions';


export function userData(state = {
  isFetching: false,
  userObject: {}
}, action) {
  switch(action.type)
  {
    case USER_REQUEST:
      console.log("fetching user");
      return Object.assign({}, state, {isFetching: true});
    case USER_RECEIVE:
      return Object.assign({}, state, {
        isFetching: false,
        userObject: action.user,
        lastUpdate: action.receivedAt
      });
    default:
      return state;
  }
};



/*
export function UserObject(state, action)
{
  switch(action.type) {
    case "updateUser":
      return state;
    default:
      return state;
  }
}
*/

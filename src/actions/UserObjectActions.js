
export const USER_REQUEST = 'user_fetch';
function requestUser(userid)
{
  return {
    type: USER_REQUEST,
    userid
  }
}

export const USER_RECEIVE = 'user_receive';
function receiveUser(userid, json)
{
  return {
    type: USER_RECEIVE,
    userid,
    user: json,
    receivedAt: Date.now()
  }
}

export function fetchUser(userid) {

  return function (dispatch) {
    dispatch(requestUser(userid));

    return fetch('http://localhost:5094/api/User')
      .then(response => response.json())
      .then(json =>
          dispatch(receiveUser(userid, json))
      );
  }

}

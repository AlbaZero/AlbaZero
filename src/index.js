import "babel-polyfill";
import thunkMiddleware from 'redux-thunk';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/DefaultReducers';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route, hashHistory} from 'react-router';
import App from './App';
import Needs from './pages/needs/needs';
import Purchase from './pages/purchase/purchase';
import Inbox from './pages/inbox/inbox';
import Settings from './pages/settings/settings';
import Splash from './pages/splash/splash';
import './assets/style.css';

//import {fetchUser} from './actions/UserObjectActions';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

/*
//Create redux store
const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware
  )
);
*/

//console.log(store.getState());

/*
store.dispatch(fetchUser(1)).then(() =>
  console.log(store.getState())
);
*/

const muiTheme = getMuiTheme({
  appBar: {
    color: '#c81530',
    textColor: '#ffffff'
  }
});

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={hashHistory}>
      <Route path="/" component={Splash}/>
      <Route path="/needs" component={Needs}/>
      <Route path="/purchase" component={Purchase}/>
      <Route path="/inbox" component={Inbox}/>
      <Route path="/settings" component={Settings}/>
      <Route path="/dash" component={App}/>
    </Router>
  </MuiThemeProvider>
,
  document.getElementById('root')
);

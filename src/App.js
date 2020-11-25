import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// import Layout from './components/Layout/Layout';
import Developerinterface from './containers/DeveloperInterface/DeveloperInterface';
import Login from './containers/Login/Login';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/Developerinterface" component={Developerinterface}></Route>
          <Route path="/" component={Login}></Route>
        </Switch>
    </div>
  );
}

export default App;

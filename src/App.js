import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Account from './components/Account';
import Login from './components/Login'
import SignUp from './components/SignUp';
import firebase from './components/firebaseAuth'


function App() {
        const [firebaseInitialized,setFirebaseInitialized] = useState(false)

        useEffect(() => {
          firebase.isInitialized().then((val)=> {
            setFirebaseInitialized(val)
          })
        })
  return firebaseInitialized !== false ? (
    <Router>
      <div className="App">
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/account" component={Account} />
        </Switch>
      </div>
    </Router>
  ) : <div className="loader">loader</div>
}

export default App;

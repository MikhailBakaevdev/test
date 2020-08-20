import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
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
    <div className="App">
      <Router>
        <div>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
        <Route  path="/account" exact component={Account} />
      </Router>
    </div>
  ) : <div className="loader">loader</div>
}

export default App;

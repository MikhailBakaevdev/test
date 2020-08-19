import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Account from './components/Account';
import Login from './components/Login'
import SignUp from './components/SignUp'


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={Account} />
          <div className="navbar">
            <Link className="nav" style={{textDecoration: 'none'}} to="/signup">
              <span className="links">
                Register
              </span>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/login">
              <span className="links">
                login
              </span>
            </Link>
          </div>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </div>
  );
}

export default App;

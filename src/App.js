import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './comps/Home';
import Login from './comps/Login';
import HomeUpload from './comps/HomeUpload';
import SignUp from './comps/SignUp';
import { AuthProvider } from './comps/Auth';
import PrivateRoute from './private/PrivateRoute'

function App() {

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute exact path="/loged" component={HomeUpload} />


        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

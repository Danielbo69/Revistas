import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import UploadForm from './comps/UploadForm';
import HomeUpload from './pages/HomeUpload';
import SignUp from './pages/SignUp';
import { AuthProvider } from './comps/Auth';
// import PrivateRoute from './private/PrivateRoute'

function App() {

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Upload" component={UploadForm} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signupps" component={SignUp} />
          {/* <PrivateRoute exact path="/loged" component={Home} /> */}


        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Welcome from './pages/externalPages/Welcome'
import About from './pages/externalPages/About/About'
import Contact from './pages/externalPages/Contact'
import FourZeroFour from './pages/externalPages/FourZeroFour'
import ResetPassword from './pages/ResetPassword/ResetPassword'
import AdminSignin from './pages/admin/AdminSignin'
import StudentSignup from './pages/student/StudentSignup'
import StudentSignin from './pages/student/StudentSignin'
import StudentDashboard from './pages/student/StudentDashboard';
import ParentSignup from './pages/parent/ParentSignup'
import ParentSignin from './pages/parent/ParentSignin'
import ParentDashboard from './pages/parent/ParentDashboard';

const App = () => {
  return (
    <Router>
    <Switch>
      <Route exact path='/' component={ Welcome } />
      <Route path='/about' component={ About } />
      <Route path='/contact' component={ Contact } />
      <Route path='/404' component={ FourZeroFour } />
      <Route path='/reset-password' component={ ResetPassword } />
      <Route path='/students/signup' component={StudentSignup} />
      <Route path='/students/signin' component={StudentSignin} />
      <Route path='/students/dashboard' component={StudentDashboard} />
      <Route path='/parents/signup' component={ParentSignup} />
      <Route path='/parents/signin' component={ParentSignin} />
      <Route path='/parents/dashboard' component={ParentDashboard} />
      <Route path='/admin/signin' component={AdminSignin} />
      
    </Switch>
    </Router>
  );
}

export default App;

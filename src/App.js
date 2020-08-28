import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
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
import MathematicsJs1 from "./pages/topics/Js1Topics/MathematicsJs1";
import MathematicsJs1Article from "./pages/articles/MathematicsJs1Article";


const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={ Welcome } />
      <Route exact path='/about' component={ About } />
      <Route exact path='/contact' component={ Contact } />
      <Route exact path='/404' component={ FourZeroFour } />
      <Route exact path='/reset-password' component={ ResetPassword } />
      <Route exact path='/students/signup' component={ StudentSignup } />
      <Route exact path='/students/signin' component={ StudentSignin } />
      <Route exact path='/students/dashboard/courses' component={ StudentDashboard } />
      <Route exact path='/parents/signup' component={ ParentSignup } />
      <Route exact path='/parents/signin' component={ ParentSignin } />
      <Route exact path='/parents/dashboard' component={ ParentDashboard } />
      <Route exact path='/admin/signin' component={ AdminSignin } />
      <Route exact path='/topics/mathematics/js1' component={ MathematicsJs1 } />
      <Route exact path='/articles/mathematics/js1' component={ MathematicsJs1Article } />
    </Switch>
    </BrowserRouter>
  );
}

export default App;

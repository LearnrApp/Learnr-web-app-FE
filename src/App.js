import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Welcome from './pages/Welcome'

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={ Welcome } />
      {/* <Route path='/signup' component={Signup} />
      <Route path='/signin' component={Signin} />
      <Route path='/guest/mathematics' component={Mathematics} />
      <Route path='/guest/english' component={English} />
      <Route path='/guest/basic-science' component={BasicScience} />
      <Route path='/guest/basic-technology' component={BasicTechnology} />
      <Route path='/guest/social-studies' component={SocialStudies} />
      <Route path='/guest/civic-education' component={CivicEducation} /> */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

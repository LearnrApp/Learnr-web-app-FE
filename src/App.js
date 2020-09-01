import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

// import StudentDashboard from './pages/student/StudentDashboard'

// import ParentDashboard from './pages/parent/ParentDashboard'
// import MathematicsJs1 from "./pages/topics/Js1Topics/MathematicsJs1"
// import MathematicsJs1Article from "./pages/articles/MathematicsJs1Article"
// import BiologyTopics from './pages/topics/BiologyTopics'
// import BiologyArticles from './pages/articles/BiologyArticles'
import { ExternalRoutes } from './components/routes/ExternalRoutes'
import { StudentRoutes } from './components/routes/StudentRoutes'
import { ParentRoutes } from './components/routes/ParentRoutes'


const App = () => {
  return (
    <BrowserRouter>
    {/* <Switch> */}
      <ExternalRoutes />
      <StudentRoutes />
      <ParentRoutes />
      {/* 

      <Route exact path='/parents/dashboard' component={ ParentDashboard } />
      
      <Route exact path='/topics/mathematics/js1' component={ MathematicsJs1 } />
      <Route exact path='/articles/mathematics/js1' component={ MathematicsJs1Article } />
      <Route path='/biology/topics' component={ BiologyTopics } />
      <Route path='/biology/article' component={ BiologyArticles } /> */}
    {/* </Switch> */}
    </BrowserRouter>
  );
}

export default App;

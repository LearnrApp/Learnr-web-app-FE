import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import ParentDashboard from './pages/parent/ParentDashboard'
import MathematicsJs1 from "./pages/topics/Js1Topics/MathematicsJs1"
import MathematicsJs1Article from "./pages/articles/MathematicsJs1Article"
import BiologyTopics from './pages/topics/BiologyTopics'
import BiologyArticles from './pages/articles/BiologyArticles'
import MathematicsTopics from './pages/topics/MathematicsTopics'
import MathematicsArticles from './pages/articles/MathematicsArticles'
import EconomicsTopics from './pages/topics/EconomicsTopics'
import EconomicsArticles from './pages/articles/EconomicsArticles'
import EnglishArticles from './pages/articles/EnglishArticles'
import EnglishTopics from './pages/topics/EnglishTopics'
import ChemistryArticles from './pages/articles/ChemistryArticles'
import ChemistryTopics from './pages/topics/ChemistryTopics'
import PhysicsArticles from './pages/articles/PhysicsArticles'
import PhysicsTopics from './pages/topics/PhysicsTopics'
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
      

      <Route exact path='/parents/dashboard' component={ ParentDashboard } />
      
      {/* <Route exact path='/topics/mathematics/js1' component={ MathematicsJs1 } />
      <Route exact path='/articles/mathematics/js1' component={ MathematicsJs1Article } /> */}
      <Route path='/biology/topics' component={ BiologyTopics } />
      <Route path='/biology/article' component={ BiologyArticles } />
      <Route path='/mathematics/topics' component={ MathematicsTopics } />
      <Route path='/mathematics/article' component={ MathematicsArticles } />
      <Route path='/economics/topics' component={ EconomicsTopics } />
      <Route path='/economics/article' component={ EconomicsArticles } />
      <Route path='/english/topics' component={ EnglishTopics } />
      <Route path='/english/article' component={ EnglishArticles } />
      <Route path='/chemistry/topics' component={ ChemistryTopics } />
      <Route path='/chemistry/article' component={ ChemistryArticles } />
      <Route path='/physics/topics' component={ PhysicsTopics } />
      <Route path='/physics/article' component={ PhysicsArticles } />
    {/* </Switch> */}
    </BrowserRouter>
  );
}

export default App;

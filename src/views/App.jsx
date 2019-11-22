import React from 'react';
import 'style/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Landing from './Landing'
import Article from './Article';
import {Navbar,Header} from 'components'

function App() {
  return (
    <div className="App">
      <Router>
        <Header /> 
        <Navbar/>
          <Switch>
            <Route path="/articles/:entry" component={Article} />
            <Route path="/cuisine/:entry" component={Landing} />
            <Route path="/" component={Landing} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;

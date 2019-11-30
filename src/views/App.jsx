import React from 'react';
import 'style/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Landing from './Landing'
import Article from './Article';
import {Navbar,Header} from 'components';
import useFetch from 'utils/useFetch';

function App() {
  const url = 'https://iauc5s3blh.execute-api.us-east-1.amazonaws.com/dev'
  const articleData = useFetch(
    url,
    {}
  );

  console.log('appjsx',articleData);

  return (
    <div className="App">
      <Router>
        <Header /> 
        <Navbar/>
          <Switch>
            <Route path="/articles/:param" component={Article} />
            <Route path="/cuisines/:param" component={Article} />
            <Route path="/" component={Landing} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;

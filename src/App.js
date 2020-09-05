import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import PostDetail from './components/PostDetail/PostDetail';
import Home from './components/Home/Home';
import NoMatch from './NoMatch/NoMatch';


function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/posts/:postId">
            <PostDetail />
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

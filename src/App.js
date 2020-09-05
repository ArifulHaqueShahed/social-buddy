import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import PostDetail from './components/PostDetail/PostDetail';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/posts/:postId">
            <PostDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

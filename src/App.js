import React, { Component } from 'react';
import {HashRouter  as Router, Route} from 'react-router-dom'
import asyncComponent from './asyncComponent'
import logo from './logo.svg';
import './App.css';
import AHome from './components/a';
import createHistory from 'history/createHashHistory'
const history = createHistory();
const BHome = asyncComponent(() => import("@/components/b"));
const CHome = asyncComponent(() => import("@/components/c"));
const NotFont = asyncComponent(() => import("@/components/notFont"));

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router history={history}>
              <div className="App">
                  <Route exact path="/" component={AHome}/>
                  <Route path="/AHome" component={AHome}/>
                  <Route path="/BHome" component={BHome}/>
                  <Route path="/CHome" component={CHome}/>
                  <Route path="/NotFont" component={NotFont}/>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;

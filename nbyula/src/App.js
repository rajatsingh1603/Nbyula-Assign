import React from 'react';
import Home from './home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Quespaper from './quespaper/Quespaper';

function App() {
  return <div>
    <Router>
      <Switch>
        <Route path="/form/:id">
          <Quespaper />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>

  </div>;
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={LoginPage} />
          {/* Add other routes as needed */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/consumer" component={ConsumerView} />
        <Route exact path="/vendor" component={VendorDashboard} />
      </Switch>
    </Router>
  );
}

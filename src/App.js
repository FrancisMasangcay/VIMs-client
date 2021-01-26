import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";

//components

//pages
import home from "./pages/Home";
import { login } from "./pages/login";
import { signup } from "./pages/signup";
import { order } from "./pages/order";
import { profile } from "./pages/profile";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path='/' component={home} />
            <Route exact path='/login' component={login} />
            <Route exact path='/signup' component={signup} />
            <Route exact path='/order' component={order} />
            <Route exact path='/profile' component={profile} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

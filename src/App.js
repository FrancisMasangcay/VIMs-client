import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import { themeFile } from "./util/theme";
import jwtDecode from "jwt-decode";
import axios from "axios";
//redux
import { Provider } from "react-redux";
import store from "./pages/redux/stores";
import { SET_AUTHENTICATED } from "./pages/redux/types";
import { logoutUser, getUserData } from "./pages/redux/actions/userActions";

//MUI
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

//components
import NavbarHome from "./components/NavbarHome";
import AuthRoute from "./components/AuthRoute";
import ProtectedRoute from "./components/ProtectedRoute";

//pages
import home from "./pages/Home";
import login from "./pages/login";
import signup from "./pages/signup";
import order from "./pages/order";
import profile from "./pages/profile";
import Reset from "./pages/Reset";
import Learn from "./pages/Learn";
import Settings from "./pages/Settings";

const theme = createMuiTheme(themeFile);
const token = localStorage.FBIdToken;
if (token) {
  //if a token exists
  const decodedToken = jwtDecode(token);
  //checks if token is expired
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router className='App'>
            <NavbarHome />
            <Switch>
              <Route exact path='/' component={home} />
              <AuthRoute exact path='/login' component={login} />
              <AuthRoute exact path='/signup' component={signup} />
              <ProtectedRoute exact path='/order' component={order} />
              <ProtectedRoute exact path='/profile' component={profile} />
              <ProtectedRoute exact path='/reset' component={Reset} />
              <ProtectedRoute exact path='/settings' component={Settings} />
              <ProtectedRoute exact path='/learn' component={Learn} />
            </Switch>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;

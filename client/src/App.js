import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import { SecureRoute, ImplicitCallback } from "@okta/okta-react";

import Home from "./pages/Home";
import Register from "./pages/Register";
import config from "./config/appConfig";
import Login from "./pages/Login";
import Saved from "./pages/Saved";
import ArticleView from "./pages/ArticleView";
import Navigation from "./components/Navbar";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navigation />
          <Route path="/" exact component={Home} />
          <Route path="/login" render={() => <Login baseUrl={config.url} />} />
          <Route path="/implicit/callback" component={ImplicitCallback} />
          <Route path="/register" component={Register} />
          <Route path="/articles" component={ArticleView} />
          <SecureRoute path="/saved" component={Saved} />
        </div>
      </Provider>
    );
  }
}

export default App;

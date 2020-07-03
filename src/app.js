import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const EditExpense = () => <div>Edit page</div>;

const HelpPage = () => <div>Help me</div>;

const Homepage = () => <div>Welcome!</div>;

const NotFoundPage = () => <div>404!</div>;

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Homepage} exact={true} />
      <Route path="/edit" component={EditExpense} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage}></Route>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));

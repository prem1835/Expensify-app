import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const EditExpense = () => <div>Edit page</div>;

const HelpPage = () => <div>Help me</div>;

const Homepage = () => <div>Welcome!</div>;
const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={Homepage} exact={true} />
      <Route path="/edit" component={EditExpense} />
      <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));

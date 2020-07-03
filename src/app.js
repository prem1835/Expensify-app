import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const EditExpense = () => <div>Edit page</div>;

const HelpPage = () => <div>Help me</div>;

const Homepage = () => <div>Welcome!</div>;

const NotFoundPage = () => (
  <div>
    404! - <Link to="/">Go Home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <Link to="/">Go to Homepage</Link>
    <br />
    <Link to="/help">Go to HelpPage</Link>
    <br />
    <Link to="/edit">Go to EditPage</Link>
    <br />
    <Link to="/error">Go to 404!</Link>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Homepage} exact={true} />
        <Route path="/edit" component={EditExpense} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage}></Route>
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));

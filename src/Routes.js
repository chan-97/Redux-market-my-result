import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";

export default function Routes () {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/products" component={ProductList} />
                <Route exact path="/cart" component={CartList} />
            </Switch>
        </Router>
    );
}
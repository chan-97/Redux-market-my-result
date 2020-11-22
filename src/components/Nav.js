import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Nav.css";

export default function Nav () {
    const cart = useSelector(store => store.cartReducer);
    const history = useHistory();
    
    return (
        <nav className="nav">
            <span className="nav-title" onClick={() => history.push("/")}>Redux-market</span>
            <i onClick={() => history.push("/cart")} className="fas fa-shopping-cart">
            <div className="cart-amount">{cart.length}</div>
            </i>
        </nav>
    );
}
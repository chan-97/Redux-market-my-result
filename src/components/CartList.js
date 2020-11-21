import React from "react";
import CartItem from "./CartItem";
import "./CartList.css";

export default function CartList () {
    return (
        <section className="cart-list">
            <h2 className="cart-list-title">장바구니</h2>
            <CartItem />
        </section>
    );
}
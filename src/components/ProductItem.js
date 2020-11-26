import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../store/actions";
import "./ProductItem.css";

export default function ProductItem ({ item }) {
    const [isMouseEnter, setMouseEnter] = useState(false);
    const dispatch = useDispatch();

    const imageSrc = isMouseEnter ? item.hover_img : item.product_img;

    return (
        <div className="product-item">
            <img
            onMouseEnter={() => setMouseEnter(!isMouseEnter)}
            onMouseLeave={() => setMouseEnter(!isMouseEnter)}
            className="item-image" 
            alt="product"
            src={imageSrc} />
            <div className="item-name">{item.product_name}</div>
            <div className="item-price">{item.price.toLocaleString()}원</div>
            <button onClick={() => dispatch(addCart(item))} className="add-cart-btn">
                <i className="fas fa-plus"></i>
                장바구니 담기
            </button>
        </div>
    );
}


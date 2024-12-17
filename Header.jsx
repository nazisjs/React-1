import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
  let sum = 0;
  props.orders.forEach(el => sum += Number.parseFloat(el.price));
  return (
    <div>
      <p className="sum">Sum: ${sum.toFixed(2)}</p> {/* Выводим сумму */}
    </div>
  );
};

export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div>
      <nav>
        <h1 className="logo">My Web</h1>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen(!cartOpen)}
          className={`shop-cart-button ${cartOpen ? "active" : ""}`}
        />
        
        {cartOpen && (
          <div className="shop-cart">
            {props.orders.map(el => (
              <Order key={el.id} item={el} />
            ))}
            {showOrders(props)} {/* Вызываем функцию подсчета суммы */}
          </div>
        )}
      </nav>
      <div className="presentation"></div>
    </div>
  );
}

import React from 'react';
import "./MenuItem.css";
import { useSpring, animated } from 'react-spring'
const MenuItem = (props) => {

    const menuStyle = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 1000 } })





    return (<animated.div style={menuStyle} className="menu-item">
        <div className="menu-item-name">{props.itemName} <div className="price-divider"></div> <div className="menu-item-price">{props.itemPrice}</div></div>
        <div className="menu-item-toppings">{props.itemToppings}</div>

    </animated.div>);
}

export default MenuItem;
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import classes from "../../css/HeaderCartButton.module.css";
import CartIcon from "../../assets/CartIcon";

const HeaderCartButton = (props) => {
  const [highlightButton, setHighlightButton] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const cartQuantity = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${highlightButton ? classes.bump : ""}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setHighlightButton(true);

    const timer = setTimeout(() => {
      setHighlightButton(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default HeaderCartButton;

import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "../../css/HeaderCartButton.module.css";
import CartIcon from "../../assets/CartIcon";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const cartQuantity = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default HeaderCartButton;

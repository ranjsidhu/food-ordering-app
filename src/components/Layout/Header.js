import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "../../css/Header.module.css";
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of different meals" />
      </div>
    </Fragment>
  );
};

export default Header;

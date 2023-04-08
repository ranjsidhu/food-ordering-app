import classes from "../../css/AvailableMeals.module.css";
import dummyMeals from "./dummy-meals";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const DUMMY_MEALS = dummyMeals.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{DUMMY_MEALS}</ul>{" "}
      </Card>
    </section>
  );
};

export default AvailableMeals;

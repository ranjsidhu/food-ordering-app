import classes from "../../css/AvailableMeals.module.css";
import dummyMeals from "./dummy-meals";

const AvailableMeals = () => {
  const DUMMY_MEALS = dummyMeals.map((meal) => (
    <li key={meal.id}>{meal.name}</li>
  ));
  return (
    <section className={classes.meals}>
      <ul>{DUMMY_MEALS}</ul>
    </section>
  );
};

export default AvailableMeals;

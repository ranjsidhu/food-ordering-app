import { useEffect, useState } from "react";
import classes from "../../css/AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-43bd9-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      const data = await response.json();
      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
    };
    fetchMeals();
  }, []);

  const fetchedMeals = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{fetchedMeals}</ul>{" "}
      </Card>
    </section>
  );
};

export default AvailableMeals;

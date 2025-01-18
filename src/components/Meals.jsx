import useHttp from "../hooks/useHttp.js";
import MealItem from "./MeaItem.jsx";
import Error from "./Error.jsx";

const requestConfig = {}
export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching Meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch data" message={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}

// old method
// import { useState, useEffect } from "react";
// import MealItem from "./MeaItem.jsx";

// export default function Meals() {
//   const [loadedMeals, setLoadedMeals] = useState([]);

// useEffect(() => {
//   async function fetchMeals() {
//     const response = await fetch("http://localhost:3000/meals");

//     if (response.ok) {
//       //....
//     }
//     const meals = await response.json();
//     setLoadedMeals(meals);
//   }

//   fetchMeals();
// }, []);

//   return (
//     <ul id="meals">
//       {loadedMeals.map((meal) => (
//         <MealItem key={meal.id} meal={meal} />
//       ))}
//     </ul>
//   );
// }

// {loadedMeals.map((meal) => (
//   <li key={meal.id}>{meal.name}</li> // Displaying just the name
// ))}

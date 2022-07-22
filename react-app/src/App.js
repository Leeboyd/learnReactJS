import React, { useEffect, useState } from "react"

import "./index.css"
import Nav from "./components/Nav"
import Heading from "./components/Heading"
import RecipeTitle from "./components/RecipeTitle"
import IngredientList from "./components/IngredientList"

// 2 種宣告 component 的方式
// 1. element class with render() method
// export default class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Nav />
//         <div className="acer_margin">
//           <Heading name="最新消息 News"/>
//           <Heading name="News"/>
//         </div>
//       </div>
//     );
//   }
// }

// 2. defined as a function.
export default function App() {
  const initialRecipe = {
    title: 'Mashed potatoes',
    feedback: {
        rating: 4.8,
        reviews: 20
    },
    ingredients: [
        { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
        { name: '4 Tbsp butter', prepared: false },
        { name: '1/8 cup heavy cream', prepared: false },
        { name: 'Salt', prepared: true },
        { name: 'Pepper', prepared: true },
    ]
  };

  // TODO: Create recipe state
  const [ recipe, setRecipe ] = useState(initialRecipe);

  // TODO: Add new state property
  const [ prepared, setPrepared ] = useState(false);

  // TODO: Create ingredientClick event listener
  function ingredientClick(index) {
    const updatedRecipe = {...recipe};
    updatedRecipe.ingredients[index].prepared = !updatedRecipe.ingredients[index].prepared;
    setRecipe(updatedRecipe);
  }

  // TODO: Add the effect hook
  useEffect(() => {
    setPrepared(recipe.ingredients.every(i => i.prepared));
  }, [recipe])

  return (
      <article>
          <Nav />
          <Heading name="Recipe Manager" />
          <RecipeTitle feedback={recipe.feedback}>
            <Heading name={recipe.title} />
          </RecipeTitle>
          <IngredientList ingredients={recipe.ingredients} onClick={ ingredientClick } />
          { prepared ? <h2>Ready to cook</h2>: <h2>Just keep chopping</h2>}
      </article>
  )
}
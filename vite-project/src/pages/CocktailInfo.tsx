import { useContext, useState, useEffect } from "react";
import { CocktailInfoContext } from "./Home"
import { useLoaderData } from "react-router-dom";

export const CocktailInfo = ({}) => {

    /*const drinkId = useContext(CocktailInfoContext);*/

    const { drinkId } = useLoaderData();

    interface Cocktail {
        idDrink: string;
        strDrink: string;
        strDrinkThumb: string;
        strCategory: string;
        strInstructions: string;
        strTags: string;
        strGlass: string;
        strIngredients: string[];
        strMeasurements: string[];
      }
    
    const [cocktailData, setcocktailData] = useState<Cocktail>();

    useEffect(() => {
        if (drinkId) {
          const cocktailInfoUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
          fetch(cocktailInfoUrl)
            .then((res) => res.json())
            .then((data) => {
              const drink = data.drinks[0];
              const ingredients: string[] = [];
              const measurements: string[] = [];
    
              for (let i = 1; i <= 15; i++) {
                const ingredient = drink[`strIngredient${i}`];
                const measurement = drink[`strMeasure${i}`];
    
                if (ingredient) {
                  ingredients.push(ingredient);
                }
                if (measurement) {
                  measurements.push(measurement);
                }
              }
    
              const cocktail: Cocktail = {
                idDrink: drink.idDrink,
                strDrink: drink.strDrink,
                strDrinkThumb: drink.strDrinkThumb,
                strCategory: drink.strCategory,
                strInstructions: drink.strInstructions,
                strTags: drink.strTags,
                strGlass: drink.strGlass,
                strIngredients: ingredients,
                strMeasurements: measurements,
              };
    
              setcocktailData(cocktail);
            });
        }
      }, [drinkId]);

      console.log("this is the drink id FROM home:" + drinkId)
      console.log("this is the drink object from cocktailinfo:" + cocktailData?.strDrink)

    return(
        <div></div>
    )
}
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./css/CocktailInfo.css"

export const CocktailInfo = () => {
    
    type RouteData = {
        drinkId: string | undefined
    };

    const { drinkId } = (useParams() as RouteData) || {};

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

    return(
        <div>
            <article className="drinkInfo">
                <div>
                    <img src={cocktailData?.strDrinkThumb} alt="#" className="CocktailImage" />
                </div>
                <div className="drinkDetails">
                    <h1 className="cocktailInfoText">{cocktailData?.strDrink}</h1>
                    <h3 className="cocktailInfoText">Category</h3>
                    <p className="cocktailInfoText">{cocktailData?.strCategory}</p>
                    <h3 className="cocktailInfoText">Tags</h3>
                    <p className="cocktailInfoText">{cocktailData?.strTags}</p>
                    <h3 className="cocktailInfoText">Measurements</h3>
                    {cocktailData?.strMeasurements.map((measurment, index) => (
                        <p key={index} className="cocktailInfoText">
                            {measurment} - {cocktailData?.strIngredients[index] || ""}
                        </p>
                    ))}
                    <h2 className="cocktailInfoText">Serve in a {cocktailData?.strGlass}</h2>
                </div>
            </article>
        </div>
    )
}
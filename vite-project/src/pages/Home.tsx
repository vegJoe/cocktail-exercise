import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Home.css"


export interface ICocktail {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
  }

export const CocktailInfoContext = createContext<string | undefined>(undefined);

export const Home = () => {
  
  const navigate = useNavigate();
  
  const [cocktailData, setData] = useState<ICocktail | null>(null);

  const randomThumbUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  
  const fetchCocktail = () => {
    fetch(randomThumbUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.drinks)
      setData(data.drinks[0]);
    });
  };
  
  useEffect(() => {
    fetchCocktail();
  }, []);

  const handleOnClick = () => {
    navigate(`/cocktailinfo/${cocktailData?.idDrink}`);
  }

  return (
      <div className="randomCocktail">
        <article className="randomCocktailArt">
          { cocktailData ? (
            <div id="currentDrink" onClick={handleOnClick}>
              <h1 className="cocktailName">{cocktailData.strDrink}</h1>
              <img src={cocktailData.strDrinkThumb} alt="#" className="randomCocktailImage" />
            </div>
          ) : (
            <p>Loading...</p>
          )}
          <button onClick={fetchCocktail} className="randomCocktailButton">Fetch New Cocktail</button>
        </article>
      </div>
  )
}
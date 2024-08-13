import { useCallback, useState, useEffect } from 'react';
import "./css/Home.css"

export const Home = ({}) => {

    interface Cocktail {
        idDrink: string;
        strDrink: string;
        strDrinkThumb: string;
        strInstructions: string;
      }
    
    const [cocktailData, setData] = useState<Cocktail[]>([]);

    const randomThumbUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  
    const fetchCocktail = () => {
        fetch(randomThumbUrl)
          .then((res) => res.json())
          .then((data) => {
            setData(data.drinks);
          });
      };

      useEffect(() => {
        fetchCocktail();
      }, []);

    console.log(cocktailData);

    return (
        <div className='randomCocktail'>
            <article className='randomCocktailArt'>
                {cocktailData.map(cocktail =>(
                    <div>
                        <h1 className="cocktailName">{cocktail.strDrink}</h1>
                        <img src={cocktail.strDrinkThumb} alt="#" className='randomCocktailImage' />
                    </div>
                    )
                )}
                <button onClick={fetchCocktail} className='randomCocktailButton'>Fetch New Cocktail</button>
            </article>
        </div>
    )
  
}
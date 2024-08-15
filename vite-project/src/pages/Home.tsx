import { useState, useEffect, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "./css/Home.css"
import { CocktailInfo } from './CocktailInfo';


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

  let test:boolean = false;

  const handleOnClick = () => {
    console.log("this is the id in home: " + cocktailData?.idDrink)
    test = true;
    navigate(`/cocktailinfo/${cocktailData?.idDrink}`);
  }

  console.log(cocktailData);

  return (
      <div className='randomCocktail'>
        <article className='randomCocktailArt'>
          { cocktailData ? (
            <div id='currentDrink' onClick={handleOnClick}>
              <h1 className="cocktailName">{cocktailData.strDrink}</h1>
              <img src={cocktailData.strDrinkThumb} alt="#" className='randomCocktailImage' />
            </div>
          ) : (
            <p>Loading...</p>
          )}
          <button onClick={fetchCocktail} className='randomCocktailButton'>Fetch New Cocktail</button>
        </article>
          {cocktailData && <CocktailInfo />}
      </div>
  )
}
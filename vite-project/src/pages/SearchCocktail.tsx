import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/SearchCocktail.css"

interface ISearchCocktail {
    idDrink: string;
    strDrink: string;
}

export const SearchCocktail = () => {

    const [searchResult, setData] = useState<ISearchCocktail[]>([]);

    const [searchCocktail, setSearchCocktail] = useState<string>("");

    const navigate = useNavigate();

    const handleOnClick = () => {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchCocktail}`)
            .then((res) => res.json())
            .then((data) => {
              const cocktails = data.drinks.map((drink: { idDrink: string; strDrink: string}) => ({ idDrink: drink.idDrink, strDrink: drink.strDrink}));
              setData(cocktails);
            });
    }
    
    const handleOnCocktailClick = (idDrink: string) => {
        
        navigate(`/cocktailinfo/${idDrink}`);
      }
    
    return (
        <div className="searchPage">
            <div className="searchBar">
                <input type="text" id="searchCocktail" value={searchCocktail} onChange={(e) => setSearchCocktail(e.target.value)}/>
                <button onClick={handleOnClick} className="searchButton">Search</button>
            </div>
            <div>
                {searchResult?.map((drink) =>
                <li key={drink.idDrink} className="searchResult" onClick={() => handleOnCocktailClick(drink.idDrink)}>{drink.strDrink}</li>
                )}
            </div>
        </div>
    )
}
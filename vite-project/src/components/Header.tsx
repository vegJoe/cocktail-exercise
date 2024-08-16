import { ReactElement } from "react";
import { Link } from "react-router-dom";
import "./Header.css"


export function Header(): ReactElement {
    return (
      <header className="header">
        <h1 className="logo">Cocktail's</h1>
        <div className="links">
        <Link to="/home" className="link">
          Home
        </Link>
        <Link to="/searchcocktail/:drinkId" className="link">
          Search
        </Link>
        </div>
      </header>
    );
  }
  
import { ReactElement } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import "./Header.css"


export function Header(): ReactElement {
    return (
      <header className="header">
        <h1 className="logo">Cocktail</h1>
        <div className="links">
        <Link to="/home" className="link">
            Home
          </Link>
        </div>
      </header>
    );
  }
  
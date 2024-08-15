import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { App } from "./App"
import { Home } from "./pages/Home"
import { CocktailInfo } from "./pages/CocktailInfo";

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="cocktailinfo/:drinkId" element={<CocktailInfo />} />
      </Route>
    )
  );
  
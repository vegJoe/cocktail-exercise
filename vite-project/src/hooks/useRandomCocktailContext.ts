import { useOutletContext } from "react-router-dom";
import { createContext, useContext, useState, ReactNode } from "react";
import { ICocktail } from "../pages/Home";


interface ICocktailInfo {
    drinkId: string;
    setDrinkId: (id: string) => void;
  }

const CocktailInfoContext = createContext<ICocktailInfo | undefined>(undefined);

  
export const useCocktailInfoContext = () => {
    const context = useContext(CocktailInfoContext);
    return context;
  };

  export function DashboardProvider({ children }: { children: React.ReactNode }) {
    const [drinkId, setDrinkId] = useState<string>('');
  
    const contextValue = {
      drinkId,
      setDrinkId,
    };
}


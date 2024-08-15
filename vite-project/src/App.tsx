import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

import './App.css'
import { DashboardProvider } from './hooks/useRandomCocktailContext';

export function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

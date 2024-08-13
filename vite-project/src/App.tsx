import { useCallback, useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

import './App.css'

export function App() {

  const [cockTailData, setData] =useState([]);

  const randomThumbUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";


  useEffect(() => {
    fetch(randomThumbUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setData(data);
    })
  }, []);


  console.log(cockTailData);


  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

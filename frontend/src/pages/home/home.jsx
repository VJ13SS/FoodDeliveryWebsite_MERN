import { useState } from "react";
import ExploreMenu from "../../components/exploreMenu/exploreMenu";
import Header from "../../components/header/header";
import "./home.css";
import FoodDisplay from "../../components/foodDisplay/foodDisplay";
import StoreContextProvider from "../../context/storeContext";
import AppDownload from "../../components/appDownload/appDownload";

export default function Home() {
  const [category, setCategory] = useState("All");
  console.log('home')
  return (
    <div className="home">
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      
        <FoodDisplay category={category} />
      
      <AppDownload />
    </div>
  );
}

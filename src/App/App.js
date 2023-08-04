import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { world, usa } from "../api-calls/api-calls";
import Header from '../Header/Header';
import Home from "../Home/Home";
import StoryDetail from "../StoryDetail/StoryDetail";

function App() {
  const [allNews, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("all");

  const location = useLocation();

   useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    Promise.all([world(), usa()])
      .then((allData) => {
        const worldNews = allData[0].articles;
        const usaNews = allData[1].articles;
        const combinedNews = [...worldNews, ...usaNews];

        setNews(combinedNews);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  function handleCategoryChange(value) {
    setCategory(value);
  }

  return (
      <div className="container">
        <Header/>
        <SortMenu onCategoryChange={handleCategoryChange} />
        <Routes>
          <Route 
            path="/" 
            element={<Home allNews={allNews}/>} />
          <Route
            path="/:id/:title"
            element={<StoryDetail allNews={allNews}/>} />
        </Routes>
     
    </div>
  );
}

export default App;

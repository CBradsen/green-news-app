import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { world, usa } from "../api-calls/api-calls";
import Header from '../Header/Header';
import Home from "../Home/Home";
import StoryDetail from "../StoryDetail/StoryDetail";
import SortMenu from '../SortMenu/SortMenu';

function App() {
  const [allNews, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("all");
  const [displayedNews, setDisplayedNews] = useState(allNews);

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

  useEffect(() => {
  if (category === 'world') {
    setDisplayedNews(allNews.filter(news => news.type === 'world'));
  } else if (category === 'usa') {
    setDisplayedNews(allNews.filter(news => news.type === 'usa'));
  } else if (category === 'today') {
    let today = new Date();
    let formattedToday = `${today.toLocaleString( 'default', { month: 'long'})} ${today.getDate()}`;
    setDisplayedNews(allNews.filter(news => news.formattedDate === formattedToday));
  } else {
    setDisplayedNews(allNews);
  }
}, [category]);



  return (
      <div className="container">
        <Header/>
        <SortMenu onCategoryChange={handleCategoryChange} />
        <Routes>
          <Route 
            path="/" 
            element={<Home displayedNews={displayedNews}/>} />
          <Route
            path="/:id/:title"
            element={<StoryDetail allNews={allNews}/>} />
        </Routes>
     
    </div>
  );
}

export default App;

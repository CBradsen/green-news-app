import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { world } from "../api-calls/api-calls";
import Header from '../Header/Header';
import Home from "../Home/Home";
import StoryDetail from "../StoryDetail/StoryDetail";

function App() {
  const [worldNews, setWorldNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();

   useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  useEffect(() => {
    world()
      .then((data) => {
        setWorldNews(data.articles);
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

  return (
      <div className="container">
        <Header/>
        <Routes>
          <Route 
            path="/" 
            element={<Home worldNews={worldNews}/>} />
          <Route
            path="/:id/:title"
            element={<StoryDetail worldNews={worldNews}/>} />
        </Routes>
     
    </div>
  );
}

export default App;

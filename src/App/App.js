import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";


import "./App.css";
import { world } from "../api-calls/api-calls";
import Card from "../Card/Card";
import Home from "../Home/Home";
import StoryDetail from "../StoryDetail/StoryDetail";



function App() {
  const [worldNews, setWorldNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
      <div>
        
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

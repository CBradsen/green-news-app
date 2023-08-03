import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import genlogo from "../assets/genlogo.svg";
import "./App.css";
import { world } from "../api-calls/api-calls";
import Card from "../Card/Card";
import Home from "../Home/Home";
import StoryDetail from "../StoryDetail/StoryDetail";

const date = new Date();
const headline = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const todayQuery = date.toISOString().split("T")[0];

const today = date.toLocaleDateString("en-US", headline);

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
    <div className="Home">
      <header className="App-header">
        <img src={genlogo} className="App-logo" alt="green-energy-news-logo" />
        <div className="date-container">
          <h1 className="today">{today}</h1>
        </div>
      </header>
      <h2>Recent Headlines</h2>
      <main>
        {worldNews.map((article, index) => (
          <Card key={index} article={article} />
        ))}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/{article.id}}/{article.title}"
            element={<StoryDetail />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;


import React, { useState, useEffect } from 'react';
import genlogo from '../assets/genlogo.svg';
import './App.css';
import { world } from '../api-calls/api-calls';


const date = new Date(); 
const headline = { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
};


const todayQuery = date.toISOString().split('T')[0];

const today = date.toLocaleDateString('en-US', headline);


function App() {
  const [worldNews, setWorldNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    world()
    .then(data => {
      setWorldNews(data.articles);
      setIsLoading(false);
    })
     .catch(err => {
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
          <h1 className="today">
          {today}
          </h1>
        </div>
      </header>
      <main>
         <h2>
          Today's Headlines
        </h2>
        {worldNews.map((article, index) => (
          <a key={index} href={article.url}>
            {article.title}
          </a>
        )
        )}
        <a>
          {}
        </a>
      </main>
    </div>
  );
}

export default App;

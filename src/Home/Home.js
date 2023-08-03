import '../Home/Home.css';
import Card from '../Card/Card'
import genlogo from "../assets/genlogo.svg";

const date = new Date();
const headline = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const today = date.toLocaleDateString("en-US", headline);

function Home({worldNews}) {

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
        {worldNews.map((article) => (
          <Card key={article.id} article={article} />
        ))}
      </main>
    </div>
  )
}



export default Home;
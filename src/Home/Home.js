import '../Home/Home.css';
import Card from '../Card/Card'


function Home({displayedNews}) {

  return (
     <main>
        <h1>Recent Green Energy News</h1>
        <div className="Home">
          {displayedNews.map((article) => (
            <Card key={article.id} article={article} />
          ))}
        </div>
      </main>
  )
}

export default Home;
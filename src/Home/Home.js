import '../Home/Home.css';
import Card from '../Card/Card'


function Home({worldNews}) {

  return (
     <main>
        <h1>Recent Headlines</h1>
        <div className="Home">
          {worldNews.map((article) => (
            <Card key={article.id} article={article} />
          ))}
        </div>
      </main>
  )
}



export default Home;
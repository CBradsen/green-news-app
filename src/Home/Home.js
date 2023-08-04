import '../Home/Home.css';
import Card from '../Card/Card'


function Home({worldNews}) {

  return (
     <main>
        <h2>Recent Headlines</h2>
        <div className="Home">
          {worldNews.map((article) => (
            <Card key={article.id} article={article} />
          ))}
        </div>
      </main>
  )
}



export default Home;
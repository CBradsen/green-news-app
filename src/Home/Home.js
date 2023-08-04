import '../Home/Home.css';
import Card from '../Card/Card'


function Home({allNews}) {

  return (
     <main>
        <h1>Recent Headlines</h1>
        <div className="Home">
          {allNews.map((article) => (
            <Card key={article.id} article={article} />
          ))}
        </div>
      </main>
  )
}

export default Home;
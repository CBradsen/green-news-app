import '../Card/Card.css';



function Card({ article }) {
  return (
    <div className='card-container'>
      <div className="card">
        <img src={article.urlToImage}alt="Image illustrating the article"></img>
        <h3>{article.title}</h3>
        <p>{article.formattedDate} —{article.description}</p>
        <p>| {article.type}</p>
      </div>
    </div>
  );
}

export default Card;
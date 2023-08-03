import '../Card/Card.css';
import { Link } from 'react-router-dom';


function Card({ article }) {
  return (
    <Link to={`/${article.id}/${article.title}`}>
      <div className="card">
        <img src={article.urlToImage}alt="Image illustrating the article"></img>
        <h3>{article.title}</h3>
        <p>{article.formattedDate} —{article.description}</p>
        <p>| {article.type}</p>
      </div>
      </Link>
  );
}

export default Card;
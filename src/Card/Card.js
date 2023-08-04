import '../Card/Card.css';
import { Link } from 'react-router-dom';

function Card({ article }) {
  return (
      
      <div className="card">
         <p className="type">| {article.type}</p>
        <Link to={`/${article.id}/${article.title}`}>
          <div className="image-wrapper">
            <img src={article.urlToImage} alt="article photo" />
            <div className="overlay"></div>
          </div>
          <h3>{article.title}</h3>
          <p>{article.formattedDate} —{article.description}</p>
        </Link>
      </div>   
  );
}

export default Card;
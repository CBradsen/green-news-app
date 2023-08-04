import "./StoryDetail.css";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';


function StoryDetail({ worldNews }) {
  let { id } = useParams();
  const article =worldNews.find(article => article.id === id);

  if (!article) {
    return (
    <div>
      <p>Article is not available</p>
    </div>
    )
  }
  return (
    <main>
      <div className="back-link">
        <Link to={"/"}>
        <h4 >⬅︎ BACK TO HOME</h4>
        </Link>
      </div>
      <div className="story-detail">
        <h4>| {article.type}</h4>
        <img src={article.urlToImage} alt="Image illustrating the article"></img>
        <h2>{article.title}</h2>
        <h5>{article.source.name}</h5>
        <p>{article.formattedDate} —{article.content}</p>
      </div>
    </main>
  );
}

export default StoryDetail;

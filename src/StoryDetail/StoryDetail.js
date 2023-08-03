import "./StoryDetail.css";
import { useParams } from "react-router-dom";

function StoryDetail({ article }) {
  let { id } = useParams();
  return (
    <div className="story-detail">
      {id}
      <h6>| {article.type}</h6>
      <img src={article.urlToImage} alt="Image illustrating the article"></img>
      <h3>{article.title}</h3>
      <h5>{article.source.name}</h5>
      <p>
        {article.formattedDate} —{article.content}
      </p>
    </div>
  );
}

export default StoryDetail;

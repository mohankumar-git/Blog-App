import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function Post({ post }) {
  const navigate = useNavigate();

  const handleCard = () => {
    navigate(`/post/${post.id}`, { state: post });
  };

  return (
    <div className="card text-white bg-secondary mb-3" onClick={handleCard}>
      <div className="card-header card-title"><h5 className="card-title">{post.title}</h5></div>
      <div className="card-body">
        <p className="card-text lead">
          {post.body}
        </p>
      </div>
    </div>
  );
}

export default Post;

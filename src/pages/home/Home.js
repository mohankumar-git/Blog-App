import React from "react";
import "./Home.css";
import Post from "../../components/post/Post";
import useFetch from "../../hooks/useFetch";

const Home = () => {
  const { apiResponse } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const renderLoaderView = () => {
    return (
      <div className="container h-100">
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  };

  const renderPostView = () => {
    return (
      <div className="container">
        {apiResponse.data &&
          apiResponse.data.map((item) => <Post key={item.id} post={item} />)}
        {apiResponse.error && <p className="lead">{apiResponse.error}</p>}
      </div>
    );
  };

  return (
    <div className="pt-4 pb-5">
      {apiResponse.isLoading ? renderLoaderView() : renderPostView()}
    </div>
  );
};

export default Home;

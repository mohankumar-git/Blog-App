import React, { useEffect, useState } from "react";
import "./CreatePost.css";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [validationError, setValidationError] = useState("");

  const { apiResponse, optionData } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    "POST"
  );

  const { data, error } = apiResponse;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      setValidationError("Title should not be empty");
      return;
    }
    if (!body) {
      setValidationError("Description should not be empty");
      return;
    }
    setValidationError("")
    optionData({ title, body });
  };

  useEffect(() => {
    if (data.length !== 0) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [data, navigate]);

  return (
    <div className="container pt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="form-label h4">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Post Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label h4">
            Description
          </label>
          <textarea
            className="form-control"
            id="body"
            rows="3"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </div>
        {validationError && (
          <div className="alert alert-danger" role="alert">
            {validationError}
          </div>
        )}

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        {data.length !== 0 && (
          <div className="alert alert-success" role="alert">
            Successfully Post created
          </div>
        )}

        <div className="float-end">
          <button type="submit" className="btn btn-light">
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;

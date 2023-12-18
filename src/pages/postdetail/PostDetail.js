import React, { useEffect } from "react";
import "./PostDetail.css";
import {useLocation, useNavigate} from 'react-router-dom'
import useFetch from "../../hooks/useFetch";

const PostDetail = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const {state} = location

  const { apiResponse, optionData } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${state.id}`, 'DELETE'
  );

  const { data, error } = apiResponse;

  useEffect(() => {
    if (data.length !== 0) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [data, navigate]);

  const handleEdit = () => {
    navigate(`/edit/${state.id}`, {state})
  }

  const handleDelete = () => {
    optionData()
  }

  return (
    <div className="container">
      <div className="bg-light p-5 rounded-lg m-3">
        <h1 className="display-5">{state.title}</h1>
        <hr className="my-4" />
        <p className="lead">{state.body}</p>
      </div>
      {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        {data.length !== 0 && (
          <div className="alert alert-success" role="alert">
            Successfully Post Deleted!
          </div>
        )}
      <div className="float-end">
        <button type='button' className="btn btn-light me-3" onClick={handleEdit}>Edit</button>
        <button type='button' className="btn btn-light" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default PostDetail;

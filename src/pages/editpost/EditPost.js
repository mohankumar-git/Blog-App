import React, { useEffect, useState } from 'react'
import './EditPost.css'
import {useLocation, useNavigate} from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const EditPost = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const {state : post} = location 

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [validationError, setValidationError] = useState("");
  const [modifiedData, setModifiedData] = useState({})

  const { apiResponse, optionData } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${post.id}`,
    "PATCH"
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
    console.log(modifiedData, 'mo')
    optionData(modifiedData);
  };

  useEffect(() => {
    setTitle(post.title)
    setBody(post.body)

    if (data.length !== 0) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [data, navigate, post.body, post.title]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
    setModifiedData({...modifiedData, title: e.target.value})
  }

  const handleBodyChange = (e) => {
    setBody(e.target.value)
    setModifiedData({...modifiedData, body: e.target.value})
  }

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
            onChange={handleTitleChange}
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
            rows="6"
            onChange={handleBodyChange}
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
            Successfully Post Edited!
          </div>
        )}

        <div className="float-end">
          <button type="submit" className="btn btn-light">
            Edit Post
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditPost
import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body, userId } = post;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/friend/${id}`);
  };
  return (
    <div>
      <h1>Details about Post: {id}</h1>
      <p>{title}</p>
      <p>
        <small>{body}</small>
      </p>
      <button onClick={handleNavigate}>Get the Author </button>
    </div>
  );
};

export default PostDetails;

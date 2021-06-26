import React from "react";
import Comment from "../comment/Comment";
import "./_comments.scss";

const Comments = () => {
  const handleComment = (e) => {};

  return (
    <div className="comments">
      <p> Comments</p>
      <div className="my-2 comments__form d-flex w-100">
        <img src="https://i1.sndcdn.com/artworks-000248908839-wlug27-t500x500.jpg"alt="avatar" className="mr-3 rounded-circle" />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Write a comment..."
          />
          <button className="p-2 border-0">Comment</button>
        </form>
      </div>
      <div className="comments__list">
        {[...Array(10)].map(() => (
          <Comment />
        ))}
      </div>
    </div>
  );
};

export default Comments;

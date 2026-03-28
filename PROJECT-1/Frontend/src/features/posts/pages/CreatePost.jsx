import React, { useState, useRef } from "react";
import "../style/createpost.scss";
import { usePost } from "../hooks/usePost";
import { useNavigate } from "react-dom";

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const   = useState("");




  return (
    <main className="create-post-page">
      <div className="form-container">
        <h1>Crete post </h1>
        <form onSubmit={handleSubmit}>
          <label className="post-image-label" htmlFor="postImage">
            Select image
          </label>
          <input
            ref={postImageInputFieldRef}
            type="file"
            hidden
            name="postImage"
          />
          <input 
          type="text" 
          value={caption}
          onChange={(e) => {sel}}
          placeholder="Enter Caption" />
        </form>
      </div>
    </main>
  );
};

export default CreatePost;

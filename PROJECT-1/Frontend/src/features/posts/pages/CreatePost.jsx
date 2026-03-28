import React, { useState, useRef } from "react";
import "../style/createpost.scss";
import { usePost } from "../hooks/usePost";
import { useNavigate } from "react-dom";

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const postImageInputFieldRef  = useRef(null);

  const navigate = useNavigate();
  const { loading,  handleCreatePost} = usePost()

  async function handleSubmit(e) {
    e.preventDefault()
    const file = postImageInputFieldRef.current.files[ 0 ]

    await handleCreatePost(file, caption)
    navigate('/')
    
  }

  if(loading){
    return (<main>
      <h1>creteing post</h1>
    </main>)
  }




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

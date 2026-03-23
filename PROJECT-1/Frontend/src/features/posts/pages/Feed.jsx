import React, { useEffect } from "react";
import "../style/feed.scss";
import Post from "../components/Post";
import { usePost } from "../hooks/usePost"; 

const Feed = () => {
  const {feed , handleAllFeed , loadind} = usePost();

  useEffect(() => {
    handleAllFeed();
  }, []);


  if(loadind || !feed){
    return (<main>Loading......</main>)
  }





  return (
    <main className="feed-page">
      <div className="feed">
        <div className="posts">
         <Post />
        </div>
      </div>
    </main>
  );
};

export default Feed;

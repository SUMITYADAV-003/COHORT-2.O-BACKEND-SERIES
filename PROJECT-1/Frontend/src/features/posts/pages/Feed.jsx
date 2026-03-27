import React from "react";
import "../style/feed.scss";
import Post from "../components/Post";
import { usePost } from "../hooks/usePost"

const Feed = () => {

  const {feed, handleGetFeed, loading , handleLike,  handleUnLike } = usePost();

  useEffect(() => {
    handleGetFeed()
  })



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

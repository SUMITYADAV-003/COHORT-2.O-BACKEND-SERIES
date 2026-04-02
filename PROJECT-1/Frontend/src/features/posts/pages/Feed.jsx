import { useEffect } from "react"; // ← useState remove kiya — use nahi ho raha
import "../style/feed.scss";
import Post from "../components/Post";
import { usePost } from "../hooks/usePost";
import Nav from "../components/Nav";

const Feed = () => {
  const { feed, loading, handleLike, handleUnLike } = usePost();
  // ← handleGetFeed yahan se remove kiya — usePost mein already useEffect hai

  // ─── Loading state ─────────────────────────────────────────────
  if (loading) {
    return (
      <main>
        <h1>Feed is loading...</h1>
      </main>
    );
  }

  // ─── Empty feed state ──────────────────────────────────────────
  if (!feed || feed.length === 0) {
    return (
      <main>
        <h1>No posts yet. Be the first to post!</h1>
      </main>
    );
  }

  return (
    <main className="feed-page">
      <Nav />
      <div className="feed">
        <div className="posts">
          {feed.map((post) => (
            <Post
              key={post._id}              // ← key prop add kiya
              user={post.user}
              post={post}
              loading={loading}
              handleLike={handleLike}
              handleUnLike={handleUnLike}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Feed;
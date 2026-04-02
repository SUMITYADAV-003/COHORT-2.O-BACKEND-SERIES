import { getFeed, createPost, likePost, unlikePost } from "../services/post.api";
import { useContext, useEffect, useCallback } from "react";
import { PostContext } from "../post.context";

export const usePost = () => {
  const context = useContext(PostContext);
  const { loading, setLoading, post, feed, setFeed, setPost } = context;

  // ─── Get Feed ─────────────────────────────────────────────────
  const handleGetFeed = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getFeed();
      // safety check — agar data.posts undefined hai toh empty array
      setFeed(data?.posts ? [...data.posts].reverse() : []);
    } catch (err) {
      console.error("Error fetching feed:", err);
    } finally {
      setLoading(false); // error aaye ya na aaye — loading false hoga
    }
  }, []);

  // ─── Create Post ───────────────────────────────────────────────
  const handleCreatePost = async (imageFile, caption) => {
    try {
      setLoading(true);
      const data = await createPost(imageFile, caption);
      if (data?.post) {
        setFeed((prev) => [data.post, ...prev]); // prev use karo — stale state avoid
      }
    } catch (err) {
      console.error("Error creating post:", err);
    } finally {
      setLoading(false);
    }
  };

  // ─── Like Post ─────────────────────────────────────────────────
  const handleLike = async (post) => {
    try {
      await likePost(post);
      // pura feed reload karne ki jagah sirf us post ka likes update karo
      setFeed((prev) =>
        prev.map((p) =>
          p._id === post._id
            ? { ...p, likes: [...p.likes, post.userId] } // optimistic update
            : p
        )
      );
    } catch (err) {
      console.error("Error liking post:", err);
      // error aaya toh fresh feed lo
      handleGetFeed();
    }
  };

  // ─── Unlike Post ───────────────────────────────────────────────
  const handleUnLike = async (post) => {
    try {
      await unlikePost(post);
      // sirf us post ka likes se userId remove karo
      setFeed((prev) =>
        prev.map((p) =>
          p._id === post._id
            ? { ...p, likes: p.likes.filter((id) => id !== post.userId) }
            : p
        )
      );
    } catch (err) {
      console.error("Error unliking post:", err);
      handleGetFeed();
    }
  };

  // ─── On Mount ──────────────────────────────────────────────────
  useEffect(() => {
    handleGetFeed();
  }, [handleGetFeed]); // ← handleGetFeed dependency mein dalo

  return {
    loading,
    feed,
    post,
    handleGetFeed,
    handleCreatePost,
    handleLike,
    handleUnLike,
  };
};
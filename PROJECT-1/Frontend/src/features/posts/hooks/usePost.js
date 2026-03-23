import { getAllFeed } from "../services/post.api";
import { useContext } from "react";
import { PostContext } from "../post.context";

export const usePost = () => {
  const context = useContext(PostContext);

  const {loadind, setLoading, post, setPost, feed, setFeed} = context;

  const handleGetFeed = async () => {
  setLoading(true);
  const data = await getAllFeed();
  setFeed(data.posts);
  setLoading(false);

  }
  return {loadind, feed, post, handleGetFeed}



}
import { createContext, useState } from "react";

export const PostContext = createContext();


export const PostContextProvider = ({children}) => {
  const [loadind, setLoading] = useState(false);
  const [feed, setFeed] = useState(null);
  const [post, setPost] = useState(null);

  return (
    <PostContext.Provider value={{ loadind, setLoading, post, setPost, feed, setFeed }}>
       {children}
    </PostContext.Provider>
  )
}
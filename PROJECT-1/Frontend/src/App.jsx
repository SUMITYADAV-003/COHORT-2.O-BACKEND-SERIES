import { RouterProvider } from "react-router";
import { router } from "./app.router";
import "../src/features/shared/global.scss"
import { AuthProvider } from "./features/auth/auth.context";
import { PostContext } from "./features/posts/post.context";

const App = () => {
  return (
    <AuthProvider>
      <PostContext>
        <RouterProvider  router={router}/>
      </PostContext>
    </AuthProvider>
    
  )
}

export default App
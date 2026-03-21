import { RouterProvider } from "react-router";
import { router } from "./app.router";
import "../src/features/shared/global.scss"

const App = () => {
  return (
    <RouterProvider  router={router}/>
  )
}

export default App
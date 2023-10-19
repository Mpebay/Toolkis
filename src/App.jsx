import { RouterProvider } from "react-router-dom"
import router from "../router/router"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { actionToken } from "../redux/actions/actionToken"



function App() {
  
  const dispatch = useDispatch()

  useEffect(() => {
    const token = window.localStorage.getItem("token")
    if (token) {
      dispatch(actionToken(token))
    }
  }, [])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

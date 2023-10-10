import Index from "./pages/Index"
import Login from "./pages/Login"
import Products from "./pages/Products"
import Register from "./pages/Register"
import Details from "./pages/Details"


function App() {
  

  return (
    <>
      <div>
        <Details/>
        <Register/>
        <Login/>
        <Products/>
        <Index/>
      </div>
    </>
  )
}

export default App

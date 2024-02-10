import { Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import Products from "./page/Products"
import Checkout from "./page/Checkout"

function App() {
 
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
    </>
  )
}

export default App

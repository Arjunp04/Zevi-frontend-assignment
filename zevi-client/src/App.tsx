import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.tsx";
import Products from "./Pages/Products/Products.tsx"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/products" element={ <Products/> } />
      </Routes>
    </BrowserRouter>

  )
}

export default App




import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = lazy( () => import( "./Pages/Home/Home" ) );
const ProductsFilter = lazy( () => import( "./Pages/ProductsFilter/ProductsFilter" ) )


//loading component
const Loading: React.FC = () => <div>Loading...</div>

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Suspense fallback={ <Loading /> }>
          <Home />
        </Suspense> } />
        <Route path="/products" element={ <Suspense fallback={ <Loading /> }>
          <ProductsFilter />
        </Suspense> } />
      </Routes>
    </BrowserRouter>

  )
}

export default App




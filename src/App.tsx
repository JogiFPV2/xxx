import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import ProductCatalog from "./components/products/product-catalog";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<ProductCatalog />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;

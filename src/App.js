import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ProductPage from "./pages/Product";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/Home";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

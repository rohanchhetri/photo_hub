import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Features from "./pages/features.jsx";
import Pricing from "./pages/pricing.jsx";
import Community from "./pages/community.jsx";
import Support from "./pages/support.jsx";
import Error from "./pages/error.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/community" element={<Community />} />
          <Route path="/support" element={<Support />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

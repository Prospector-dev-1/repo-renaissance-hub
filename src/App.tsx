import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import HomePage from "./pages/HomePage";
import HowItWorksPage from "./pages/HowItWorksPage";
import ForInnovatorsPage from "./pages/ForInnovatorsPage";
import ForCreatorsPage from "./pages/ForCreatorsPage";
import ForInvestorsPage from "./pages/ForInvestorsPage";
import ApplyPage from "./pages/ApplyPage";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0a0a1a] text-white dark">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/innovators" element={<ForInnovatorsPage />} />
          <Route path="/creators" element={<ForCreatorsPage />} />
          <Route path="/investors" element={<ForInvestorsPage />} />
          <Route path="/apply" element={<ApplyPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

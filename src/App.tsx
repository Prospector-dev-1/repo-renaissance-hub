import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HowItWorksPage from "./pages/HowItWorksPage";
import InnovatorsPage from "./pages/InnovatorsPage";
import CreatorsPage from "./pages/CreatorsPage";
import InvestorsPage from "./pages/InvestorsPage";
import ApplyPage from "./pages/ApplyPage";
import LearnMorePage from "./pages/LearnMorePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/innovators" element={<InnovatorsPage />} />
          <Route path="/creators" element={<CreatorsPage />} />
          <Route path="/investors" element={<InvestorsPage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/learn-more" element={<LearnMorePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

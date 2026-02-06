import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

// Layout Components
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

// Pages
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import WhyChooseUsPage from "./pages/WhyChooseUsPage";
import ContractsPage from "./pages/ContractsPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";

// Layout wrapper component
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

// Layout for legal pages (no footer nav)
const LegalLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Toaster position="top-right" richColors closeButton />
        <Routes>
          {/* Main pages with full layout */}
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
          <Route path="/why-choose-us" element={<Layout><WhyChooseUsPage /></Layout>} />
          <Route path="/contracts" element={<Layout><ContractsPage /></Layout>} />
          <Route path="/testimonials" element={<Layout><TestimonialsPage /></Layout>} />
          <Route path="/pricing" element={<Layout><PricingPage /></Layout>} />
          <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
          <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
          <Route path="/blog/:slug" element={<Layout><BlogPage /></Layout>} />
          
          {/* Legal pages */}
          <Route path="/privacy" element={<LegalLayout><PrivacyPage /></LegalLayout>} />
          <Route path="/terms" element={<LegalLayout><TermsPage /></LegalLayout>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

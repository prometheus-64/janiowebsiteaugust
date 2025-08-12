import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Admin from "./pages/Admin";
// import Resources from "./pages/Resources";
import Solutions from "./pages/Solutions";
import Services from "./pages/Services";
import UseCase from "./pages/UseCase";
import OperationsTeams from "./pages/solutions/OperationsTeams";
import ProcurementTeams from "./pages/solutions/ProcurementTeams";
import SupplyChainLeaders from "./pages/solutions/SupplyChainLeaders";
import FinanceTeams from "./pages/solutions/FinanceTeams";
import LogisticsAsAService from "./pages/services/LogisticsAsAService";
import TransportationProcurement from "./pages/services/TransportationProcurement";
import ControlTower from "./pages/services/ControlTower";
import InvoiceAudit from "./pages/services/InvoiceAudit";
import EcommerceScaling from "./pages/use-cases/EcommerceScaling";
import InternationalExpansion from "./pages/use-cases/InternationalExpansion";
import PeakSeason from "./pages/use-cases/PeakSeason";
import Digitization from "./pages/use-cases/Digitization";
import CaseStudyDetailPage from "./pages/use-cases/CaseStudyDetail";
// import Assessments from "./pages/resources/Assessments";
// import Calculators from "./pages/resources/Calculators";
// import Guides from "./pages/resources/Guides";
import Blog from "./pages/Blog";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import BlogPost from "./pages/BlogPost";
import EcommerceBrands from "./pages/EcommerceBrands";
import Marketplaces from "./pages/Marketplaces";
import LogisticsPartners from "./pages/LogisticsPartners";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import NavigationTracker from "./components/NavigationTracker";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
    <BrowserRouter>
      <ScrollToTop />
      <NavigationTracker />
      <Navigation />
      <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/resources" element={<Resources />} /> */}
          <Route path="/use-cases" element={<UseCase />} />
          
          {/* New Hub Pages */}
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/services" element={<Services />} />
          
          {/* ICP Solution Pages (Transformed Landing Pages) */}
          <Route path="/solutions/ecommerce-brands" element={<EcommerceBrands />} />
          <Route path="/solutions/marketplaces" element={<Marketplaces />} />
          <Route path="/solutions/logistics-partners" element={<LogisticsPartners />} />
          
          {/* Deprecated Role-Based Routes (Redirect to ICP-based) */}
          <Route path="/solutions/operations-teams" element={<OperationsTeams />} />
          <Route path="/solutions/procurement-teams" element={<ProcurementTeams />} />
          <Route path="/solutions/supply-chain-leaders" element={<SupplyChainLeaders />} />
          <Route path="/solutions/finance-teams" element={<FinanceTeams />} />
          
          {/* Service Detail Pages */}
          <Route path="/services/logistics-as-a-service" element={<LogisticsAsAService />} />
          <Route path="/services/transportation-procurement" element={<TransportationProcurement />} />
          <Route path="/services/control-tower" element={<ControlTower />} />
          <Route path="/services/invoice-audit" element={<InvoiceAudit />} />
          
          {/* Use Cases Routes */}
          <Route path="/use-cases/ecommerce-scaling" element={<EcommerceScaling />} />
          <Route path="/use-cases/international-expansion" element={<InternationalExpansion />} />
          <Route path="/use-cases/peak-season" element={<PeakSeason />} />
          <Route path="/use-cases/digitization" element={<Digitization />} />
          
          {/* Dynamic Use Case Detail Pages */}
          <Route path="/use-cases/:slug" element={<CaseStudyDetailPage />} />
          
          {/* Resources Routes */}
          <Route path="/resources/assessments" element={<Contact />} />
          <Route path="/assessment" element={<Contact />} />
           <Route path="/blog" element={<Blog />} />
           <Route path="/blog/:id" element={<BlogPost />} />
           <Route path="/case-studies" element={<CaseStudies />} />
           <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
           <Route path="/privacy" element={<Privacy />} />
           <Route path="/terms" element={<Terms />} />
           
           {/* Legacy Routes for SEO (Keep original landing pages) */}
          <Route path="/ecommerce-brands" element={<EcommerceBrands />} />
          <Route path="/marketplaces" element={<Marketplaces />} />
          <Route path="/logistics-partners" element={<LogisticsPartners />} />
          
          {/* Admin Dashboard */}
          <Route path="/admin" element={<Admin />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

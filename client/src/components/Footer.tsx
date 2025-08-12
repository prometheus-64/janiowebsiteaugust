import React from 'react';
import { Link } from 'react-router-dom';
import janioLogo from "@assets/Untitled design_1753081963849.png";

const Footer = () => {
  const solutionsItems = [{
    title: "For Ecommerce Brands",
    href: "/solutions/ecommerce-brands"
  }, {
    title: "For Marketplaces", 
    href: "/solutions/marketplaces"
  }, {
    title: "For Logistics Service Providers",
    href: "/solutions/logistics-partners"
  }];

  const servicesItems = [{
    title: "Logistics as a Service (LaaS)",
    href: "/services/logistics-as-a-service"
  }, {
    title: "Strategic Procurement",
    href: "/services/transportation-procurement"
  }, {
    title: "Supply Chain Control Tower",
    href: "/services/control-tower"
  }, {
    title: "Automated Invoice Audit",
    href: "/services/invoice-audit"
  }];

  const useCasesItems = [{
    title: "E-commerce Scaling",
    href: "/use-cases/ecommerce-scaling"
  }, {
    title: "International Expansion",
    href: "/use-cases/international-expansion"
  }, {
    title: "Peak Season Management",
    href: "/use-cases/peak-season"
  }, {
    title: "Supply Chain Digitization",
    href: "/use-cases/digitization"
  }];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src={janioLogo} 
                alt="Janio - Logistics Simplified" 
                className="h-10 w-auto object-contain"
                style={{ maxHeight: '40px' }}
                onError={(e) => {
                  console.warn('Footer logo not available, hiding element');
                  e.currentTarget.style.display = 'none';
                }}
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Logistics simplified for intelligent supply chain solutions.
              Transform your business with AI-powered automation and seamless logistics management.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  All Solutions
                </Link>
              </li>
              {solutionsItems.map(item => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  All Services
                </Link>
              </li>
              {servicesItems.map(item => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Use Cases</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/use-cases" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  All Use Cases
                </Link>
              </li>
              {useCasesItems.map(item => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Janio. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

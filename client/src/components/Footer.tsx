import React from 'react';
import { Link } from 'react-router-dom';
import { FEATURE_HIDE_RESOURCES } from '@/config';
import janioLogo from "@assets/Untitled design_1753081963849.png";
import { Linkedin, Twitter, Mail, Globe, MapPin } from 'lucide-react';

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

  

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
              Janio specializes in intelligent supply chain procurement, automation, and seamless partner management across Asia and beyond.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>30 Prinsep St, #06-01, Singapore 188647</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:contact@janio.asia" className="hover:text-primary transition-colors">
                  contact@janio.asia
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:sales@janio.asia" className="hover:text-primary transition-colors">
                  sales@janio.asia
                </a>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://www.linkedin.com/company/janio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#0077B5] transition-colors"
                aria-label="Follow Janio on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/janioasia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#1DA1F2] transition-colors"
                aria-label="Follow Janio on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://janio.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Visit Janio website"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
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

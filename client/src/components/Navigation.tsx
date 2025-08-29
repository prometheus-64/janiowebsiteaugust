import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import janioLogo from "@assets/Untitled design_1753081963849.png";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { FEATURE_HIDE_RESOURCES } from '@/config';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const solutionsItems = [{
    title: "For Ecommerce Brands",
    href: "/solutions/ecommerce-brands",
    description: "Scale faster, ship smarter with optimized logistics"
  }, {
    title: "For Marketplaces",
    href: "/solutions/marketplaces",
    description: "Unify your seller logistics across borders"
  }, {
    title: "For Logistics Service Providers",
    href: "/solutions/logistics-partners",
    description: "Expand your service portfolio with 4PL capabilities"
  }];

  const servicesItems = [{
    title: "Multi-Carrier Platform (MCPMS)",
    href: "/services/mcpms",
    description: "AI-powered logistics command center with real-time visibility"
  }, {
    title: "Logistics as a Service (LaaS)",
    href: "/services/logistics-as-a-service",
    description: "Complete logistics department, outsourced"
  }, {
    title: "Strategic Procurement",
    href: "/services/transportation-procurement",
    description: "AI-powered procurement with 25% cost reduction"
  }, {
    title: "Supply Chain Control Tower",
    href: "/services/control-tower",
    description: "Real-time visibility and predictive analytics"
  }, {
    title: "Automated Invoice Audit",
    href: "/services/invoice-audit",
    description: "Eliminate errors and recover 8-12% of spend"
  }];

  const useCasesItems = [{
    title: "E-commerce Scaling",
    href: "/use-cases/ecommerce-scaling",
    description: "Scale operations without logistics complexity"
  }, {
    title: "International Expansion",
    href: "/use-cases/international-expansion",
    description: "Seamless global supply chain management"
  }, {
    title: "Peak Season Management",
    href: "/use-cases/peak-season",
    description: "Handle demand spikes with confidence"
  }, {
    title: "Supply Chain Digitization",
    href: "/use-cases/digitization",
    description: "Transform manual processes with technology"
  }];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between w-full">
          {/* Logo - Left Side */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300">
            <img 
              src={janioLogo} 
              alt="Janio Logistics Simplified" 
              className="h-12 w-auto object-contain"
              style={{ maxHeight: '48px' }}
              onError={(e) => {
                console.error('Logo failed to load:', e);
                e.currentTarget.style.display = 'none';
              }}
            />
            </Link>
          </div>

          {/* Navigation - Right Side */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Home */}
                <NavigationMenuItem>
                  <Link to="/" className={cn("nav-link px-4 py-2 text-base font-medium", location.pathname === "/" && "text-primary")}>
                    Home
                  </Link>
                </NavigationMenuItem>

                {/* Solutions */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="nav-link text-base font-medium">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="nav-dropdown w-[500px] p-6">
                      <div className="mb-4">
                        <Link to="/solutions" className="text-sm font-medium text-primary hover:underline">
                          View All Solutions →
                        </Link>
                      </div>
                      <div className="grid gap-3">
                        {solutionsItems.map(item => (
                          <NavigationMenuLink asChild key={item.href}>
                            <Link to={item.href} className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground")}>
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                              <p className="text-xs leading-snug font-normal text-inherit">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Services */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="nav-link text-base font-medium">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="nav-dropdown w-[500px] p-6">
                      <div className="mb-4">
                        <Link to="/services" className="text-sm font-medium text-primary hover:underline">
                          View All Services →
                        </Link>
                      </div>
                      <div className="grid gap-3">
                        {servicesItems.map(item => (
                          <NavigationMenuLink asChild key={item.href}>
                            <Link to={item.href} className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground")}>
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                              <p className="text-xs leading-snug font-normal text-inherit">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {!FEATURE_HIDE_RESOURCES && (
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="nav-link text-base font-medium">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="nav-dropdown w-[500px] p-6">
                      <div className="mb-4">
                        <Link to="/resources" className="text-sm font-medium text-primary hover:underline">
                          View All Resources →
                        </Link>
                      </div>
                      <div className="grid gap-3">
                        <NavigationMenuLink asChild>
                          <Link to="/resources/blogs" className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground")}>
                            <div className="text-sm font-medium leading-none">Blogs</div>
                            <p className="text-xs leading-snug font-normal text-inherit">
                              Industry insights and logistics best practices
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/resources/guides" className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground")}>
                            <div className="text-sm font-medium leading-none">Guides</div>
                            <p className="text-xs leading-snug font-normal text-inherit">
                              Comprehensive guides for supply chain optimization
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/resources/case-studies" className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground")}>
                            <div className="text-sm font-medium leading-none">Case Studies</div>
                            <p className="text-xs leading-snug font-normal text-inherit">
                              Real-world success stories and cost reductions
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/resources/calculators" className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground")}>
                            <div className="text-sm font-medium leading-none">Calculators</div>
                            <p className="text-xs leading-snug font-normal text-inherit">
                              ROI and cost savings assessment tools
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>)}

                {/* About & Contact */}
                <NavigationMenuItem>
                  <Link to="/about" className={cn("nav-link px-4 py-2 text-base font-medium", location.pathname === "/about" && "text-primary")}>
                    About
                  </Link>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>

            {/* Contact and CTA */}
            <div className="flex items-center space-x-6">
              <Link to="/contact" className="nav-link text-base font-medium">
                Contact
              </Link>
              <Link to="/contact">
                <Button className="btn-primary text-base px-8 py-3">Get Started</Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-sm font-medium text-gray-900 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/solutions" className="text-sm font-medium text-gray-900 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Solutions
              </Link>
              <Link to="/services" className="text-sm font-medium text-gray-900 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Services
              </Link>
              {!FEATURE_HIDE_RESOURCES && <Link to="/resources" className="text-sm font-medium text-gray-900 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Resources
              </Link>}
              <Link to="/about" className="text-sm font-medium text-gray-900 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
              <Link to="/contact" className="text-sm font-medium text-gray-900 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
              <Button className="bg-primary text-white hover:bg-primary/90 w-fit" size="lg" asChild>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Book a Consultation!
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

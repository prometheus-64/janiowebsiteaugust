import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, Search, Mail, MapPin } from "lucide-react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const popularPages = [
    { name: "Services", path: "/services", description: "Our logistics services" },
    { name: "Solutions", path: "/solutions", description: "Industry solutions" },
    { name: "Use Cases", path: "/use-cases", description: "Success stories" },
    { name: "About Us", path: "/about", description: "Learn about Janio" },
    { name: "Contact", path: "/contact", description: "Get in touch" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Page Not Found | 404 Error"
        description="The page you're looking for doesn't exist. Explore our logistics solutions, services, and use cases instead."
        url={location.pathname}
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Error Hero */}
          <div className="mb-12">
            <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Page Not Found
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              The page you're looking for doesn't exist or may have been moved. 
              Let's help you find what you need.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="#" onClick={() => window.history.back()}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Go Back
                </Link>
              </Button>
            </div>
          </div>

          {/* Popular Pages */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Popular Pages
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularPages.map((page) => (
                <Card key={page.path} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Link to={page.path} className="block">
                      <h3 className="font-semibold text-foreground mb-2">{page.name}</h3>
                      <p className="text-sm text-muted-foreground">{page.description}</p>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-muted rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Need Help?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Search className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Search Our Site</h3>
                <p className="text-sm text-muted-foreground">
                  Use our navigation menu to find what you're looking for.
                </p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Contact Support</h3>
                <Link to="/contact" className="text-sm text-primary hover:underline">
                  Get in touch with our team
                </Link>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Visit Our Office</h3>
                <p className="text-sm text-muted-foreground">
                  30 Prinsep St, #06-01, Singapore 188647
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

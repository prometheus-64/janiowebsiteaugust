import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageSEO from '@/components/PageSEO';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User, ArrowRight, TrendingUp, Users, BookOpen, Target } from 'lucide-react';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "4PL vs 3PL vs In-House: Total Cost of Ownership Comparison for East Asia",
      slug: "4pl-vs-3pl-vs-in-house-total-cost-ownership-comparison-east-asia",
      excerpt: "Comprehensive TCO analysis comparing logistics approaches for East Asian operations, including hidden costs, regional considerations, and strategic recommendations for businesses facing rapid growth or expansion.",
      author: "David Kim",
      authorTitle: "Senior Supply Chain Strategist",
      readTime: "18 min read",
      category: "Cost Management",
      publishDate: "Dec 20, 2024",
      featured: true
    },
    {
      id: 2,
      title: "Designing Exception Playbooks that Shrink WISMO by 30%",
      slug: "designing-exception-playbooks-shrink-wismo-30-percent",
      excerpt: "Systematic approach to proactive exception management that reduces 'Where Is My Order?' inquiries while improving customer satisfaction and operational efficiency through predictive supply chain excellence.",
      author: "Operations Team",
      authorTitle: "Logistics Operations",
      readTime: "16 min read",
      category: "Operations",
      publishDate: "Dec 18, 2024",
      featured: true
    }
  ];

  const categories = ["All", "4PL Strategy", "Operations", "Cost Management", "International Expansion", "Technology", "Cost Recovery"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <PageSEO page="resourcesBlogs" />
      
      {/* Hero Section - Matching Home Page Format */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary">
        {/* Enhanced Background with Subtle Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/95" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/50 rounded-full blur-2xl"></div>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-6 text-center text-white">
          <div className="mb-4 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4">
              Logistics Industry Insights
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-bold mb-8 animate-fade-in leading-tight tracking-tight">
            Expert Insights for
            <span className="block text-white bg-gradient-to-r from-white to-blue-100 bg-clip-text">Supply Chain Leaders</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/80 mb-12 leading-loose max-w-4xl mx-auto animate-slide-up font-light">
            Industry insights, best practices, and strategic guidance from logistics experts helping 500+ companies optimize their supply chains across Southeast Asia
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-scale-in">
            <Link to="#featured">
              <button className="bg-white text-primary hover:bg-gray-100 text-lg px-12 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Read Latest Articles <ArrowRight className="ml-2 w-5 h-5 inline" />
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-transparent border-2 border-white/70 text-white hover:bg-white/10 hover:border-white text-lg px-12 py-4 rounded-full font-medium transition-all duration-200">
                Subscribe to Newsletter
              </button>
            </Link>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up">
            {categories.slice(0, 5).map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "secondary" : "outline"}
                className={category === "All" ? "" : "border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section id="featured" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-display mb-4">Featured Articles</h2>
              <p className="text-xl text-muted-foreground">
                Most popular insights from logistics industry leaders
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.filter(post => post.featured).map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer" onClick={() => window.location.href = `/resources/blogs/${post.slug}`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{post.publishDate}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="group-hover:text-primary h-8 px-2 text-xs" asChild>
                        <Link to={`/resources/blogs/${post.slug}`}>
                          Read <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-display mb-4">
                {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
              </h2>
              <p className="text-xl text-muted-foreground">
                {selectedCategory === "All" 
                  ? "Explore our complete library of logistics insights" 
                  : `Articles focused on ${selectedCategory.toLowerCase()}`
                }
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer" onClick={() => window.location.href = `/resources/blogs/${post.slug}`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant={post.featured ? "default" : "outline"}>{post.category}</Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{post.publishDate}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="group-hover:text-primary h-8 px-2 text-xs" asChild>
                        <Link to={`/resources/blogs/${post.slug}`}>
                          Read <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No articles found in this category.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setSelectedCategory("All")}
                >
                  View All Articles
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <BookOpen className="h-8 w-8" />
                <h2 className="text-3xl font-bold font-display">
                  Never Miss an Insight
                </h2>
              </div>
              <p className="text-xl text-primary-foreground/90">
                Get the latest logistics insights, case studies, and optimization tips delivered weekly
              </p>
              
              <div className="flex flex-wrap justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  <span>Weekly insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>5,000+ subscribers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  <span>Actionable tips</span>
                </div>
              </div>
              
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">Subscribe to Newsletter</Link>
              </Button>
              
              <p className="text-sm text-primary-foreground/70">
                Join supply chain leaders from Fortune 500 companies. No spam, unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;

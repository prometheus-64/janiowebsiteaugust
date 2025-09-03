import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, Calendar, Clock, User, TrendingUp, Package, Truck, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Industry Insights', 'Technology', 'Cost Optimization', 'Operations', 'Trends'];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of 4PL: How AI is Revolutionizing Supply Chain Management",
      excerpt: "Explore how artificial intelligence and machine learning are transforming fourth-party logistics providers and creating new opportunities for efficiency and cost savings.",
      category: "Technology",
      author: "Sarah Chen",
      publishDate: "March 15, 2024",
      readTime: "8 min read",
      image: "/api/placeholder/400/250",
      tags: ["AI", "Machine Learning", "4PL", "Innovation"],
      featured: true
    },
    {
      id: 2,
      title: "Peak Season Preparation: 5 Strategies That Saved Our Clients Millions",
      excerpt: "Learn from real case studies how proper peak season planning can prevent stockouts, reduce costs, and maintain customer satisfaction during high-demand periods.",
      category: "Operations",
      author: "Michael Rodriguez",
      publishDate: "March 12, 2024",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      tags: ["Peak Season", "Planning", "Case Study", "Operations"]
    },
    {
      id: 3,
      title: "Transportation Procurement in 2024: Market Dynamics and Cost Optimization",
      excerpt: "Navigate the complex transportation market with insights on carrier capacity, rate negotiations, and strategic procurement approaches for maximum savings.",
      category: "Cost Optimization",
      author: "Jennifer Liu",
      publishDate: "March 10, 2024",
      readTime: "7 min read",
      image: "/api/placeholder/400/250",
      tags: ["Procurement", "Transportation", "Cost Savings", "Strategy"]
    },
    {
      id: 4,
      title: "Supply Chain Visibility: The Hidden ROI of Real-Time Tracking",
      excerpt: "Discover how end-to-end supply chain visibility drives value beyond tracking, including improved decision-making, risk mitigation, and customer satisfaction.",
      category: "Technology",
      author: "David Park",
      publishDate: "March 8, 2024",
      readTime: "5 min read",
      image: "/api/placeholder/400/250",
      tags: ["Visibility", "Tracking", "ROI", "Technology"]
    },
    {
      id: 5,
      title: "E-commerce Logistics Scaling: When to Partner with a 4PL",
      excerpt: "Understand the critical decision points for e-commerce companies considering 4PL partnerships and how to evaluate the right time to make the transition.",
      category: "Industry Insights",
      author: "Amanda Foster",
      publishDate: "March 5, 2024",
      readTime: "9 min read",
      image: "/api/placeholder/400/250",
      tags: ["E-commerce", "4PL", "Scaling", "Partnership"]
    },
    {
      id: 6,
      title: "Sustainable Logistics: Balancing Green Initiatives with Cost Efficiency",
      excerpt: "Explore practical approaches to implementing sustainable logistics practices while maintaining profitability and operational efficiency.",
      category: "Trends",
      author: "Robert Kim",
      publishDate: "March 3, 2024",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      tags: ["Sustainability", "Green Logistics", "Environment", "Efficiency"]
    },
    {
      id: 7,
      title: "International Expansion: Avoiding Common Logistics Pitfalls",
      excerpt: "Learn from the mistakes of others when expanding globally. Our guide covers regulatory compliance, carrier selection, and risk management strategies.",
      category: "Operations",
      author: "Lisa Thompson",
      publishDate: "February 28, 2024",
      readTime: "8 min read",
      image: "/api/placeholder/400/250",
      tags: ["International", "Expansion", "Global", "Risk Management"]
    },
    {
      id: 8,
      title: "Warehouse Automation ROI: Real Numbers from Recent Implementations",
      excerpt: "Dive into actual ROI data from warehouse automation projects, including implementation costs, payback periods, and ongoing operational benefits.",
      category: "Technology",
      author: "James Wilson",
      publishDate: "February 25, 2024",
      readTime: "7 min read",
      image: "/api/placeholder/400/250",
      tags: ["Automation", "Warehouse", "ROI", "Implementation"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/95" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 text-base px-4 py-2">
              Janio Blog
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
              Supply Chain Insights & Best Practices
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Expert insights, industry trends, and practical guides from logistics professionals
            </p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 bg-background text-foreground"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted border-b">
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

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold font-display mb-2">Featured Article</h2>
              </div>
              
              <Card className="overflow-hidden hover:shadow-medium transition-shadow">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="bg-muted aspect-video lg:aspect-auto"></div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="secondary">{featuredPost.category}</Badge>
                      <Badge>Featured</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                    <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {featuredPost.publishDate}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild>
                      <Link to={`/blog/${featuredPost.id}`}>
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Latest Articles
              </h2>
              <p className="text-xl text-muted-foreground">
                Stay updated with the latest trends and insights in supply chain management
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-medium transition-shadow">
                  <div className="bg-muted aspect-video"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.publishDate}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                    
                    <Button size="sm" variant="outline" className="w-full" asChild>
                      <Link to={`/blog/${post.id}`}>
                        Read Article
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                <p className="text-muted-foreground">Try adjusting your search terms or category filter.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Popular Topics
              </h2>
              <p className="text-xl text-muted-foreground">
                Explore our most read content areas
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: TrendingUp, title: "Cost Optimization", count: "15 articles", color: "text-primary" },
                { icon: Package, title: "E-commerce Scaling", count: "12 articles", color: "text-secondary" },
                { icon: Truck, title: "Transportation", count: "18 articles", color: "text-accent" },
                { icon: BarChart3, title: "Analytics & KPIs", count: "9 articles", color: "text-primary" }
              ].map((topic, index) => (
                <Card key={index} className="text-center hover:shadow-medium transition-shadow">
                  <CardContent className="p-6">
                    <topic.icon className={`h-12 w-12 mx-auto mb-4 ${topic.color}`} />
                    <h3 className="text-lg font-semibold mb-2">{topic.title}</h3>
                    <p className="text-muted-foreground text-sm">{topic.count}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get weekly insights on supply chain optimization and industry best practices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button onClick={() => {
                const email = prompt('Enter your email address:');
                if (email) {
                  alert('Thank you for subscribing! We\'ll be in touch soon.');
                }
              }}>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, TrendingUp } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const BlogPost = () => {
  const { id } = useParams();
  const { toast } = useToast();

  // Sample blog posts data
  const blogPosts = {
    "1": {
      title: "The Future of 4PL: How AI is Revolutionizing Supply Chain Management",
      excerpt: "Artificial intelligence is fundamentally transforming the logistics industry, and fourth-party logistics (4PL) providers are at the forefront of this revolution.",
      content: `
        <p>Artificial intelligence is fundamentally transforming the logistics industry, and fourth-party logistics (4PL) providers are at the forefront of this revolution. As supply chains become increasingly complex and global, AI-powered solutions are enabling unprecedented levels of optimization, visibility, and efficiency.</p>

        <h2>The Current State of AI in 4PL</h2>
        <p>Today's 4PL providers are leveraging AI in multiple ways:</p>
        <ul>
          <li><strong>Predictive Analytics:</strong> Machine learning algorithms analyze historical data to forecast demand, identify potential disruptions, and optimize inventory levels.</li>
          <li><strong>Route Optimization:</strong> AI-powered systems can process millions of variables in real-time to determine the most efficient delivery routes.</li>
          <li><strong>Automated Decision Making:</strong> Intelligent systems can make real-time decisions about carrier selection, mode optimization, and contingency planning.</li>
        </ul>

        <h2>Real-World Applications</h2>
        <p>At Janio, we've implemented AI solutions that have delivered measurable results for our clients:</p>
        <ul>
          <li>30% reduction in transportation costs through AI-driven carrier optimization</li>
          <li>25% improvement in on-time delivery rates using predictive analytics</li>
          <li>40% decrease in manual processing time through automated workflow management</li>
        </ul>

        <h2>Looking Ahead: The Future of AI in 4PL</h2>
        <p>The next five years will see even more dramatic transformations:</p>
        
        <h3>Autonomous Supply Chains</h3>
        <p>We're moving toward fully autonomous supply chain management, where AI systems will handle end-to-end logistics operations with minimal human intervention. This includes everything from demand sensing to last-mile delivery optimization.</p>

        <h3>Enhanced Visibility and Transparency</h3>
        <p>AI will provide unprecedented visibility into supply chain operations, enabling real-time tracking not just of shipments, but of risks, opportunities, and performance metrics across the entire network.</p>

        <h3>Sustainability Optimization</h3>
        <p>AI algorithms will increasingly focus on environmental impact, automatically selecting the most sustainable transportation modes and routes while maintaining cost efficiency.</p>

        <h2>Implementation Considerations</h2>
        <p>While the benefits of AI in 4PL are clear, successful implementation requires careful consideration of several factors:</p>
        
        <ul>
          <li><strong>Data Quality:</strong> AI systems are only as good as the data they're trained on. Ensuring clean, accurate, and comprehensive data is crucial.</li>
          <li><strong>Change Management:</strong> Organizations must prepare their teams for the shift toward AI-driven operations.</li>
          <li><strong>Technology Integration:</strong> AI solutions must seamlessly integrate with existing systems and workflows.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>The integration of AI into 4PL operations is not just a technological upgrade—it's a fundamental transformation of how supply chains operate. Companies that embrace these technologies now will gain significant competitive advantages in efficiency, cost reduction, and customer satisfaction.</p>

        <p>As we continue to develop and implement AI solutions at Janio, we're committed to helping our clients navigate this transformation and realize the full potential of intelligent supply chain management.</p>
      `,
      category: "Technology",
      author: "Sarah Chen",
      publishDate: "March 15, 2024",
      readTime: "8 min read",
      tags: ["AI", "Machine Learning", "4PL", "Innovation"]
    },
    "2": {
      title: "Peak Season Preparation: 5 Strategies That Saved Our Clients Millions",
      excerpt: "Peak season can make or break a company's annual performance. Learn five critical strategies that consistently deliver results during high-demand periods.",
      content: `
        <p>Peak season can make or break a company's annual performance. Through our work with hundreds of e-commerce brands and retailers, we've identified five critical strategies that consistently deliver results during high-demand periods.</p>

        <h2>Strategy 1: Demand Forecasting with Historical Data Plus</h2>
        <p>Traditional demand forecasting looks at historical sales data, but peak season requires a more sophisticated approach. Our most successful clients combine:</p>
        <ul>
          <li>3-year historical sales patterns</li>
          <li>Market trend analysis</li>
          <li>Competitor pricing intelligence</li>
          <li>Economic indicators and consumer sentiment</li>
        </ul>
        
        <p><strong>Result:</strong> One client improved forecast accuracy by 35%, reducing both stockouts and excess inventory.</p>

        <h2>Strategy 2: Flexible Capacity Planning</h2>
        <p>Instead of committing to fixed capacity months in advance, smart companies build flexible arrangements:</p>
        <ul>
          <li>Tiered warehouse space agreements</li>
          <li>On-demand labor partnerships</li>
          <li>Multi-carrier transportation contracts</li>
          <li>Technology that can scale processing power</li>
        </ul>

        <p><strong>Case Study:</strong> A major electronics retailer used flexible capacity planning to handle a 300% spike in orders during Black Friday week without service degradation.</p>

        <h2>Strategy 3: Pre-Positioning Inventory</h2>
        <p>Strategic inventory placement can dramatically reduce shipping costs and delivery times during peak season:</p>
        <ul>
          <li>Analyze historical shipping patterns to identify optimal locations</li>
          <li>Partner with regional fulfillment centers</li>
          <li>Use predictive analytics to pre-position high-velocity items</li>
          <li>Implement just-in-time replenishment for forward-deployed inventory</li>
        </ul>

        <h2>Strategy 4: Carrier Diversification and Backup Plans</h2>
        <p>Relying on a single carrier during peak season is risky. Our top-performing clients maintain:</p>
        <ul>
          <li>Primary carrier relationships with guaranteed capacity</li>
          <li>Secondary carriers for overflow and redundancy</li>
          <li>Regional carrier partnerships for specific markets</li>
          <li>Emergency same-day and next-day delivery options</li>
        </ul>

        <h2>Strategy 5: Real-Time Monitoring and Rapid Response</h2>
        <p>Peak season requires constant vigilance and the ability to pivot quickly. Essential components include:</p>
        <ul>
          <li>Real-time inventory tracking across all locations</li>
          <li>Automated alerts for unusual patterns or disruptions</li>
          <li>Dedicated peak season response teams</li>
          <li>Pre-approved contingency plans for common scenarios</li>
        </ul>

        <h2>The Numbers That Matter</h2>
        <p>Across our client base, these strategies have delivered impressive results:</p>
        <ul>
          <li><strong>$12M in cost savings</strong> for a major home goods retailer through improved demand forecasting</li>
          <li><strong>99.2% on-time delivery rate</strong> maintained during peak season for a fashion e-commerce brand</li>
          <li><strong>40% reduction in emergency shipping costs</strong> through strategic pre-positioning</li>
          <li><strong>25% improvement in customer satisfaction scores</strong> during the holiday season</li>
        </ul>

        <h2>Getting Started: Your Peak Season Checklist</h2>
        <p>To implement these strategies for the upcoming peak season:</p>
        <ol>
          <li>Conduct a thorough analysis of last year's performance</li>
          <li>Identify the top 3 constraints that limited your success</li>
          <li>Develop forecasting models that incorporate multiple data sources</li>
          <li>Negotiate flexible capacity agreements with key partners</li>
          <li>Create detailed contingency plans for likely disruption scenarios</li>
        </ol>

        <p>Peak season preparation isn't just about having enough inventory—it's about building a resilient, flexible system that can adapt to changing conditions while maintaining service levels and controlling costs.</p>
      `,
      category: "Operations",
      author: "Michael Rodriguez",
      publishDate: "March 12, 2024",
      readTime: "6 min read",
      tags: ["Peak Season", "Planning", "Case Study", "Operations"]
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied",
      description: "Article link has been copied to your clipboard.",
    });
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <main className="pt-20">
          <div className="container mx-auto px-6 py-16 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  const relatedPosts = [
    { id: "1", title: "The Future of 4PL: How AI is Revolutionizing Supply Chain Management", category: "Technology" },
    { id: "2", title: "Peak Season Preparation: 5 Strategies That Saved Our Clients Millions", category: "Operations" }
  ].filter(p => p.id !== id);

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-20">
        {/* Article Header */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Button variant="ghost" asChild className="mb-6">
                <Link to="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
              
              <Badge variant="secondary" className="mb-4">{post.category}</Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.publishDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">{tag}</Badge>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <Button onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: post.title,
                      text: post.excerpt,
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                  }
                }} variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Article
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div 
                className="prose prose-lg max-w-none text-foreground/80"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={{
                  lineHeight: '1.8',
                }}
              />
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center">
                  <BookOpen className="mr-2 h-6 w-6" />
                  Related Articles
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Card key={relatedPost.id} className="hover:shadow-medium transition-shadow">
                      <CardContent className="p-6">
                        <Badge variant="outline" className="mb-3">{relatedPost.category}</Badge>
                        <h3 className="text-lg font-semibold mb-4">{relatedPost.title}</h3>
                        <Button asChild variant="outline" size="sm">
                          <Link to={`/blog/${relatedPost.id}`}>
                            Read Article
                            <TrendingUp className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Optimize Your Supply Chain?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Let our experts help you implement these strategies for your business
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogPost;
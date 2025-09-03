import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, User, Calendar, Share2, BookOpen, TrendingUp, Users, Target } from 'lucide-react';
import SEO from '@/components/SEO';
import { generateArticleSchema, generateKeywords, formatDateForSEO } from '@/utils/seo';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  // Sample blog post data - in a real app, this would come from an API
  const blogPosts = {
    "4pl-vs-3pl-vs-in-house-total-cost-ownership-comparison-east-asia": {
      id: 1,
      title: "4PL vs 3PL vs In-House: Total Cost of Ownership Comparison for East Asia",
      slug: "4pl-vs-3pl-vs-in-house-total-cost-ownership-comparison-east-asia",
      excerpt: "Comprehensive TCO analysis comparing logistics approaches for East Asian operations, including hidden costs, regional considerations, and strategic recommendations for businesses facing rapid growth or expansion.",
      author: "David Kim",
      authorTitle: "Senior Supply Chain Strategist",
      readTime: "18 min read",
      category: "Cost Management",
      publishDate: "December 20, 2024",
      content: `
        <p>When businesses in East Asia face rapid growth, international expansion, or supply chain complexity, one critical decision emerges: How should we manage our logistics operations? The choice between maintaining in-house logistics, partnering with third-party logistics providers (3PLs), or engaging a fourth-party logistics provider (4PL) can fundamentally impact your operational efficiency, cost structure, and competitive advantage.</p>

        <p>This comprehensive analysis examines the Total Cost of Ownership (TCO) for each approach, with specific focus on the unique challenges and opportunities within the East Asian market.</p>

        <h2>Understanding the Three Approaches</h2>

        <h3>In-House Logistics</h3>
        <p>In-house logistics means your company directly manages all aspects of the supply chain, from warehousing and inventory management to transportation and order fulfillment. You own or lease the facilities, hire the staff, invest in technology, and assume full operational responsibility.</p>

        <h3>Third-Party Logistics (3PL)</h3>
        <p>3PLs are specialized companies that handle specific logistics functions on your behalf. You might partner with one 3PL for warehousing, another for transportation, and a third for customs clearance. Each provider focuses on their area of expertise while you coordinate between them.</p>

        <h3>Fourth-Party Logistics (4PL)</h3>
        <p>A 4PL provider acts as your comprehensive logistics partner, taking strategic ownership of your entire supply chain. They coordinate multiple 3PLs, integrate technology platforms, and assume end-to-end responsibility for logistics performance while you focus on your core business.</p>

        <h2>Total Cost of Ownership Framework</h2>
        <p>TCO analysis goes beyond simple service fees to include all direct and indirect costs associated with each logistics approach. For East Asian businesses, this analysis must account for unique regional factors including regulatory complexity, infrastructure variations, and rapid e-commerce growth.</p>

        <h3>Direct Costs</h3>
        <p><strong>In-House Direct Costs:</strong></p>
        <ul>
          <li>Facility costs (leases, utilities, maintenance)</li>
          <li>Staff salaries and benefits</li>
          <li>Technology investments (WMS, TMS, ERP)</li>
          <li>Equipment and vehicles</li>
          <li>Insurance and compliance</li>
        </ul>

        <p><strong>3PL Direct Costs:</strong></p>
        <ul>
          <li>Service fees per transaction or volume</li>
          <li>Setup and integration costs</li>
          <li>Contract minimums and commitments</li>
          <li>Technology access fees</li>
        </ul>

        <p><strong>4PL Direct Costs:</strong></p>
        <ul>
          <li>Management fees (typically 3-5% of logistics spend)</li>
          <li>Implementation and transition costs</li>
          <li>Technology platform access</li>
          <li>Performance-based incentives</li>
        </ul>

        <h3>Hidden and Indirect Costs</h3>
        <p>The real TCO picture emerges when examining hidden costs that often surprise businesses:</p>

        <p><strong>Management Overhead:</strong></p>
        <ul>
          <li>In-house: Significant internal management time required</li>
          <li>3PL: Coordination across multiple providers, vendor management</li>
          <li>4PL: Minimal internal management required</li>
        </ul>

        <h2>East Asia Market Analysis</h2>

        <h3>Market Characteristics Impacting TCO</h3>
        <p><strong>Regulatory Complexity:</strong> East Asia's diverse regulatory environment significantly impacts logistics costs. Countries like Singapore offer streamlined processes, while markets like Indonesia or Vietnam present more complex requirements. For in-house operations, maintaining compliance expertise across multiple markets can cost $200,000-$500,000 annually per market. 4PL providers spread this expertise across multiple clients, reducing per-client costs by 60-80%.</p>

        <p><strong>Infrastructure Variability:</strong> From Singapore's world-class logistics infrastructure to emerging markets with developing capabilities, East Asia presents dramatic infrastructure differences. In-house operations require separate investments in each market, while 4PLs leverage existing networks and relationships.</p>

        <p><strong>E-commerce Growth:</strong> East Asia's e-commerce market, valued at over $1.2 trillion, creates unique demands for last-mile delivery, returns processing, and omnichannel fulfillment. These requirements often strain in-house capabilities and exceed typical 3PL specializations.</p>

        <h3>TCO Scenarios by Business Profile</h3>

        <h4>Fast-Growing E-commerce Company ($10M-$50M Revenue)</h4>
        <div class="bg-muted p-4 rounded-lg my-4">
          <p><strong>In-House TCO (Annual):</strong></p>
          <ul>
            <li>Fixed costs: $2.4M (facilities, staff, technology)</li>
            <li>Variable costs: $1.8M (transportation, utilities)</li>
            <li>Management overhead: $600K (20% of operations team time)</li>
            <li><strong>Total: $4.8M (9.6-24% of revenue)</strong></li>
          </ul>

          <p><strong>3PL Network TCO (Annual):</strong></p>
          <ul>
            <li>Service fees: $2.2M</li>
            <li>Management overhead: $400K (vendor coordination)</li>
            <li>Integration costs: $150K</li>
            <li>Risk/exception costs: $300K</li>
            <li><strong>Total: $3.05M (6.1-15.25% of revenue)</strong></li>
          </ul>

          <p><strong>4PL TCO (Annual):</strong></p>
          <ul>
            <li>Service fees: $2.1M</li>
            <li>Management fees: $180K</li>
            <li>Implementation: $75K (amortized)</li>
            <li>Internal management: $100K</li>
            <li><strong>Total: $2.455M (4.9-12.3% of revenue)</strong></li>
          </ul>
        </div>

        <h2>Regional Cost Considerations</h2>

        <h3>Singapore Hub Strategy</h3>
        <p>For companies using Singapore as their regional hub, 4PL providers offer significant advantages. The city-state's advanced infrastructure supports sophisticated orchestration platforms, while its strategic location enables efficient distribution across Southeast Asia. TCO benefits include:</p>
        <ul>
          <li>25-30% reduction in cross-border compliance costs</li>
          <li>40% faster customs clearance through established relationships</li>
          <li>Shared infrastructure reducing per-unit costs by 15-20%</li>
        </ul>

        <h3>China Operations</h3>
        <p>China's vast market and complex regulatory environment create substantial hidden costs for in-house operations. Local expertise requirements, changing regulations, and infrastructure investments can add 30-50% to apparent costs. 4PL providers with established Chinese operations typically reduce these hidden costs by 60-70%.</p>

        <h2>Strategic Recommendations</h2>

        <h3>Choose In-House When:</h3>
        <ul>
          <li>Logistics is a core competitive differentiator</li>
          <li>Revenue exceeds $500M with stable, predictable volumes</li>
          <li>Unique product requirements demand specialized handling</li>
          <li>Long-term cost predictability outweighs flexibility needs</li>
        </ul>

        <h3>Choose 3PL When:</h3>
        <ul>
          <li>Specific functional expertise is needed</li>
          <li>Regional operations are limited to 2-3 markets</li>
          <li>Internal coordination capabilities are strong</li>
          <li>Cost is the primary decision factor</li>
        </ul>

        <h3>Choose 4PL When:</h3>
        <ul>
          <li>Rapid growth or expansion is planned</li>
          <li>Multi-market operations across East Asia</li>
          <li>Core business focus is preferred over logistics management</li>
          <li>Supply chain agility and resilience are critical</li>
          <li>Total cost optimization is more important than individual service costs</li>
        </ul>

        <h2>Conclusion</h2>
        <p>For most businesses operating in East Asia's complex, rapidly evolving logistics landscape, 4PL partnerships offer the most attractive TCO profile. The combination of reduced capital requirements, access to specialized expertise, built-in scalability, and comprehensive risk management typically delivers 15-30% lower TCO than in-house operations and 8-15% savings compared to coordinating multiple 3PLs.</p>

        <p>The key is selecting a 4PL partner with deep East Asian expertise, proven technology platforms, and a demonstrated track record of continuous optimization. As the region's e-commerce and trade volumes continue growing, the strategic value of outsourcing logistics complexity while maintaining operational excellence becomes increasingly compelling.</p>

        <blockquote>
          "The decision ultimately depends on your specific business model, growth trajectory, and strategic priorities. However, for companies focused on core business growth rather than logistics expertise development, the 4PL model increasingly represents the optimal balance of cost, capability, and strategic flexibility in the dynamic East Asian market." - Supply Chain Excellence Report 2024
        </blockquote>
      `,
      tags: ["4PL", "3PL", "TCO Analysis", "East Asia", "Cost Management", "Supply Chain Strategy"],
      relatedPosts: ["designing-exception-playbooks-shrink-wismo-30-percent"]
    },
    "designing-exception-playbooks-shrink-wismo-30-percent": {
      id: 2,
      title: "Designing Exception Playbooks that Shrink WISMO by 30%",
      slug: "designing-exception-playbooks-shrink-wismo-30-percent",
      excerpt: "Systematic approach to proactive exception management that reduces 'Where Is My Order?' inquiries while improving customer satisfaction and operational efficiency through predictive supply chain excellence.",
      author: "Operations Team",
      authorTitle: "Logistics Operations",
      readTime: "16 min read",
      category: "Operations",
      publishDate: "December 18, 2024",
      content: `
        <p>"Where Is My Order?" (WISMO) inquiries represent one of the most persistent pain points in modern e-commerce and logistics operations. These customer service requests not only strain support resources but also signal underlying supply chain visibility gaps that erode customer trust and operational efficiency. However, companies implementing systematic exception playbooks are achieving remarkable results—reducing WISMO inquiries by 30% or more while simultaneously improving customer satisfaction and operational performance.</p>

        <p>This comprehensive guide explores how to design and implement exception playbooks that proactively address supply chain disruptions before they generate customer inquiries, transforming your logistics operations from reactive firefighting to predictive excellence.</p>

        <h2>Understanding the WISMO Challenge</h2>

        <h3>The Hidden Cost of WISMO Inquiries</h3>
        <p>WISMO inquiries typically represent 20-40% of all customer service contacts for e-commerce businesses. Beyond the direct cost of handling these inquiries ($5-15 per contact), WISMO generates cascading impacts:</p>

        <ul>
          <li><strong>Customer Experience Degradation:</strong> Each WISMO inquiry represents a moment of customer anxiety and potential dissatisfaction</li>
          <li><strong>Operational Inefficiency:</strong> Support teams spend time investigating rather than resolving, often lacking real-time visibility</li>
          <li><strong>Brand Reputation Risk:</strong> Unresolved delivery uncertainty can damage customer loyalty and generate negative reviews</li>
          <li><strong>Hidden Logistics Issues:</strong> High WISMO volumes often mask underlying supply chain performance problems</li>
        </ul>

        <h3>Root Causes of WISMO</h3>
        <p>Effective exception playbooks start with understanding why customers ask "Where Is My Order?" The primary triggers include:</p>

        <p><strong>Visibility Gaps:</strong></p>
        <ul>
          <li>Lack of proactive tracking updates</li>
          <li>Generic delivery estimates without real-time adjustments</li>
          <li>Poor integration between logistics providers and customer-facing systems</li>
        </ul>

        <p><strong>Exception Events:</strong></p>
        <ul>
          <li>Weather delays affecting transportation</li>
          <li>Customs clearance issues for international shipments</li>
          <li>Carrier capacity constraints during peak periods</li>
          <li>Inventory allocation problems across multiple channels</li>
        </ul>

        <h2>The Exception Playbook Framework</h2>

        <h3>Core Components</h3>
        <p>An effective exception playbook consists of four interconnected components:</p>
        <ol>
          <li><strong>Detection Systems:</strong> Automated monitoring that identifies exceptions in real-time</li>
          <li><strong>Classification Logic:</strong> Rules that categorize exceptions by severity, customer impact, and resolution pathway</li>
          <li><strong>Response Protocols:</strong> Standardized procedures for each exception type</li>
          <li><strong>Communication Workflows:</strong> Proactive customer messaging that prevents WISMO inquiries</li>
        </ol>

        <h3>Detection Architecture</h3>
        <p><strong>Real-Time Monitoring:</strong> Modern exception detection requires integration across multiple data sources:</p>
        <ul>
          <li><strong>Carrier APIs:</strong> Direct feeds from transportation providers showing actual pickup, transit, and delivery events</li>
          <li><strong>Weather Services:</strong> Real-time weather data correlated with shipment routes</li>
          <li><strong>Port and Terminal Systems:</strong> Congestion alerts and capacity constraints for ocean freight</li>
          <li><strong>Customs Databases:</strong> Clearance status and potential delay indicators</li>
          <li><strong>Internal Systems:</strong> Inventory levels, order processing times, and fulfillment capacity</li>
        </ul>

        <h2>Playbook Design by Exception Type</h2>

        <h3>Weather-Related Delays</h3>
        <p><strong>Detection Triggers:</strong></p>
        <ul>
          <li>National Weather Service alerts affecting shipment routes</li>
          <li>Carrier advisories for specific regions</li>
          <li>Historical analysis of weather impact patterns</li>
        </ul>

        <p><strong>Automated Response Protocol:</strong></p>
        <ol>
          <li><strong>Immediate Assessment:</strong> Evaluate affected shipments and estimated delay duration</li>
          <li><strong>Customer Segmentation:</strong> Prioritize high-value customers and time-sensitive orders</li>
          <li><strong>Proactive Communication:</strong> Send personalized delay notifications within 2 hours of detection</li>
          <li><strong>Alternative Solutions:</strong> Offer expedited shipping upgrades, delivery date changes, or store pickup options</li>
          <li><strong>Compensation Logic:</strong> Automatic application of shipping refunds or service credits based on delay duration</li>
        </ol>

        <div class="bg-muted p-4 rounded-lg my-4">
          <p><strong>Communication Template:</strong></p>
          <p><em>"Hi [Customer Name],</em></p>
          <p><em>We're reaching out proactively about your order #[Order Number]. Due to severe weather in [Region], your delivery may be delayed by [X hours/days].</em></p>
          <p><em>What we're doing:</em></p>
          <p><em>• Monitoring your shipment closely<br/>
          • Working with our carrier to minimize delays<br/>
          • Will update you immediately when shipment resumes</em></p>
          <p><em>Your options:</em></p>
          <p><em>• Keep current delivery address (new estimated delivery: [Date])<br/>
          • Change to store pickup (available tomorrow)<br/>
          • Upgrade to priority delivery when weather clears</em></p>
          <p><em>We've automatically applied a shipping refund to your account. Thanks for your patience!"</em></p>
        </div>

        <h3>Customs and International Delays</h3>
        <p><strong>Detection Triggers:</strong></p>
        <ul>
          <li>Customs clearance systems showing holds or reviews</li>
          <li>Documentation completeness checks failing</li>
          <li>Duty assessment delays exceeding normal timeframes</li>
        </ul>

        <p><strong>Response Protocol:</strong></p>
        <ol>
          <li><strong>Documentation Review:</strong> Automated analysis of customs paperwork completeness</li>
          <li><strong>Broker Engagement:</strong> Immediate notification to customs brokers for intervention</li>
          <li><strong>Customer Education:</strong> Proactive explanation of customs processes and requirements</li>
          <li><strong>Alternative Fulfillment:</strong> Evaluation of domestic inventory for substitute products</li>
        </ol>

        <h2>Implementation Roadmap</h2>

        <h3>Phase 1: Foundation (Weeks 1-4)</h3>
        <p><strong>System Integration:</strong></p>
        <ul>
          <li>Connect carrier APIs for real-time tracking data</li>
          <li>Integrate weather services and external data sources</li>
          <li>Establish baseline exception detection rules</li>
          <li>Set up basic automated notification systems</li>
        </ul>

        <p><strong>Team Training:</strong></p>
        <ul>
          <li>Exception handling procedures for customer service teams</li>
          <li>Escalation protocols for complex issues</li>
          <li>Communication templates and approval workflows</li>
        </ul>

        <h3>Phase 2: Automation (Weeks 5-8)</h3>
        <p><strong>Workflow Automation:</strong></p>
        <ul>
          <li>Implement automated classification logic</li>
          <li>Deploy proactive communication systems</li>
          <li>Create self-service customer options</li>
          <li>Establish carrier escalation protocols</li>
        </ul>

        <h3>Phase 3: Optimization (Weeks 9-12)</h3>
        <p><strong>Advanced Analytics:</strong></p>
        <ul>
          <li>Predictive modeling for exception forecasting</li>
          <li>Machine learning for communication optimization</li>
          <li>A/B testing for message effectiveness</li>
          <li>ROI analysis for different intervention strategies</li>
        </ul>

        <h2>Measuring Success</h2>

        <h3>Key Performance Indicators</h3>
        <p><strong>Primary Metrics:</strong></p>
        <ul>
          <li><strong>WISMO Reduction:</strong> Target 30% decrease in inquiry volume</li>
          <li><strong>First Call Resolution:</strong> Increase to 85%+ for shipping inquiries</li>
          <li><strong>Customer Satisfaction:</strong> Maintain or improve scores despite delivery delays</li>
          <li><strong>Exception Resolution Time:</strong> Average time from detection to customer communication</li>
        </ul>

        <h3>ROI Calculation</h3>
        <p><strong>Cost Savings:</strong></p>
        <ul>
          <li>Reduced customer service volume (30% WISMO reduction × $8 average cost = $2.40 per order savings)</li>
          <li>Improved agent efficiency through better tools and information</li>
          <li>Reduced escalation and supervisor intervention requirements</li>
        </ul>

        <p><strong>Revenue Protection:</strong></p>
        <ul>
          <li>Lower cancellation rates due to proactive communication</li>
          <li>Higher customer lifetime value through improved experience</li>
          <li>Reduced negative review impact on conversion rates</li>
        </ul>

        <h2>Advanced Strategies</h2>

        <h3>Personalization at Scale</h3>
        <p><strong>Customer Segmentation:</strong></p>
        <ul>
          <li>VIP customers receive priority handling and premium alternatives</li>
          <li>Frequent buyers get personalized communication acknowledging their loyalty</li>
          <li>New customers receive educational content about shipping processes</li>
          <li>International customers get customs-specific guidance</li>
        </ul>

        <h3>Predictive Exception Management</h3>
        <p><strong>Seasonal Patterns:</strong></p>
        <ul>
          <li>Pre-position inventory before known capacity constraints</li>
          <li>Adjust delivery promises during predictable delay periods</li>
          <li>Offer alternative delivery methods proactively</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Implementing systematic exception playbooks represents a fundamental shift from reactive customer service to proactive supply chain management. Companies achieving 30% reductions in WISMO inquiries share common characteristics: comprehensive detection systems, clear response protocols, personalized customer communication, and continuous optimization based on performance data.</p>

        <p>The investment in exception playbook development typically pays for itself within 6-12 months through reduced customer service costs, improved customer satisfaction, and operational efficiency gains. More importantly, these systems create competitive advantages by transforming potential negative experiences into opportunities for customer delight and loyalty building.</p>

        <blockquote>
          "Success requires commitment to data integration, process standardization, and cultural change toward proactive customer service. However, the benefits extend far beyond WISMO reduction—creating more resilient supply chains, better customer relationships, and sustainable operational improvements that support long-term business growth."
        </blockquote>

        <p>The companies that master exception management today are building the foundation for customer experience leadership in an increasingly complex and demanding logistics environment. The question isn't whether to implement exception playbooks, but how quickly you can begin transforming your supply chain from reactive to predictive.</p>
      `,
      tags: ["WISMO", "Exception Management", "Customer Service", "Operations", "Supply Chain", "Automation"],
      relatedPosts: ["4pl-vs-3pl-vs-in-house-total-cost-ownership-comparison-east-asia"]
    }
  };

  const currentPost = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/resources/blogs">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedPosts = currentPost.relatedPosts?.map(postSlug => 
    blogPosts[postSlug as keyof typeof blogPosts]
  ).filter(Boolean) || [];

  // Generate SEO data
  const articleSchema = generateArticleSchema({
    title: currentPost.title,
    description: currentPost.excerpt,
    publishDate: currentPost.publishDate,
    slug: currentPost.slug,
    category: currentPost.category,
    readTime: currentPost.readTime
  });

  const keywords = generateKeywords(currentPost.category, currentPost.title);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={currentPost.title}
        description={currentPost.excerpt}
        keywords={keywords}
        url={`/resources/blogs/${currentPost.slug}`}
        type="article"
        article={{
          publishedTime: formatDateForSEO(currentPost.publishDate),
          section: currentPost.category,
          tags: currentPost.tags
        }}
        structuredData={articleSchema}
      />
      {/* Header */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" className="mb-6" asChild>
              <Link to="/resources/blogs">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            
            <div className="space-y-4">
              <Badge variant="secondary">{currentPost.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold font-display leading-tight">
                {currentPost.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {currentPost.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{currentPost.publishDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{currentPost.readTime}</span>
                </div>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <article className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: currentPost.content }} />
                </article>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t">
                  <h3 className="text-lg font-semibold mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentPost.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-8">
                  {/* Newsletter Signup */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="text-center space-y-4">
                        <BookOpen className="h-8 w-8 text-primary mx-auto" />
                        <h3 className="font-semibold">Get Weekly Insights</h3>
                        <p className="text-sm text-muted-foreground">
                          Join 5,000+ supply chain leaders getting actionable insights delivered weekly
                        </p>
                        <Button className="w-full" asChild>
                          <Link to="/contact">Subscribe</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Stats */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">Quick Stats</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <TrendingUp className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-semibold">18%</div>
                            <div className="text-xs text-muted-foreground">Avg cost reduction</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Users className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-semibold">500+</div>
                            <div className="text-xs text-muted-foreground">Companies helped</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Target className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-semibold">6 months</div>
                            <div className="text-xs text-muted-foreground">Avg implementation</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold font-display mb-8 text-center">Related Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.slice(0, 3).map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer" onClick={() => window.location.href = `/resources/blogs/${post.slug}`}>
                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-3">{post.category}</Badge>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                        <Button variant="ghost" size="sm" asChild>
                          <Link to={`/resources/blogs/${post.slug}`}>
                            Read More
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
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-display mb-6">
              Ready to Optimize Your Logistics?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Get expert guidance on implementing the strategies discussed in this article
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                <Link to="/resources">View All Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
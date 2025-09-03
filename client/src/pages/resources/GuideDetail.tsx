import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, BookOpen, TrendingUp, Target, Share2, CheckCircle } from 'lucide-react';
import LeadCaptureForm from "@/components/LeadCaptureForm";

const GuideDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [hasAccess, setHasAccess] = useState(false);

  // Guide data - in a real app, this would come from an API or CMS
  const guides = {
    'freight-spend-negotiation-tactics': {
      title: "Freight Spend Leaks: 10 Negotiation Tactics that Don't Hurt SLAs",
      subtitle: "Proven strategies that simultaneously drive cost reductions and maintain service quality",
      description: "Every logistics manager faces the same challenging mandate: reduce freight costs without compromising service quality. This comprehensive guide reveals ten proven negotiation strategies that plug freight spend leaks while preserving the service quality your business demands.",
      category: "Cost Management",
      readTime: "60-90 minutes",
      pages: 85,
      audience: "Logistics Managers & Procurement Teams",
      level: "Intermediate to Advanced",
      publishDate: "December 2024",
      keyBenefits: [
        "10-20% total freight cost reduction",
        "Improved carrier relationships",
        "Enhanced operational efficiency", 
        "Greater supply chain resilience"
      ],
      topics: [
        "Understanding Freight Spend Leaks & The Service Level Paradox",
        "Performance-Based Pricing with Shared Value Creation",
        "Volume Commitment Flexibility with Bandwidth Pricing",
        "Mode Optimization with Carrier Collaboration",
        "Payment Terms Optimization for Mutual Benefit",
        "Systematic Accessorial Fee Optimization",
        "Advanced Implementation Framework & Technology Integration",
        "Risk Management & Mitigation Strategies",
        "Industry-Specific Considerations",
        "Building Organizational Excellence & Long-Term Success"
      ],
      content: `
        <!-- Table of Contents -->
        <div class="bg-gradient-to-r from-muted/50 to-muted p-8 rounded-xl mb-12 border border-border/50">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2 bg-primary rounded-lg">
              <svg class="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold">Guide Navigation</h3>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            <a href="#introduction" class="flex items-center gap-2 p-3 bg-background rounded-lg hover:bg-accent transition-colors group">
              <span class="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform"></span>
              <span class="text-sm font-medium">Introduction</span>
            </a>
            <a href="#understanding-leaks" class="flex items-center gap-2 p-3 bg-background rounded-lg hover:bg-accent transition-colors group">
              <span class="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform"></span>
              <span class="text-sm font-medium">Understanding Freight Spend Leaks</span>
            </a>
            <a href="#tactic-1" class="flex items-center gap-2 p-3 bg-background rounded-lg hover:bg-accent transition-colors group">
              <span class="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform"></span>
              <span class="text-sm font-medium">Tactic 1: Performance-Based Pricing</span>
            </a>
            <a href="#tactic-2" class="flex items-center gap-2 p-3 bg-background rounded-lg hover:bg-accent transition-colors group">
              <span class="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform"></span>
              <span class="text-sm font-medium">Tactic 2: Volume Commitment Flexibility</span>
            </a>
            <a href="#tactic-3" class="flex items-center gap-2 p-3 bg-background rounded-lg hover:bg-accent transition-colors group">
              <span class="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform"></span>
              <span class="text-sm font-medium">Tactic 3: Mode Optimization</span>
            </a>
            <a href="#tactic-4" class="flex items-center gap-2 p-3 bg-background rounded-lg hover:bg-accent transition-colors group">
              <span class="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform"></span>
              <span class="text-sm font-medium">Tactic 4: Payment Terms Optimization</span>
            </a>
            <a href="#tactic-5" class="flex items-center gap-2 p-3 bg-background rounded-lg hover:bg-accent transition-colors group">
              <span class="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform"></span>
              <span class="text-sm font-medium">Tactic 5: Accessorial Fee Optimization</span>
            </a>
            <a href="#implementation" class="flex items-center gap-2 p-3 bg-background rounded-lg hover:bg-accent transition-colors group">
              <span class="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform"></span>
              <span class="text-sm font-medium">Implementation Framework</span>
            </a>
            <a href="#risk-management" class="flex items-center gap-2 p-3 bg-background rounded-lg hover:bg-accent transition-colors group">
              <span class="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform"></span>
              <span class="text-sm font-medium">Risk Management</span>
            </a>
            <a href="#industry-considerations" class="flex items-center gap-2 p-3 bg-background rounded-lg hover:bg-accent transition-colors group">
              <span class="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform"></span>
              <span class="text-sm font-medium">Industry Considerations</span>
            </a>
            <a href="#organizational-excellence" class="flex items-center gap-2 p-3 bg-background rounded-lg hover:bg-accent transition-colors group">
              <span class="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform"></span>
              <span class="text-sm font-medium">Organizational Excellence</span>
            </a>
            <a href="#conclusion" class="flex items-center gap-2 p-3 bg-background rounded-lg hover:bg-accent transition-colors group">
              <span class="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform"></span>
              <span class="text-sm font-medium">Conclusion & Next Steps</span>
            </a>
          </div>
        </div>

        <div id="introduction">
          <p>Every logistics manager faces the same challenging mandate: reduce freight costs without compromising service quality. Traditional cost-cutting approaches often create a false choice between savings and service levels, leading to damaged carrier relationships, service failures, and ultimately higher total costs. However, sophisticated procurement professionals are discovering negotiation tactics that simultaneously drive cost reductions and maintain—or even improve—service level agreements (SLAs).</p>

          <p>This comprehensive guide reveals ten proven negotiation strategies that plug freight spend leaks while preserving the service quality your business demands. These tactics focus on creating value for both parties, optimizing contract structures, and leveraging data-driven insights to achieve sustainable cost reductions.</p>
        </div>

        <div id="understanding-leaks">
          <h2>Understanding Freight Spend Leaks</h2>

          <h3>The Hidden Cost Crisis</h3>
          <p>Freight spend leaks occur when companies pay more than necessary for transportation services without receiving corresponding value. Research indicates that businesses typically overspend by 10-25% on freight costs due to:</p>

          <ul>
            <li>Suboptimal contract terms that favor carriers disproportionately</li>
            <li>Inefficient routing and mode selection that increase costs unnecessarily</li>
            <li>Poor visibility into true market rates leading to above-market pricing</li>
            <li>Inadequate performance measurement that fails to capture optimization opportunities</li>
            <li>Fragmented procurement approaches that reduce negotiating leverage</li>
          </ul>

          <h3>The Service Level Paradox</h3>
          <p>Many companies accept higher freight costs believing they ensure better service. However, analysis of thousands of transportation contracts reveals that higher prices don't automatically correlate with superior performance. In fact, well-structured contracts with performance incentives often deliver better service at lower costs than premium-priced agreements without accountability measures.</p>
        </div>

        <div id="tactic-1">
          <h2>Tactic 1: Performance-Based Pricing with Shared Value Creation</h2>

          <h3>The Strategy</h3>
          <p>Transform your pricing structure from fixed rates to performance-based models that create shared value when carriers exceed expectations while maintaining accountability when they fall short.</p>

          <h4>Implementation Framework</h4>

          <p><strong>Baseline Establishment:</strong></p>
          <ul>
            <li>Document current service performance across key metrics (on-time delivery, damage rates, communication responsiveness)</li>
            <li>Establish realistic but challenging improvement targets</li>
            <li>Define measurement methodologies and reporting frequency</li>
          </ul>

          <p><strong>Shared Value Structure:</strong> The key to performance-based pricing is understanding that exceptional carrier performance creates measurable value for shippers that can be shared as incentives.</p>

          <p><strong>Value Creation from Superior Performance:</strong> When carriers exceed baseline performance, they generate real savings for shippers:</p>
          <ul>
            <li>Reduced exception handling costs: Fewer customer service calls, less expediting</li>
            <li>Lower inventory requirements: More predictable delivery enables reduced safety stock</li>
            <li>Improved customer satisfaction: Fewer complaints, higher retention rates</li>
            <li>Decreased administrative burden: Less tracking, fewer escalations</li>
            <li>Enhanced operational efficiency: More predictable operations reduce planning complexity</li>
          </ul>

          <h4>Tiered Performance Structure:</h4>

          <div class="bg-muted p-4 rounded-lg my-6">
            <h5><strong>Tier 1 Performance (95% on-time): Standard contracted rates</strong></h5>
            <ul class="text-sm">
              <li>Meets minimum acceptable performance</li>
              <li>Carrier receives agreed-upon market rates</li>
            </ul>
          </div>

          <div class="bg-muted p-4 rounded-lg my-6">
            <h5><strong>Tier 2 Performance (97%+ on-time): 2-3% rate reduction with enhanced partnership benefits</strong></h5>
            <ul class="text-sm">
              <li>Rate reduction represents sharing of operational savings generated</li>
              <li>Carrier receives increased volume allocation (15-20% more business)</li>
              <li>Priority status during capacity constraints</li>
              <li>Streamlined billing and payment processes</li>
            </ul>
          </div>

          <div class="bg-muted p-4 rounded-lg my-6">
            <h5><strong>Tier 3 Performance (99%+ on-time): 5% rate reduction plus strategic partnership status</strong></h5>
            <ul class="text-sm">
              <li>Maximum rate sharing reflecting exceptional value creation</li>
              <li>Guaranteed volume commitments (25-30% increase)</li>
              <li>Joint process improvement initiatives</li>
              <li>Preferred customer status with dedicated account management</li>
              <li>Long-term contract extensions with favorable terms</li>
            </ul>
          </div>

          <div class="bg-red-50 p-4 rounded-lg my-6">
            <h5><strong>Below Baseline Performance (Below 95%): Rate penalties and improvement requirements</strong></h5>
            <ul class="text-sm">
              <li>1-2% rate penalty reflecting increased operational costs</li>
              <li>Mandatory improvement plan within 30 days</li>
              <li>Potential volume reduction until performance recovers</li>
            </ul>
          </div>

          <h4>Why This Works: The Total Value Equation</h4>

          <p><strong>For Carriers:</strong> While unit rates may decrease at higher performance levels, total revenue and profitability increase through:</p>
          <ul>
            <li>Volume Growth: Higher performance earns 15-30% more business</li>
            <li>Operational Efficiency: Better performing carriers typically have lower costs</li>
            <li>Reduced Admin Costs: Streamlined processes with high-performing customers</li>
            <li>Strategic Partnerships: Long-term relationships provide revenue stability</li>
            <li>Market Reputation: Performance recognition enhances competitive position</li>
          </ul>

          <p><strong>For Shippers:</strong></p>
          <ul>
            <li>Lower Total Costs: Rate reductions plus operational savings</li>
            <li>Superior Service: Incentivized continuous improvement</li>
            <li>Predictable Operations: Reduced variability and exceptions</li>
            <li>Competitive Advantage: More reliable logistics enables better customer service</li>
          </ul>

          <div class="bg-blue-50 p-4 rounded-lg my-6">
            <h5><strong>Contract Language Example:</strong></h5>
            <p class="text-sm italic">"Carrier shall maintain minimum 95% on-time delivery performance measured monthly. Performance exceeding 97% earns 2% rate reduction plus 15% volume increase allocation in subsequent month. Performance exceeding 99% earns 5% rate reduction plus preferred customer status and guaranteed capacity allocation. Performance below 93% triggers 1% rate penalty and mandatory improvement plan within 30 days."</p>
          </div>

          <h4>Implementation Process</h4>

          <p><strong>Phase 1: Performance Analysis (Month 1)</strong></p>
          <ul>
            <li>Establish baseline performance metrics across all carriers</li>
            <li>Calculate current operational costs related to service failures</li>
            <li>Identify value creation opportunities from improved performance</li>
          </ul>

          <p><strong>Phase 2: Carrier Engagement (Month 2)</strong></p>
          <ul>
            <li>Present shared value proposition to key carriers</li>
            <li>Negotiate specific performance tiers and benefits</li>
            <li>Establish measurement systems and reporting protocols</li>
          </ul>

          <p><strong>Phase 3: Pilot Implementation (Months 3-6)</strong></p>
          <ul>
            <li>Launch performance-based pricing with select carriers</li>
            <li>Monitor service levels and cost impacts</li>
            <li>Refine structure based on results</li>
          </ul>

          <p><strong>Phase 4: Full Rollout (Months 7-12)</strong></p>
          <ul>
            <li>Extend to all major carrier relationships</li>
            <li>Integrate with broader procurement strategy</li>
            <li>Establish long-term improvement targets</li>
          </ul>

          <h4>Results Achieved</h4>
          <p>Companies implementing this shared value approach typically see:</p>
          <ul>
            <li>8-15% reduction in effective transportation costs through combined rate reductions and operational savings</li>
            <li>12-20% improvement in on-time delivery performance driven by aligned incentives</li>
            <li>Stronger carrier partnerships focused on mutual success rather than adversarial negotiations</li>
            <li>Reduced administrative burden through fewer exceptions and smoother operations</li>
            <li>Enhanced competitive advantage through superior logistics reliability</li>
          </ul>

          <p>This performance-based approach transforms traditional carrier relationships from transactional negotiations to strategic partnerships where both parties benefit from operational excellence. The key insight is that exceptional service performance creates real, measurable value that can be shared to incentivize continuous improvement while reducing total logistics costs.</p>
        </div>

        <div id="tactic-2">
          <h2>Tactic 2: Volume Commitment Flexibility with Bandwidth Pricing</h2>

          <h3>The Strategy</h3>
          <p>Negotiate volume commitments with built-in flexibility that protects against market volatility while securing volume-based discounts without the traditional risks of fixed commitments.</p>

          <h3>Bandwidth Structure Design</h3>

          <p><strong>Traditional Approach Problems:</strong></p>
          <ul>
            <li>Fixed annual commitments that penalize business growth or contraction</li>
            <li>All-or-nothing volume tiers that create cliff effects</li>
            <li>Seasonal variations that don't align with commitment periods</li>
            <li>Risk transfer entirely to shipper regardless of market conditions</li>
          </ul>

          <p><strong>Improved Bandwidth Model:</strong> Rather than rigid volume commitments, create flexible bandwidth structures that share risk appropriately:</p>

          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-muted p-4 rounded-lg">
              <h5><strong>Core Volume (60% of forecast):</strong> Guaranteed commitment with best rates</h5>
              <ul class="text-sm">
                <li>Shipper commits to minimum baseline volume</li>
                <li>Carrier provides most competitive pricing tier</li>
                <li>Both parties have predictable foundation</li>
              </ul>
            </div>
            
            <div class="bg-muted p-4 rounded-lg">
              <h5><strong>Flex Volume (20-40% variance band):</strong> Floating rates based on actual volume</h5>
              <ul class="text-sm">
                <li>Volume between 80-120% of core maintains contracted rates</li>
                <li>Reflects normal business variability</li>
                <li>No penalties for reasonable fluctuations</li>
              </ul>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h5><strong>Growth Volume (120-150% of core):</strong> Graduated discounts for higher volumes</h5>
              <ul class="text-sm">
                <li>Additional volume receives enhanced discounts</li>
                <li>Rewards business growth with better economics</li>
                <li>Incentivizes carrier to support expansion</li>
              </ul>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h5><strong>Surge Capacity (Above 150%):</strong> Premium rates but guaranteed capacity</h5>
              <ul class="text-sm">
                <li>Emergency or exceptional volume needs</li>
                <li>Higher rates reflect carrier capacity strain</li>
                <li>Guaranteed availability when critically needed</li>
              </ul>
            </div>
          </div>

          <div class="bg-orange-50 p-4 rounded-lg my-6">
            <h5><strong>Contraction Protection (Below 80%):</strong> Modest rate adjustments</h5>
            <ul class="text-sm">
              <li>Small rate increase (2-3%) for significantly lower volumes</li>
              <li>Much less than traditional shortfall penalties</li>
              <li>Maintains relationship during difficult periods</li>
            </ul>
          </div>

          <h4>Contract Provisions</h4>

          <div class="bg-blue-50 p-4 rounded-lg my-6">
            <h5><strong>Volume Flexibility Clause:</strong></h5>
            <p class="text-sm italic">"Annual volume commitment of [X] shipments represents expected core volume. Actual volumes within 80-120% of commitment maintain contracted rates. Volumes between 60-80% of commitment incur 2% rate adjustment. Volumes between 120-150% of commitment receive additional 2% discount. Volumes above 150% receive guaranteed capacity at 110% of standard rates."</p>
          </div>

          <h4>Implementation Benefits</h4>

          <p><strong>Risk Management:</strong></p>
          <ul>
            <li>Reduced financial exposure during market downturns</li>
            <li>Protection against demand volatility</li>
            <li>Shared risk model that's fair to both parties</li>
          </ul>

          <p><strong>Growth Enablement:</strong></p>
          <ul>
            <li>Maintained rate advantages during expansion periods</li>
            <li>Carrier incentive to support business growth</li>
            <li>Scalable structure that adapts to success</li>
          </ul>

          <p><strong>Operational Advantages:</strong></p>
          <ul>
            <li>Improved forecast accuracy through data sharing</li>
            <li>Enhanced carrier capacity planning leading to better service</li>
            <li>Reduced procurement complexity and negotiation frequency</li>
          </ul>

          <p><strong>Financial Predictability:</strong></p>
          <ul>
            <li>More accurate budgeting through reduced volatility</li>
            <li>Clear understanding of rate impacts for different scenarios</li>
            <li>Shared upside and downside protection</li>
          </ul>
        </div>

        <div id="tactic-3">
          <h2>Tactic 3: Mode Optimization with Carrier Collaboration</h2>

          <h3>The Strategy</h3>
          <p>Collaborate with carriers to identify opportunities for mode shifts and routing optimizations that reduce costs while maintaining or improving transit times through joint analysis and shared savings.</p>

          <h3>Analysis Framework</h3>

          <p><strong>Current State Assessment:</strong> Create comprehensive visibility into shipping patterns and optimization opportunities:</p>

          <p><strong>Shipment Analysis:</strong></p>
          <ul>
            <li>Audit all shipments by lane, frequency, and service requirements</li>
            <li>Map current mode utilization against actual timing needs</li>
            <li>Identify time-insensitive shipments using premium services</li>
            <li>Analyze seasonal patterns and volume fluctuations</li>
          </ul>

          <p><strong>Cost-Service Modeling:</strong></p>
          <ul>
            <li>Compare total cost across different mode combinations</li>
            <li>Factor in inventory carrying costs for longer transit times</li>
            <li>Include handling costs and damage risk by mode</li>
            <li>Calculate true door-to-door economics</li>
          </ul>

          <h3>Optimization Opportunities</h3>

          <p><strong>LTL Consolidation Programs:</strong> Transform multiple small shipments into cost-effective full truckloads:</p>

          <div class="bg-muted p-4 rounded-lg my-6">
            <h5><strong>Weekly/Bi-weekly Consolidation:</strong></h5>
            <ul class="text-sm">
              <li>Combine frequent LTL shipments to same destinations</li>
              <li>30-50% cost savings compared to individual LTL rates</li>
              <li>Maintain acceptable service levels through scheduled deliveries</li>
              <li>Reduce handling points and damage risk</li>
            </ul>
          </div>

          <div class="bg-green-50 p-4 rounded-lg my-6">
            <h5><strong>Intermodal Integration:</strong> Leverage rail networks for cost-effective long-haul transportation</h5>
            <ul class="text-sm">
              <li>500+ mile lanes with 5+ day transit tolerance</li>
              <li>20-40% cost savings compared to over-the-road trucking</li>
              <li>Enhanced sustainability profile for corporate initiatives</li>
              <li>Capacity availability during truck driver shortages</li>
            </ul>
          </div>
        </div>

        <div id="tactic-4">
          <h2>Tactic 4: Payment Terms Optimization for Mutual Benefit</h2>

          <h3>The Strategy</h3>
          <p>Leverage payment timing as a strategic negotiation tool to secure rate reductions while optimizing cash flow for both parties through creative payment structures that recognize the time value of money.</p>

          <h3>Understanding the Payment-Rate Relationship</h3>

          <p><strong>Carrier Cash Flow Reality:</strong> Most carriers, especially smaller and mid-sized operators, face significant cash flow challenges:</p>
          <ul>
            <li>Fuel costs paid immediately while customer payments come 30-60 days later</li>
            <li>Driver payroll every week regardless of payment timing</li>
            <li>Equipment financing and insurance payments on fixed schedules</li>
            <li>Working capital constraints that limit growth and efficiency investments</li>
          </ul>

          <h3>Payment Structure Options</h3>

          <div class="bg-blue-50 p-4 rounded-lg my-6">
            <h5><strong>Early Payment Discount Programs:</strong></h5>
            <ul class="text-sm">
              <li>10-day payment: 2.5-3% discount (effective annual rate of 30-45%)</li>
              <li>15-day payment: 1.5-2% discount (effective annual rate of 18-24%)</li>
              <li>20-day payment: 1% discount (effective annual rate of 12-18%)</li>
              <li>Standard net 30: Baseline contracted rates</li>
            </ul>
          </div>

          <h3>Expected Results</h3>
          <ul>
            <li>3-8% effective rate reduction through payment optimization</li>
            <li>Improved cash flow predictability through structured programs</li>
            <li>Enhanced carrier relationships through financial partnership approach</li>
            <li>Competitive advantage in carrier allocation and service priority</li>
          </ul>
        </div>

        <div id="tactic-5">
          <h2>Tactic 5: Systematic Accessorial Fee Optimization</h2>

          <h3>The Strategy</h3>
          <p>Transform accessorial charges from profit centers for carriers into opportunities for shared savings through systematic analysis, process improvement, and strategic restructuring that eliminates unnecessary fees while preserving essential services.</p>

          <h3>Understanding Accessorial Fee Impact</h3>

          <p><strong>The Hidden Cost Reality:</strong> Accessorial charges often represent 15-30% of total freight costs but receive minimal attention during negotiations:</p>

          <ul>
            <li>Fuel surcharges: Can add 10-25% to base rates depending on market conditions</li>
            <li>Detention and demurrage: Average $50-150 per occurrence across thousands of shipments</li>
            <li>Address corrections: $10-25 per incident for data quality issues</li>
            <li>Residential delivery: $3-8 per shipment for home delivery</li>
            <li>Redelivery attempts: $15-40 per failed delivery attempt</li>
            <li>Special handling: Various fees for non-standard requirements</li>
          </ul>

          <h3>Strategic Restructuring Approaches</h3>

          <p><strong>All-Inclusive Pricing Models:</strong> Convert unpredictable accessorial fees into predictable base rate adjustments:</p>

          <div class="bg-green-50 p-4 rounded-lg my-6">
            <h5><strong>Fuel Surcharge Integration Example:</strong></h5>
            <p class="text-sm"><strong>Traditional Structure:</strong> Base Rate: $1,500 + Fuel Surcharge: $225 + Detention Risk: $75 = $1,800 Total</p>
            <p class="text-sm"><strong>Restructured Rate:</strong> Consolidated Rate: $1,720 with fuel price protection capped at $1,750</p>
            <p class="text-sm"><strong>Net Savings:</strong> $80 per shipment (4.4% reduction)</p>
          </div>

          <h3>Expected Results</h3>
          <ul>
            <li>25-40% reduction in total accessorial charges through optimization</li>
            <li>15-25% reduction in accessorial rates through negotiation</li>
            <li>5-8% reduction in total freight costs through accessorial optimization</li>
            <li>Improved budget predictability through all-inclusive pricing models</li>
          </ul>
        </div>

        <div id="implementation">
          <h2>Advanced Implementation Framework</h2>

          <h3>Organizational Readiness Assessment</h3>

          <p><strong>Internal Capability Evaluation:</strong> Before implementing these tactics, organizations must assess their readiness for sophisticated freight optimization:</p>

          <p><strong>Data Infrastructure:</strong></p>
          <ul>
            <li>System Integration: Ability to capture and analyze transportation data across all modes and carriers</li>
            <li>Performance Measurement: Existing capabilities for tracking service levels and cost metrics</li>
            <li>Reporting Tools: Dashboard and analytics capabilities for ongoing monitoring</li>
            <li>Technology Resources: Internal expertise for system implementation and maintenance</li>
          </ul>

          <p><strong>Team Capabilities:</strong></p>
          <ul>
            <li>Procurement Expertise: Staff experience with complex transportation negotiations</li>
            <li>Analytical Skills: Ability to perform cost-benefit analysis and market benchmarking</li>
            <li>Relationship Management: Experience managing strategic carrier partnerships</li>
            <li>Change Management: Capability to implement new processes and drive adoption</li>
          </ul>
        </div>

        <div id="risk-management">
          <h2>Risk Management and Mitigation</h2>

          <h3>Operational Risk Management</h3>

          <p><strong>Service Level Protection:</strong></p>
          <ul>
            <li>Performance Monitoring: Real-time tracking of service levels during optimization</li>
            <li>Backup Plans: Alternative carriers and services for critical shipments</li>
            <li>Emergency Procedures: Escalation processes for service failures or disruptions</li>
            <li>Customer Communication: Proactive updates during any service impacts</li>
          </ul>

          <p><strong>Financial Risk Controls:</strong></p>
          <ul>
            <li>Cost Validation: Regular verification of savings and cost reductions</li>
            <li>Budget Management: Careful tracking of implementation costs and ROI</li>
            <li>Contract Protection: Legal safeguards in carrier agreements and partnerships</li>
            <li>Market Volatility: Strategies for managing rate fluctuations and capacity changes</li>
          </ul>
        </div>

        <div id="industry-considerations">
          <h2>Industry-Specific Considerations</h2>

          <h3>E-commerce and Retail</h3>
          <ul>
            <li>Seasonal Variations: Peak season capacity management and cost control</li>
            <li>Last-Mile Complexity: Urban delivery challenges and customer expectations</li>
            <li>Returns Management: Reverse logistics optimization and cost allocation</li>
            <li>Multi-Channel Integration: Coordination across online, retail, and marketplace channels</li>
          </ul>

          <h3>Manufacturing and Industrial</h3>
          <ul>
            <li>Just-in-Time Requirements: Precise timing and reliability for production schedules</li>
            <li>Heavy and Oversized Freight: Specialized equipment and handling requirements</li>
            <li>Regulatory Compliance: Hazmat, environmental, and safety considerations</li>
            <li>Global Supply Chains: International logistics coordination and optimization</li>
          </ul>

          <h3>Healthcare and Pharmaceuticals</h3>
          <ul>
            <li>Temperature Control: Cold chain management and specialized equipment</li>
            <li>Regulatory Requirements: FDA compliance and documentation requirements</li>
            <li>Emergency Deliveries: Critical shipment prioritization and expedited services</li>
            <li>Security Protocols: Chain of custody and theft prevention measures</li>
          </ul>
        </div>

        <div id="organizational-excellence">
          <h2>Building Organizational Excellence</h2>

          <h3>Center of Excellence Development</h3>

          <p><strong>Core Competencies:</strong></p>
          <ul>
            <li>Market Intelligence: Continuous monitoring of transportation markets and trends</li>
            <li>Analytical Capabilities: Advanced data analysis and optimization modeling</li>
            <li>Relationship Management: Strategic partnership development and maintenance</li>
            <li>Technology Innovation: Adoption and integration of emerging logistics technologies</li>
          </ul>

          <p><strong>Knowledge Management:</strong></p>
          <ul>
            <li>Best Practices Documentation: Systematic capture and sharing of successful strategies</li>
            <li>Training Programs: Ongoing education for procurement and operations teams</li>
            <li>Industry Participation: Active engagement with transportation industry organizations</li>
            <li>Benchmarking Studies: Regular comparison with industry leaders and best practices</li>
          </ul>

          <h3>Measuring Long-Term Success</h3>

          <p><strong>Comprehensive KPI Framework:</strong></p>

          <p><strong>Financial Performance:</strong></p>
          <ul>
            <li>Total Cost Reduction: Year-over-year improvement in freight spend efficiency</li>
            <li>Cost per Unit: Freight cost as percentage of revenue or unit shipped</li>
            <li>Budget Accuracy: Variance between projected and actual transportation costs</li>
            <li>ROI Achievement: Return on investment from optimization initiatives</li>
          </ul>

          <p><strong>Service Excellence:</strong></p>
          <ul>
            <li>On-Time Performance: Consistent delivery reliability across all carriers</li>
            <li>Damage and Loss Rates: Protection of freight integrity during transportation</li>
            <li>Customer Satisfaction: Internal and external customer feedback on logistics performance</li>
            <li>Problem Resolution Time: Efficiency in handling exceptions and service issues</li>
          </ul>
        </div>

        <div id="conclusion">
          <h2>Conclusion & Next Steps</h2>

          <p>Successful freight cost reduction without service level compromise requires a sophisticated approach that goes beyond simple rate negotiations. The tactics outlined in this guide provide a comprehensive framework for achieving sustainable cost savings while maintaining or improving service quality through strategic partnerships and operational excellence.</p>

          <p>The key principles underlying all successful freight optimization initiatives include:</p>
          <ul>
            <li><strong>Mutual Value Creation:</strong> The most sustainable cost reductions come from strategies that benefit both shippers and carriers, creating long-term partnerships rather than short-term wins.</li>
            <li><strong>Data-Driven Decision Making:</strong> Successful optimization requires comprehensive analysis of costs, performance, and opportunities, with decisions based on facts rather than assumptions.</li>
            <li><strong>Process Integration:</strong> Cost reduction tactics must be integrated with operational improvements that address root causes rather than just symptoms.</li>
            <li><strong>Performance Accountability:</strong> All cost reduction initiatives must include robust measurement and monitoring to ensure service levels are maintained or improved.</li>
            <li><strong>Continuous Improvement:</strong> The most successful companies treat freight optimization as an ongoing process rather than a one-time project.</li>
          </ul>

          <p>Companies implementing these strategies typically achieve:</p>
          <ul>
            <li>10-20% total freight cost reduction while maintaining service quality</li>
            <li>Improved carrier relationships that provide competitive advantages</li>
            <li>Enhanced operational efficiency that supports business growth</li>
            <li>Greater supply chain resilience through strategic partnerships</li>
          </ul>

          <p>The transformation from tactical freight buying to strategic logistics optimization represents a fundamental shift in how organizations approach transportation management. Companies that successfully implement these sophisticated tactics don't just achieve cost savings—they build sustainable competitive advantages that support long-term business success.</p>

          <blockquote class="border-l-4 border-primary pl-4 italic my-6 text-lg">
            "The companies that embrace these sophisticated approaches today are building the foundation for sustained competitive advantage in an increasingly complex and demanding logistics environment. The question isn't whether to implement these strategies, but how quickly your organization can begin the transformation toward freight procurement excellence."
          </blockquote>

          <p>The roadmap is clear, the tools are available, and the benefits are proven. The time for action is now—before your competitors gain the advantages that sophisticated freight optimization provides.</p>

          <div class="bg-primary text-primary-foreground p-8 rounded-xl my-12 text-center">
            <h3 class="text-2xl font-bold mb-4">Ready to Transform Your Freight Procurement?</h3>
            <p class="text-lg mb-6">Our team specializes in implementing these advanced optimization tactics that deliver measurable results while strengthening carrier partnerships and ensuring service excellence.</p>
            <a href="/contact" class="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">Get Started Today</a>
          </div>
        </div>
      `,
      tags: ["Freight Negotiation", "Cost Optimization", "Carrier Management", "Supply Chain", "Procurement", "SLA Management"]
    }
  };

  const currentGuide = guides[slug as keyof typeof guides];

  if (!currentGuide) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Guide Not Found</h1>
          <p className="text-muted-foreground mb-6">The guide you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/resources/guides">Back to Guides</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Show lead capture form first
  if (!hasAccess) {
    return (
      <div className="min-h-screen bg-background">
        <section className="py-8 bg-muted/30 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Button variant="ghost" className="mb-6" asChild>
                <Link to="/resources/guides">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Strategic Guides
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <LeadCaptureForm
                title={`Access: ${currentGuide.title}`}
                description={`Get instant access to this comprehensive ${currentGuide.pages}-page strategic guide with proven negotiation tactics and implementation frameworks.`}
                resourceType="guide"
                downloadText="Access Guide Now"
                onSubmit={(data) => {
                  console.log('Lead captured:', data);
                  setHasAccess(true);
                }}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Button variant="ghost" className="mb-6" asChild>
              <Link to="/resources/guides">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Strategic Guides
              </Link>
            </Button>
            
            <div className="space-y-6">
              <Badge variant="secondary">{currentGuide.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold font-display leading-tight">
                {currentGuide.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {currentGuide.subtitle}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {currentGuide.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <article className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: currentGuide.content }} />
                </article>

                {/* Topics Covered */}
                <div className="mt-12 pt-8 border-t">
                  <h3 className="text-lg font-semibold mb-4">Topics Covered in This Guide</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {currentGuide.topics.map((topic, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-8 pt-8 border-t">
                  <h3 className="text-lg font-semibold mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentGuide.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Guide Information */}
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <h3 className="font-semibold">Guide Information</h3>
                      
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{currentGuide.readTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                          <span>{currentGuide.pages} pages</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{currentGuide.audience}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Target className="h-4 w-4 text-muted-foreground" />
                          <span>{currentGuide.level}</span>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <h4 className="font-semibold mb-3">Key Benefits</h4>
                        <div className="space-y-2">
                          {currentGuide.keyBenefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-6 border-t mt-6">
                        <Button className="w-full h-12 text-sm" asChild>
                          <Link to="/contact" className="flex items-center justify-center gap-2">
                            <Target className="h-4 w-4" />
                            Get Implementation Support
                          </Link>
                        </Button>
                        <p className="text-xs text-muted-foreground mt-3 text-center leading-relaxed">
                          Connect with our experts for personalized guidance
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Share */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="text-center space-y-4">
                        <Share2 className="h-6 w-6 text-primary mx-auto" />
                        <h4 className="font-semibold">Share This Guide</h4>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            LinkedIn
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            Email
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Stats */}
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-4">Expected Results</h4>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <TrendingUp className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-semibold">10-20%</div>
                            <div className="text-xs text-muted-foreground">Cost reduction</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Target className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-semibold">6-12 months</div>
                            <div className="text-xs text-muted-foreground">Implementation time</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Users className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-semibold">Improved</div>
                            <div className="text-xs text-muted-foreground">Carrier relationships</div>
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

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-display mb-6">
              Ready to Implement These Tactics?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Get expert guidance on implementing these freight optimization strategies in your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Schedule Strategy Session</Link>
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

export default GuideDetail;
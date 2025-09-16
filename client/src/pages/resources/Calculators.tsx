import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageSEO from '@/components/PageSEO';
import { ArrowRight, Calculator, DollarSign, TrendingUp, Package, Truck, BarChart3, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import LeadCaptureForm from "@/components/LeadCaptureForm";

const Calculators = () => {
  const [roiInputs, setRoiInputs] = useState({
    monthlyLogisticsSpend: '',
    shipmentVolume: '',
    averageShipmentCost: '',
    onTimePercentage: '',
    warehouseCosts: ''
  });

  const [savingsInputs, setSavingsInputs] = useState({
    currentFreightSpend: '',
    numberOfCarriers: '',
    manualProcessTime: '',
    employeeCost: ''
  });

  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [selectedCalculator, setSelectedCalculator] = useState<any>(null);

  const handleDetailedAnalysisClick = (calculatorType: string) => {
    const calculatorData = calculators.find(calc => calc.id === calculatorType);
    setSelectedCalculator(calculatorData);
    setShowLeadCapture(true);
  };

  const calculators = [
    {
      id: 'roi-calculator',
      title: "4PL ROI Calculator",
      description: "Calculate potential return on investment from outsourcing to a 4PL provider",
      icon: DollarSign,
      benefits: ["Cost savings projection", "ROI timeline", "Break-even analysis", "Total value calculation"],
      metrics: ["15-25% typical cost reduction", "6-12 month payback period", "3-5x ROI in year one"]
    },
    {
      id: 'freight-savings',
      title: "Freight Cost Savings Calculator",
      description: "Estimate savings from transportation procurement optimization",
      icon: Truck,
      benefits: ["Annual savings estimate", "Cost per shipment reduction", "Carrier optimization impact", "Route efficiency gains"],
      metrics: ["10-20% freight cost reduction", "5-15% faster delivery times", "30% reduction in carrier management"]
    },
    {
      id: 'automation-value',
      title: "Automation Value Calculator",
      description: "Quantify the value of automating manual logistics processes",
      icon: BarChart3,
      benefits: ["Time savings calculation", "Error reduction value", "Productivity improvement", "Staff reallocation potential"],
      metrics: ["60-80% reduction in manual work", "90% fewer processing errors", "40% faster order fulfillment"]
    },
    {
      id: 'inventory-optimization',
      title: "Inventory Optimization Calculator",
      description: "Calculate working capital improvements from better inventory management",
      icon: Package,
      benefits: ["Inventory reduction potential", "Carrying cost savings", "Stockout risk assessment", "Cash flow improvement"],
      metrics: ["20-30% inventory reduction", "15-25% carrying cost savings", "95% service level maintenance"]
    }
  ];

  const calculateROI = () => {
    const monthlySpend = parseFloat(roiInputs.monthlyLogisticsSpend) || 0;
    const annualSpend = monthlySpend * 12;
    const potentialSavings = annualSpend * 0.20; // 20% average savings
    const implementationCost = annualSpend * 0.05; // 5% implementation cost
    const netSavings = potentialSavings - implementationCost;
    const roi = (netSavings / implementationCost) * 100;
    
    return {
      annualSpend,
      potentialSavings,
      implementationCost,
      netSavings,
      roi,
      paybackMonths: Math.round((implementationCost / (potentialSavings / 12)) * 10) / 10
    };
  };

  const calculateFreightSavings = () => {
    const annualFreightSpend = parseFloat(savingsInputs.currentFreightSpend) || 0;
    const carriers = parseInt(savingsInputs.numberOfCarriers) || 1;
    const manualHours = parseFloat(savingsInputs.manualProcessTime) || 0;
    const hourlyRate = parseFloat(savingsInputs.employeeCost) || 0;
    
    const freightSavings = annualFreightSpend * 0.15; // 15% freight savings
    const laborSavings = manualHours * hourlyRate * 52; // Weekly hours * rate * weeks
    const carrierManagementSavings = carriers * 5000; // $5k per carrier management cost
    const totalSavings = freightSavings + laborSavings + carrierManagementSavings;
    
    return {
      freightSavings,
      laborSavings,
      carrierManagementSavings,
      totalSavings
    };
  };

  const roiResults = calculateROI();
  const savingsResults = calculateFreightSavings();

  return (
    <div className="min-h-screen bg-background">
      <PageSEO page="resourcesCalculators" />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 text-base px-4 py-2">
              ROI Calculators
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
              Calculate Your Logistics ROI
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Quantify the value and savings potential of optimizing your supply chain
            </p>
            <Button size="xl" variant="secondary" asChild>
              <Link to="#calculators">Start Calculating</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Calculator Overview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Value Calculation Tools
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Professional-grade calculators to quantify logistics improvements and business value
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {calculators.map((calc, index) => (
                <Card key={calc.id} className="text-center hover:shadow-medium transition-shadow">
                  <CardContent className="p-6">
                    <calc.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3">{calc.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{calc.description}</p>
                    <div className="space-y-2">
                      {calc.metrics.map((metric, metricIndex) => (
                        <Badge key={metricIndex} variant="outline" className="text-xs">
                          {metric}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Calculators */}
      <section id="calculators" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Interactive Calculators
              </h2>
              <p className="text-xl text-muted-foreground">
                Enter your data to get personalized ROI and savings calculations
              </p>
            </div>
            
            <Tabs defaultValue="roi" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
                <TabsTrigger value="roi">4PL ROI</TabsTrigger>
                <TabsTrigger value="freight">Freight Savings</TabsTrigger>
                <TabsTrigger value="automation">Automation</TabsTrigger>
                <TabsTrigger value="inventory">Inventory</TabsTrigger>
              </TabsList>
              
              <TabsContent value="roi" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calculator className="h-5 w-5" />
                        4PL ROI Calculator
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="monthlySpend">Monthly Logistics Spend ($)</Label>
                        <Input
                          id="monthlySpend"
                          type="number"
                          placeholder="100,000"
                          value={roiInputs.monthlyLogisticsSpend}
                          onChange={(e) => setRoiInputs({...roiInputs, monthlyLogisticsSpend: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="shipmentVolume">Monthly Shipment Volume</Label>
                        <Input
                          id="shipmentVolume"
                          type="number"
                          placeholder="1,000"
                          value={roiInputs.shipmentVolume}
                          onChange={(e) => setRoiInputs({...roiInputs, shipmentVolume: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="averageCost">Average Shipment Cost ($)</Label>
                        <Input
                          id="averageCost"
                          type="number"
                          placeholder="50"
                          value={roiInputs.averageShipmentCost}
                          onChange={(e) => setRoiInputs({...roiInputs, averageShipmentCost: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="onTime">Current On-Time Delivery (%)</Label>
                        <Input
                          id="onTime"
                          type="number"
                          placeholder="85"
                          value={roiInputs.onTimePercentage}
                          onChange={(e) => setRoiInputs({...roiInputs, onTimePercentage: e.target.value})}
                        />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5" />
                        ROI Results
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-muted rounded-lg">
                          <div className="text-2xl font-bold text-primary">${roiResults.potentialSavings.toLocaleString()}</div>
                          <div className="text-sm text-muted-foreground">Annual Savings</div>
                        </div>
                        <div className="text-center p-4 bg-muted rounded-lg">
                          <div className="text-2xl font-bold text-secondary">{roiResults.roi.toFixed(0)}%</div>
                          <div className="text-sm text-muted-foreground">ROI</div>
                        </div>
                        <div className="text-center p-4 bg-muted rounded-lg">
                          <div className="text-2xl font-bold text-accent">{roiResults.paybackMonths}</div>
                          <div className="text-sm text-muted-foreground">Months to Payback</div>
                        </div>
                        <div className="text-center p-4 bg-muted rounded-lg">
                          <div className="text-2xl font-bold text-primary">${roiResults.netSavings.toLocaleString()}</div>
                          <div className="text-sm text-muted-foreground">Net Benefit</div>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-primary/5 rounded-lg">
                        <h4 className="font-semibold mb-2">Key Assumptions:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• 20% average cost reduction</li>
                          <li>• 5% implementation investment</li>
                          <li>• 12-month implementation timeline</li>
                          <li>• Includes technology and process optimization</li>
                        </ul>
                      </div>
                      
                      <Button 
                        className="w-full" 
                        size="lg" 
                        onClick={() => handleDetailedAnalysisClick('roi-calculator')}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Get Detailed ROI Analysis
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="freight" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Truck className="h-5 w-5" />
                        Freight Savings Calculator
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="freightSpend">Annual Freight Spend ($)</Label>
                        <Input
                          id="freightSpend"
                          type="number"
                          placeholder="500,000"
                          value={savingsInputs.currentFreightSpend}
                          onChange={(e) => setSavingsInputs({...savingsInputs, currentFreightSpend: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="carriers">Number of Carriers</Label>
                        <Input
                          id="carriers"
                          type="number"
                          placeholder="15"
                          value={savingsInputs.numberOfCarriers}
                          onChange={(e) => setSavingsInputs({...savingsInputs, numberOfCarriers: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="manualTime">Manual Process Hours/Week</Label>
                        <Input
                          id="manualTime"
                          type="number"
                          placeholder="20"
                          value={savingsInputs.manualProcessTime}
                          onChange={(e) => setSavingsInputs({...savingsInputs, manualProcessTime: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="employeeCost">Average Employee Cost/Hour ($)</Label>
                        <Input
                          id="employeeCost"
                          type="number"
                          placeholder="35"
                          value={savingsInputs.employeeCost}
                          onChange={(e) => setSavingsInputs({...savingsInputs, employeeCost: e.target.value})}
                        />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5" />
                        Savings Breakdown
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                          <span className="text-sm">Freight Cost Optimization</span>
                          <span className="font-semibold">${savingsResults.freightSavings.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                          <span className="text-sm">Labor Savings</span>
                          <span className="font-semibold">${savingsResults.laborSavings.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                          <span className="text-sm">Carrier Management</span>
                          <span className="font-semibold">${savingsResults.carrierManagementSavings.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-primary text-primary-foreground rounded-lg">
                          <span className="font-semibold">Total Annual Savings</span>
                          <span className="text-xl font-bold">${savingsResults.totalSavings.toLocaleString()}</span>
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full" 
                        size="lg" 
                        onClick={() => handleDetailedAnalysisClick('freight-savings')}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Get Detailed Freight Analysis
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="automation" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">Automation Value Calculator</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-4">Coming Soon</h3>
                      <p className="text-muted-foreground mb-6">
                        Our automation value calculator will help you quantify the benefits of automating manual logistics processes.
                      </p>
                      <Button onClick={() => handleDetailedAnalysisClick('automation-value')}>
                        <Download className="mr-2 h-4 w-4" />
                        Request Early Access
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="inventory" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">Inventory Optimization Calculator</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-4">Coming Soon</h3>
                      <p className="text-muted-foreground mb-6">
                        Calculate working capital improvements and carrying cost savings from optimized inventory management.
                      </p>
                      <Button onClick={() => handleDetailedAnalysisClick('inventory-optimization')}>
                        <Download className="mr-2 h-4 w-4" />
                        Request Early Access
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Get a Detailed ROI Analysis
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Work with our experts to create a comprehensive business case for logistics optimization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link to="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link to="/resources">View All Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Modal */}
      <Dialog open={showLeadCapture} onOpenChange={setShowLeadCapture}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="sr-only">Download Calculator</DialogTitle>
          </DialogHeader>
          {selectedCalculator && (
            <LeadCaptureForm
              title={`Get Detailed Analysis: ${selectedCalculator.title}`}
              description={`Download comprehensive analysis workbook with customized calculations, benchmarks, and implementation recommendations for ${selectedCalculator.title.toLowerCase()}.`}
              resourceType="calculator"
              downloadText="Download Calculator & Analysis"
              onSubmit={(data) => {
                console.log('Lead captured:', data);
                setShowLeadCapture(false);
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Calculators;

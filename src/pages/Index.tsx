
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from "recharts";
import { TrendingUp, Globe, FileText, Mic, Users, Activity, ArrowUp, ArrowDown } from "lucide-react";

const Index = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("7d");
  const [selectedLanguage, setSelectedLanguage] = useState("all");

  // Mock data for analytics
  const totalConversions = 45382;
  const dailyGrowth = 12.5;
  const successRate = 94.7;
  const activeLanguages = 34;

  const conversionData = [
    { date: "Mon", voice: 1200, text: 2300, file: 800 },
    { date: "Tue", voice: 1400, text: 2100, file: 950 },
    { date: "Wed", voice: 1100, text: 2500, file: 750 },
    { date: "Thu", voice: 1600, text: 2200, file: 1100 },
    { date: "Fri", voice: 1800, text: 2800, file: 1200 },
    { date: "Sat", voice: 2200, text: 3200, file: 1400 },
    { date: "Sun", voice: 2000, text: 2900, file: 1300 },
  ];

  const languagePairData = [
    { source: "English", target: "Hindi", count: 8500, accuracy: 96.2 },
    { source: "English", target: "Tamil", count: 6200, accuracy: 94.8 },
    { source: "Hindi", target: "Bengali", count: 4800, accuracy: 95.1 },
    { source: "English", target: "Telugu", count: 4200, accuracy: 93.7 },
    { source: "Marathi", target: "Hindi", count: 3800, accuracy: 97.1 },
    { source: "English", target: "Gujarati", count: 3500, accuracy: 94.3 },
  ];

  const regionData = [
    { region: "North India", value: 35, color: "#3b82f6" },
    { region: "South India", value: 28, color: "#10b981" },
    { region: "West India", value: 22, color: "#f59e0b" },
    { region: "East India", value: 15, color: "#ef4444" },
  ];

  const performanceData = [
    { hour: "00", conversions: 245 },
    { hour: "04", conversions: 189 },
    { hour: "08", conversions: 1200 },
    { hour: "12", conversions: 1800 },
    { hour: "16", conversions: 2100 },
    { hour: "20", conversions: 1600 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-900/50 backdrop-blur">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Globe className="h-8 w-8 text-blue-400" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  LinguaBridge Analytics
                </h1>
              </div>
              <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                Live Dashboard
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-32 bg-slate-800 border-slate-600">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1d">Last 24h</SelectItem>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 90 days</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Total Conversions</CardTitle>
              <Activity className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{totalConversions.toLocaleString()}</div>
              <div className="flex items-center text-sm text-emerald-400">
                <ArrowUp className="h-3 w-3 mr-1" />
                +{dailyGrowth}% from yesterday
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Success Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{successRate}%</div>
              <div className="flex items-center text-sm text-emerald-400">
                <ArrowUp className="h-3 w-3 mr-1" />
                +2.1% accuracy improvement
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Active Languages</CardTitle>
              <Globe className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{activeLanguages}</div>
              <div className="text-sm text-slate-400">
                Supporting 22 Indian languages
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Processing Cost</CardTitle>
              <Users className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">₹0.02</div>
              <div className="text-sm text-slate-400">
                per word processed
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Analytics */}
        <Tabs defaultValue="conversions" className="space-y-6">
          <TabsList className="bg-slate-800 border-slate-700">
            <TabsTrigger value="conversions" className="data-[state=active]:bg-blue-600">
              Conversion Analytics
            </TabsTrigger>
            <TabsTrigger value="languages" className="data-[state=active]:bg-blue-600">
              Language Insights
            </TabsTrigger>
            <TabsTrigger value="performance" className="data-[state=active]:bg-blue-600">
              Performance Metrics
            </TabsTrigger>
            <TabsTrigger value="regions" className="data-[state=active]:bg-blue-600">
              Regional Analysis
            </TabsTrigger>
          </TabsList>

          <TabsContent value="conversions" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart className="h-5 w-5 text-blue-400" />
                    <span>Daily Conversion Volume</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={conversionData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="date" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: '1px solid #374151',
                          borderRadius: '8px',
                          color: '#F3F4F6'
                        }} 
                      />
                      <Bar dataKey="voice" fill="#3B82F6" name="Voice" />
                      <Bar dataKey="text" fill="#10B981" name="Text" />
                      <Bar dataKey="file" fill="#F59E0B" name="File" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-emerald-400" />
                    <span>Conversion Trends</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={conversionData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="date" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: '1px solid #374151',
                          borderRadius: '8px',
                          color: '#F3F4F6'
                        }} 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="voice" 
                        stackId="1" 
                        stroke="#3B82F6" 
                        fill="#3B82F6" 
                        fillOpacity={0.6}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="text" 
                        stackId="1" 
                        stroke="#10B981" 
                        fill="#10B981" 
                        fillOpacity={0.6}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="file" 
                        stackId="1" 
                        stroke="#F59E0B" 
                        fill="#F59E0B" 
                        fillOpacity={0.6}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
              <CardHeader>
                <CardTitle>Conversion Type Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <Mic className="h-8 w-8 text-blue-400" />
                    <div>
                      <div className="text-lg font-semibold text-white">Voice Input</div>
                      <div className="text-sm text-slate-400">32% of total conversions</div>
                      <div className="text-xs text-blue-400">WER: &lt;15% accuracy</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                    <FileText className="h-8 w-8 text-emerald-400" />
                    <div>
                      <div className="text-lg font-semibold text-white">Text Input</div>
                      <div className="text-sm text-slate-400">58% of total conversions</div>
                      <div className="text-xs text-emerald-400">85% LLM accuracy</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                    <FileText className="h-8 w-8 text-yellow-400" />
                    <div>
                      <div className="text-lg font-semibold text-white">File Input</div>
                      <div className="text-sm text-slate-400">10% of total conversions</div>
                      <div className="text-xs text-yellow-400">12 Indian scripts</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="languages" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
              <CardHeader>
                <CardTitle>Top Language Conversion Pairs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {languagePairData.map((pair, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-medium text-white">
                            {pair.source} → {pair.target}
                          </div>
                          <div className="text-sm text-slate-400">
                            {pair.count.toLocaleString()} conversions
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-emerald-400 font-semibold">
                          {pair.accuracy}%
                        </div>
                        <div className="text-xs text-slate-400">accuracy</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
              <CardHeader>
                <CardTitle>Hourly Performance Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="hour" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#F3F4F6'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="conversions" 
                      stroke="#3B82F6" 
                      strokeWidth={3}
                      dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="regions" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
                <CardHeader>
                  <CardTitle>Regional Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={regionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {regionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: '1px solid #374151',
                          borderRadius: '8px',
                          color: '#F3F4F6'
                        }} 
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
                <CardHeader>
                  <CardTitle>Regional Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {regionData.map((region, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div 
                            className="w-4 h-4 rounded-full" 
                            style={{ backgroundColor: region.color }}
                          />
                          <span className="text-white">{region.region}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-semibold">{region.value}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;


import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Code, Key, Settings, Activity, Copy, RefreshCw } from "lucide-react";

const APIIntegration = () => {
  const [apiKeys, setApiKeys] = useState([
    {
      id: 1,
      name: "Production API",
      key: "lb_prod_****************************",
      status: "active",
      usage: "45,230",
      limit: "100,000",
      created: "2024-01-15"
    },
    {
      id: 2,
      name: "Development API",
      key: "lb_dev_****************************",
      status: "active",
      usage: "12,450",
      limit: "10,000",
      created: "2024-01-10"
    }
  ]);

  const [webhooks, setWebhooks] = useState([
    {
      id: 1,
      url: "https://api.yourapp.com/webhooks/conversion",
      events: ["conversion.completed", "conversion.failed"],
      status: "active",
      lastTriggered: "2 minutes ago"
    },
    {
      id: 2,
      url: "https://slack.com/api/incoming/webhook",
      events: ["campaign.completed"],
      status: "active",
      lastTriggered: "1 hour ago"
    }
  ]);

  const sampleCode = `// Node.js Example
const linguaBridge = require('lingua-bridge-sdk');

const client = new linguaBridge.Client({
  apiKey: 'your_api_key_here'
});

// Convert text
const result = await client.convert({
  input: 'Hello, how are you?',
  sourceLanguage: 'en',
  targetLanguage: 'hi',
  type: 'text'
});

console.log(result.convertedText); // "नमस्ते, आप कैसे हैं?"
console.log(result.confidence); // 0.95`;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">API Integration</h2>
        <p className="text-slate-400">Manage API keys, webhooks, and integration settings</p>
      </div>

      <Tabs defaultValue="keys" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="keys" className="data-[state=active]:bg-blue-600">
            API Keys
          </TabsTrigger>
          <TabsTrigger value="webhooks" className="data-[state=active]:bg-blue-600">
            Webhooks
          </TabsTrigger>
          <TabsTrigger value="docs" className="data-[state=active]:bg-blue-600">
            Documentation
          </TabsTrigger>
        </TabsList>

        <TabsContent value="keys" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="flex items-center space-x-2">
                <Key className="h-5 w-5 text-blue-400" />
                <span>API Keys</span>
              </CardTitle>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Generate New Key
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-slate-300">Name</TableHead>
                    <TableHead className="text-slate-300">Key</TableHead>
                    <TableHead className="text-slate-300">Status</TableHead>
                    <TableHead className="text-slate-300">Usage</TableHead>
                    <TableHead className="text-slate-300">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {apiKeys.map((key) => (
                    <TableRow key={key.id}>
                      <TableCell className="text-white font-medium">{key.name}</TableCell>
                      <TableCell className="text-slate-300 font-mono text-sm">{key.key}</TableCell>
                      <TableCell>
                        <Badge className="bg-emerald-500/20 text-emerald-400">
                          {key.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-slate-300">
                        {key.usage} / {key.limit}
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="ghost" className="text-blue-400">
                            <Copy className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-yellow-400">
                            <RefreshCw className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="webhooks" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-emerald-400" />
                <span>Webhooks</span>
              </CardTitle>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Add Webhook
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {webhooks.map((webhook) => (
                <div key={webhook.id} className="p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-emerald-500/20 text-emerald-400">
                        {webhook.status}
                      </Badge>
                      <span className="text-white font-medium">{webhook.url}</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="text-blue-400">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <span className="text-slate-400">Events: </span>
                      <span className="text-slate-300">{webhook.events.join(", ")}</span>
                    </div>
                    <div>
                      <span className="text-slate-400">Last triggered: </span>
                      <span className="text-slate-300">{webhook.lastTriggered}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="docs" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code className="h-5 w-5 text-purple-400" />
                <span>Quick Start Guide</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Installation</h3>
                  <pre className="bg-slate-900 p-4 rounded-lg text-green-400 text-sm overflow-x-auto">
                    npm install lingua-bridge-sdk
                  </pre>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Basic Usage</h3>
                  <pre className="bg-slate-900 p-4 rounded-lg text-slate-300 text-sm overflow-x-auto whitespace-pre-wrap">
                    {sampleCode}
                  </pre>
                </div>
                <div className="flex space-x-4">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    View Full Documentation
                  </Button>
                  <Button variant="ghost" className="text-purple-400 hover:text-purple-300">
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Code
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default APIIntegration;

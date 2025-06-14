
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Play, Pause, Edit, Trash2, Plus, Send, Users, MessageSquare } from "lucide-react";

const CampaignManager = () => {
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: "Rural Health Awareness",
      status: "active",
      targetLanguages: ["Hindi", "Tamil", "Bengali"],
      reach: 15420,
      conversions: 1240,
      created: "2024-01-15",
      type: "sms"
    },
    {
      id: 2,
      name: "Digital India Initiative",
      status: "paused",
      targetLanguages: ["Telugu", "Gujarati", "Marathi"],
      reach: 8950,
      conversions: 675,
      created: "2024-01-12",
      type: "voice"
    },
    {
      id: 3,
      name: "Education Enrollment Drive",
      status: "completed",
      targetLanguages: ["Hindi", "Punjabi", "Odia"],
      reach: 22100,
      conversions: 1850,
      created: "2024-01-08",
      type: "email"
    }
  ]);

  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [newCampaign, setNewCampaign] = useState({
    name: "",
    type: "sms",
    targetLanguages: [],
    message: ""
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-emerald-500/20 text-emerald-400";
      case "paused": return "bg-yellow-500/20 text-yellow-400";
      case "completed": return "bg-blue-500/20 text-blue-400";
      default: return "bg-slate-500/20 text-slate-400";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "sms": return <MessageSquare className="h-4 w-4" />;
      case "voice": return <Play className="h-4 w-4" />;
      case "email": return <Send className="h-4 w-4" />;
      default: return <Users className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Campaign Management</h2>
          <p className="text-slate-400">Create and manage multilingual outreach campaigns</p>
        </div>
        <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              New Campaign
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-800 border-slate-700">
            <DialogHeader>
              <DialogTitle className="text-white">Create New Campaign</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Campaign Name"
                value={newCampaign.name}
                onChange={(e) => setNewCampaign({...newCampaign, name: e.target.value})}
                className="bg-slate-700 border-slate-600 text-white"
              />
              <Select value={newCampaign.type} onValueChange={(value) => setNewCampaign({...newCampaign, type: value})}>
                <SelectTrigger className="bg-slate-700 border-slate-600">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sms">SMS Campaign</SelectItem>
                  <SelectItem value="voice">Voice Broadcast</SelectItem>
                  <SelectItem value="email">Email Campaign</SelectItem>
                </SelectContent>
              </Select>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                Create Campaign
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-white">Active Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-slate-300">Campaign</TableHead>
                <TableHead className="text-slate-300">Type</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Languages</TableHead>
                <TableHead className="text-slate-300">Reach</TableHead>
                <TableHead className="text-slate-300">Conversions</TableHead>
                <TableHead className="text-slate-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map((campaign) => (
                <TableRow key={campaign.id}>
                  <TableCell className="text-white font-medium">{campaign.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      {getTypeIcon(campaign.type)}
                      <span className="text-slate-300 capitalize">{campaign.type}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(campaign.status)}>
                      {campaign.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      {campaign.targetLanguages.slice(0, 2).map((lang) => (
                        <Badge key={lang} variant="secondary" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                      {campaign.targetLanguages.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{campaign.targetLanguages.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-300">{campaign.reach.toLocaleString()}</TableCell>
                  <TableCell className="text-emerald-400">{campaign.conversions.toLocaleString()}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-emerald-400 hover:text-emerald-300">
                        <Play className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default CampaignManager;

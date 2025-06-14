
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, CheckCircle, AlertTriangle, Info, X } from "lucide-react";

interface Notification {
  id: number;
  type: "success" | "warning" | "info" | "error";
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: "success",
      title: "Campaign Completed",
      message: "Rural Health Awareness campaign reached 15,420 users with 92% delivery rate",
      timestamp: "2 minutes ago",
      read: false
    },
    {
      id: 2,
      type: "warning",
      title: "Low API Credits",
      message: "Translation API credits are below 10%. Consider upgrading your plan.",
      timestamp: "15 minutes ago",
      read: false
    },
    {
      id: 3,
      type: "info",
      title: "New Language Support",
      message: "Bhojpuri language support has been added to the platform",
      timestamp: "1 hour ago",
      read: true
    },
    {
      id: 4,
      type: "error",
      title: "Conversion Failed",
      message: "Voice file conversion failed for campaign ID: 1234. Audio quality too low.",
      timestamp: "2 hours ago",
      read: false
    }
  ]);

  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    setUnreadCount(notifications.filter(n => !n.read).length);
  }, [notifications]);

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "success": return <CheckCircle className="h-5 w-5 text-emerald-400" />;
      case "warning": return <AlertTriangle className="h-5 w-5 text-yellow-400" />;
      case "error": return <AlertTriangle className="h-5 w-5 text-red-400" />;
      default: return <Info className="h-5 w-5 text-blue-400" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "success": return "border-l-emerald-500";
      case "warning": return "border-l-yellow-500";
      case "error": return "border-l-red-500";
      default: return "border-l-blue-500";
    }
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div className="flex items-center space-x-2">
          <Bell className="h-5 w-5 text-blue-400" />
          <CardTitle className="text-white">Notifications</CardTitle>
          {unreadCount > 0 && (
            <Badge className="bg-red-500 text-white">
              {unreadCount}
            </Badge>
          )}
        </div>
        <Button 
          size="sm" 
          variant="ghost" 
          onClick={markAllAsRead}
          className="text-slate-400 hover:text-white"
        >
          Mark all read
        </Button>
      </CardHeader>
      <CardContent className="space-y-3 max-h-96 overflow-y-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg border-l-4 ${getTypeColor(notification.type)} ${
              notification.read ? 'bg-slate-700/30' : 'bg-slate-700/50'
            } transition-all hover:bg-slate-700/60`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                {getIcon(notification.type)}
                <div className="flex-1">
                  <h4 className={`font-medium ${notification.read ? 'text-slate-300' : 'text-white'}`}>
                    {notification.title}
                  </h4>
                  <p className={`text-sm mt-1 ${notification.read ? 'text-slate-400' : 'text-slate-300'}`}>
                    {notification.message}
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    {notification.timestamp}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {!notification.read && (
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => markAsRead(notification.id)}
                    className="text-blue-400 hover:text-blue-300 text-xs"
                  >
                    Mark read
                  </Button>
                )}
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => deleteNotification(notification.id)}
                  className="text-slate-400 hover:text-red-400"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default NotificationCenter;

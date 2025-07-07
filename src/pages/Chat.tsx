import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, 
  Send, 
  Plus, 
  Search,
  Users,
  Clock,
  Code
} from 'lucide-react';

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [messageInput, setMessageInput] = useState('');

  const chatRooms = [
    {
      id: 1,
      name: "General Discussion",
      description: "Main chat for all students",
      members: 124,
      lastMessage: "Hey everyone! Anyone working on the React assignment?",
      lastMessageTime: "2 min ago",
      unreadCount: 3,
      type: "public"
    },
    {
      id: 2,
      name: "Programming Help",
      description: "Get help with coding problems",
      members: 89,
      lastMessage: "Check out this solution for the binary tree problem",
      lastMessageTime: "15 min ago",
      unreadCount: 7,
      type: "public"
    },
    {
      id: 3,
      name: "Study Group - DSA",
      description: "Data Structures & Algorithms study",
      members: 45,
      lastMessage: "Meeting tomorrow at 3 PM in the library",
      lastMessageTime: "1 hour ago",
      unreadCount: 0,
      type: "group"
    },
    {
      id: 4,
      name: "Web Development",
      description: "Frontend and backend discussions",
      members: 67,
      lastMessage: "Great tutorial on Next.js, thanks for sharing!",
      lastMessageTime: "2 hours ago",
      unreadCount: 2,
      type: "public"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "John Doe",
      content: "Hey everyone! Anyone working on the React assignment?",
      time: "10:30 AM",
      isCode: false
    },
    {
      id: 2,
      sender: "Jane Smith",
      content: "Yes! I'm stuck on the state management part. Any tips?",
      time: "10:32 AM",
      isCode: false
    },
    {
      id: 3,
      sender: "Mike Johnson",
      content: "Here's a simple example of using useState:",
      time: "10:35 AM",
      isCode: true,
      codeContent: `const [count, setCount] = useState(0);

const increment = () => {
  setCount(count + 1);
};`
    },
    {
      id: 4,
      sender: "Sarah Wilson",
      content: "That's really helpful! I was overcomplicating it.",
      time: "10:40 AM",
      isCode: false
    },
    {
      id: 5,
      sender: "Alex Brown",
      content: "Don't forget to add the dependency array for useEffect!",
      time: "10:42 AM",
      isCode: false
    }
  ];

  const sendMessage = () => {
    if (messageInput.trim()) {
      // Here you would normally send the message to your backend
      console.log('Sending message:', messageInput);
      setMessageInput('');
    }
  };

  const currentRoom = chatRooms.find(room => room.id === selectedChat);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Real-Time Chat
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Connect, collaborate, and share knowledge with fellow students
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Chat Rooms Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Chat Rooms
                  </CardTitle>
                  <Button size="icon" variant="outline">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="relative mb-4">
                  <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search chats..."
                    className="w-full pl-10 pr-3 py-2 text-sm border border-input rounded-md bg-background"
                  />
                </div>
                
                {chatRooms.map((room) => (
                  <div
                    key={room.id}
                    onClick={() => setSelectedChat(room.id)}
                    className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedChat === room.id 
                        ? 'bg-primary/10 border border-primary/20' 
                        : 'hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-medium text-sm">{room.name}</h4>
                      {room.unreadCount > 0 && (
                        <Badge variant="secondary" className="text-xs">
                          {room.unreadCount}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-1">
                      {room.lastMessage}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{room.members}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{room.lastMessageTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col">
              {/* Chat Header */}
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5" />
                      {currentRoom?.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {currentRoom?.description} • {currentRoom?.members} members
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">
                      {currentRoom?.type}
                    </Badge>
                    <Button variant="outline" size="sm">
                      <Users className="h-4 w-4 mr-2" />
                      Members
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages Area */}
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className="space-y-2">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs">
                          {message.sender.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm">{message.sender}</span>
                          <span className="text-xs text-muted-foreground">{message.time}</span>
                        </div>
                        
                        {message.isCode ? (
                          <div className="space-y-2">
                            <p className="text-sm">{message.content}</p>
                            <div className="bg-muted/50 rounded-lg p-3 border">
                              <div className="flex items-center gap-2 mb-2">
                                <Code className="h-4 w-4 text-primary" />
                                <span className="text-xs font-medium">Code</span>
                              </div>
                              <pre className="text-sm font-mono overflow-x-auto">
                                <code>{message.codeContent}</code>
                              </pre>
                            </div>
                          </div>
                        ) : (
                          <p className="text-sm">{message.content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>

              {/* Message Input */}
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border border-input rounded-md bg-background"
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  />
                  <Button onClick={sendMessage} disabled={!messageInput.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Press Enter to send • Use /code for code blocks
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
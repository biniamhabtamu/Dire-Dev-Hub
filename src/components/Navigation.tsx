import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  MessageCircle, 
  Code, 
  FileText, 
  Users, 
  Moon, 
  Sun,
  Menu,
  X
} from 'lucide-react';
import { useTheme } from 'next-themes';

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: BookOpen },
    { name: 'Chat', path: '/chat', icon: MessageCircle },
    { name: 'Dev-Tools', path: '/dev-tools', icon: Code },
    { name: 'Pages', path: '/pages', icon: FileText },
    { name: 'Discussion', path: '/discussion', icon: Users },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="rounded-lg bg-gradient-hero p-2">
            <Code className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Dire-Dev
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant={isActive(item.path) ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to={item.path} className="flex items-center space-x-2">
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            </Button>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>

          {/* Login Button */}
          <Button variant="outline" size="sm">
            Login
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <div className="container py-4 space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant={isActive(item.path) ? "default" : "ghost"}
                className="w-full justify-start"
                asChild
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link to={item.path} className="flex items-center space-x-2">
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
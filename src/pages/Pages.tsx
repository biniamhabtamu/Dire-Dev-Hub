import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  BookOpen, 
  Download, 
  Upload,
  Search,
  Filter,
  Star,
  Calendar,
  User
} from 'lucide-react';

const Pages = () => {
  const materials = [
    {
      id: 1,
      title: "Data Structures and Algorithms - Complete Guide",
      description: "Comprehensive textbook covering all DSA topics with examples",
      type: "PDF",
      subject: "Computer Science",
      semester: "3rd Semester",
      downloads: 234,
      rating: 4.8,
      uploadedBy: "Dr. Ahmed Hassan",
      uploadDate: "2 weeks ago",
      size: "15.2 MB"
    },
    {
      id: 2,
      title: "Web Development with React.js",
      description: "Modern React.js development guide with practical projects",
      type: "PDF",
      subject: "Web Development",
      semester: "4th Semester",
      downloads: 189,
      rating: 4.9,
      uploadedBy: "Prof. Sarah Johnson",
      uploadDate: "1 week ago",
      size: "22.7 MB"
    },
    {
      id: 3,
      title: "Database Management Systems",
      description: "Complete guide to DBMS concepts and SQL programming",
      type: "PDF",
      subject: "Database",
      semester: "3rd Semester",
      downloads: 156,
      rating: 4.7,
      uploadedBy: "Dr. Michael Chen",
      uploadDate: "3 days ago",
      size: "18.5 MB"
    },
    {
      id: 4,
      title: "Advanced JavaScript Programming",
      description: "ES6+ features, async programming, and modern JS concepts",
      type: "PDF",
      subject: "Programming",
      semester: "2nd Semester",
      downloads: 298,
      rating: 4.6,
      uploadedBy: "John Doe",
      uploadDate: "5 days ago",
      size: "12.8 MB"
    },
    {
      id: 5,
      title: "Software Engineering Principles",
      description: "Best practices in software design and development lifecycle",
      type: "PDF",
      subject: "Software Engineering",
      semester: "4th Semester",
      downloads: 167,
      rating: 4.8,
      uploadedBy: "Prof. Lisa Wang",
      uploadDate: "1 week ago",
      size: "20.1 MB"
    },
    {
      id: 6,
      title: "Computer Networks Fundamentals",
      description: "Network protocols, architecture, and security basics",
      type: "PDF",
      subject: "Networking",
      semester: "3rd Semester",
      downloads: 134,
      rating: 4.5,
      uploadedBy: "Dr. Robert Kim",
      uploadDate: "4 days ago",
      size: "16.9 MB"
    }
  ];

  const subjects = ["All", "Computer Science", "Web Development", "Database", "Programming", "Software Engineering", "Networking"];
  const semesters = ["All", "1st Semester", "2nd Semester", "3rd Semester", "4th Semester"];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Dev-Material & Dev-Books
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Access free textbooks, PDFs, and coding resources for all subjects
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Upload Material
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              Search Resources
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">1,247</div>
              <div className="text-sm text-muted-foreground">Total Resources</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-secondary">45</div>
              <div className="text-sm text-muted-foreground">Subjects</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">8,934</div>
              <div className="text-sm text-muted-foreground">Downloads</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-secondary">23</div>
              <div className="text-sm text-muted-foreground">New This Week</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="mb-6 space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-2">Filter by Subject:</h3>
            <div className="flex flex-wrap gap-2">
              {subjects.map((subject) => (
                <Button key={subject} variant="outline" size="sm">
                  {subject}
                </Button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-2">Filter by Semester:</h3>
            <div className="flex flex-wrap gap-2">
              {semesters.map((semester) => (
                <Button key={semester} variant="outline" size="sm">
                  {semester}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Materials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material) => (
            <Card key={material.id} className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2 line-clamp-2">
                      {material.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {material.description}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="ml-2">
                    {material.type}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Subject and Semester */}
                <div className="flex gap-2">
                  <Badge variant="outline">{material.subject}</Badge>
                  <Badge variant="outline">{material.semester}</Badge>
                </div>

                {/* Rating and Downloads */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{material.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Download className="h-4 w-4" />
                    <span>{material.downloads} downloads</span>
                  </div>
                </div>

                {/* File Size */}
                <div className="text-sm text-muted-foreground">
                  Size: {material.size}
                </div>

                {/* Uploader Info */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{material.uploadedBy}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{material.uploadDate}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button className="flex-1" variant="default">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline" size="icon">
                    <BookOpen className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Resources
          </Button>
        </div>

        {/* Upload Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Share Your Resources
            </CardTitle>
            <CardDescription>
              Help fellow students by uploading textbooks, notes, and study materials
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium">What can you upload?</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Textbooks and reference materials</li>
                  <li>• Lecture notes and presentations</li>
                  <li>• Practice problems and solutions</li>
                  <li>• Project examples and code</li>
                  <li>• Study guides and cheat sheets</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium">Upload Guidelines</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Files must be educational content</li>
                  <li>• Maximum file size: 50 MB</li>
                  <li>• Supported formats: PDF, DOC, PPT</li>
                  <li>• No copyrighted materials</li>
                  <li>• Include clear descriptions</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <Button variant="hero" size="lg">
                <Upload className="h-4 w-4 mr-2" />
                Start Uploading
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Pages;
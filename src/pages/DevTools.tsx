import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Code, FileText, ListTodo, Play, Save } from 'lucide-react';

const DevTools = () => {
  const [htmlCode, setHtmlCode] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Project</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        h1 { color: #1e40af; }
    </style>
</head>
<body>
    <h1>Welcome to Dire-Dev!</h1>
    <p>Start coding your amazing project here.</p>
</body>
</html>`);

  const [todos, setTodos] = useState([
    'Complete assignment 1',
    'Study for upcoming exam',
    'Work on group project'
  ]);

  const [newTodo, setNewTodo] = useState('');
  const [markdownText, setMarkdownText] = useState(`# My Notes

## Today's Learning
- React.js fundamentals
- CSS Grid and Flexbox
- JavaScript ES6+ features

### Code Example
\`\`\`javascript
const greeting = (name) => {
    return \`Hello, \${name}!\`;
};
\`\`\`

> **Note:** Remember to practice coding daily!`);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo('');
    }
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Dev-Tools
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Your coding workspace - Editor, Todo List, and Markdown Notes
          </p>
        </div>

        <Tabs defaultValue="editor" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="editor" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              Code Editor
            </TabsTrigger>
            <TabsTrigger value="todos" className="flex items-center gap-2">
              <ListTodo className="h-4 w-4" />
              Todo List
            </TabsTrigger>
            <TabsTrigger value="notes" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Markdown Notes
            </TabsTrigger>
          </TabsList>

          {/* Code Editor */}
          <TabsContent value="editor">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    HTML/CSS/JS Editor
                  </CardTitle>
                  <CardDescription>
                    Write and test your code with live preview
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    value={htmlCode}
                    onChange={(e) => setHtmlCode(e.target.value)}
                    className="min-h-[400px] font-mono text-sm"
                    placeholder="Write your HTML, CSS, and JavaScript here..."
                  />
                  <div className="flex gap-2">
                    <Button variant="default" className="flex items-center gap-2">
                      <Play className="h-4 w-4" />
                      Run Code
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Save className="h-4 w-4" />
                      Save
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Live Preview</CardTitle>
                  <CardDescription>
                    See your code in action
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg p-4 min-h-[400px] bg-white dark:bg-gray-900">
                    <iframe
                      srcDoc={htmlCode}
                      className="w-full h-full min-h-[350px] border-0"
                      title="Code Preview"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Todo List */}
          <TabsContent value="todos">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ListTodo className="h-5 w-5" />
                  My Todo List
                </CardTitle>
                <CardDescription>
                  Keep track of your tasks and assignments
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new task..."
                    className="flex-1 px-3 py-2 border border-input rounded-md bg-background"
                    onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                  />
                  <Button onClick={addTodo}>Add</Button>
                </div>
                
                <div className="space-y-2">
                  {todos.map((todo, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <span>{todo}</span>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => removeTodo(index)}
                      >
                        Done
                      </Button>
                    </div>
                  ))}
                  {todos.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      No tasks yet. Add one above!
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Markdown Notes */}
          <TabsContent value="notes">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Markdown Editor
                  </CardTitle>
                  <CardDescription>
                    Write your notes in Markdown format
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={markdownText}
                    onChange={(e) => setMarkdownText(e.target.value)}
                    className="min-h-[400px] font-mono text-sm"
                    placeholder="Write your markdown notes here..."
                  />
                  <Button variant="outline" className="mt-4 flex items-center gap-2">
                    <Save className="h-4 w-4" />
                    Save Notes
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Preview</CardTitle>
                  <CardDescription>
                    See how your markdown will look
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="prose dark:prose-invert max-w-none min-h-[400px] p-4 border rounded-lg">
                    <div dangerouslySetInnerHTML={{ __html: markdownText.replace(/\n/g, '<br/>') }} />
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

export default DevTools;
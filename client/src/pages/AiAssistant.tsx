import React, { useState } from 'react';
import { SendHorizontal, FileUp, BookOpen, Sparkles, Zap, Lightbulb, Download, Share } from 'lucide-react';

const AiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<{
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
  }[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! I'm your academic AI assistant. I can help you with your studies, explain concepts, create study materials, and more. How can I assist you today?",
      timestamp: new Date(),
    }
  ]);
  
  const [userInput, setUserInput] = useState('');
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);
  
  const handleSendMessage = () => {
    if (!userInput.trim()) return;
    
    const newUserMessage = {
      id: Date.now().toString(),
      role: 'user' as const,
      content: userInput,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setUserInput('');
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      const newAiMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant' as const,
        content: "I'm simulating an AI response to your query. In a real application, this would be an actual response from an AI model based on your input and any uploaded documents.",
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, newAiMessage]);
    }, 1000);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  // Predefined prompts
  const predefinedPrompts = [
    "Explain the concept of quantum entanglement",
    "Create a study guide for organic chemistry",
    "Summarize the key events of World War II",
    "Help me understand calculus derivatives",
  ];
  
  return (
    <div className="flex flex-col h-[calc(100vh-130px)]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-primary-900">AI Assistant</h1>
          <p className="text-primary-600 mt-1">Your personal academic learning companion</p>
        </div>
        
        <div className="flex space-x-3">
          <button className="btn btn-outline flex items-center">
            <FileUp size={18} className="mr-2" />
            <span>Upload Document</span>
          </button>
          <button className="btn btn-primary flex items-center">
            <Sparkles size={18} className="mr-2" />
            <span>New Chat</span>
          </button>
        </div>
      </div>
      
      <div className="flex flex-1 gap-6 overflow-hidden">
        {/* Chat Section */}
        <div className="flex flex-col flex-1 bg-white rounded-lg shadow-sm border border-primary-100 overflow-hidden">
          {/* Messages Container */}
          <div className="flex-1 p-6 overflow-y-auto">
            {messages.map((message) => (
              <div 
                key={message.id}
                className={`mb-6 ${message.role === 'assistant' ? 'flex' : 'flex justify-end'}`}
              >
                <div 
                  className={`max-w-[80%] p-4 rounded-lg ${
                    message.role === 'assistant' 
                      ? 'bg-primary-50 text-primary-900' 
                      : 'bg-primary-700 text-white'
                  }`}
                >
                  {message.content}
                  
                  {message.role === 'assistant' && (
                    <div className="flex justify-end mt-2">
                      <div className="flex space-x-2">
                        <button className="text-primary-500 hover:text-primary-700">
                          <Download size={16} />
                        </button>
                        <button className="text-primary-500 hover:text-primary-700">
                          <Share size={16} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Input Section */}
          <div className="p-4 border-t border-primary-100">
            <div className="relative">
              <textarea
                className="w-full px-4 py-3 pr-12 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                placeholder="Ask anything..."
                rows={3}
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                className="absolute right-3 bottom-3 p-2 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors"
                onClick={handleSendMessage}
              >
                <SendHorizontal size={20} />
              </button>
            </div>
            
            {/* Quick Prompts */}
            <div className="mt-4 flex flex-wrap gap-2">
              {predefinedPrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => setUserInput(prompt)}
                  className="bg-primary-50 text-primary-700 hover:bg-primary-100 px-3 py-1.5 rounded-full text-sm transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="hidden lg:block w-80">
          <div className="bg-white rounded-lg shadow-sm border border-primary-100 p-5">
            <h3 className="text-lg font-semibold text-primary-900 mb-4">AI Capabilities</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="rounded-full bg-primary-100 p-2 mr-3">
                  <BookOpen className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-primary-900">Study Assistance</h4>
                  <p className="text-xs text-primary-600 mt-1">Get explanations of complex topics and concepts</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="rounded-full bg-secondary-100 p-2 mr-3">
                  <Zap className="h-5 w-5 text-secondary-600" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-primary-900">Practice Questions</h4>
                  <p className="text-xs text-primary-600 mt-1">Generate quizzes and practice problems</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="rounded-full bg-accent-100 p-2 mr-3">
                  <Lightbulb className="h-5 w-5 text-accent-600" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-primary-900">Content Summarization</h4>
                  <p className="text-xs text-primary-600 mt-1">Create concise summaries of your documents</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-5 border-t border-primary-100">
              <h3 className="text-sm font-semibold text-primary-900 mb-3">Documents</h3>
              
              {selectedDocument ? (
                <div className="bg-primary-50 rounded-md p-3 border border-primary-200">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 text-primary-600 mr-2" />
                      <span className="text-sm font-medium text-primary-800 line-clamp-1">Physics Notes.pdf</span>
                    </div>
                    <button 
                      className="text-primary-500 hover:text-primary-700"
                      onClick={() => setSelectedDocument(null)}
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              ) : (
                <button className="btn btn-outline w-full flex items-center justify-center">
                  <FileUp size={16} className="mr-2" />
                  <span>Upload Reference</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiAssistant;

const X: React.FC<{ size: number }> = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);
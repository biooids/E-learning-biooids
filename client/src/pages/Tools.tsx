import React, { useState } from 'react';
import { FileType, FileSignature as Signature, FileCog as FileConvert, Calculator, Calendar, Clock, Languages, Highlighter, FileSearch, BookCopy, Printer, FileCheck } from 'lucide-react';

const Tools: React.FC = () => {
  const tools = [
    {
      id: 'converter',
      name: 'Document Converter',
      description: 'Convert between PDF, Word, and other document formats',
      icon: <FileConvert className="h-6 w-6" />,
      category: 'documents'
    },
    {
      id: 'signature',
      name: 'Digital Signature',
      description: 'Create and manage digital signatures for documents',
      icon: <Signature className="h-6 w-6" />,
      category: 'documents'
    },
    {
      id: 'citation',
      name: 'Citation Generator',
      description: 'Generate citations in APA, MLA, Chicago, and other formats',
      icon: <FileType className="h-6 w-6" />,
      category: 'writing'
    },
    {
      id: 'calculator',
      name: 'Scientific Calculator',
      description: 'Advanced calculator with scientific and graphing capabilities',
      icon: <Calculator className="h-6 w-6" />,
      category: 'math'
    },
    {
      id: 'planner',
      name: 'Study Planner',
      description: 'Create and manage study schedules and deadlines',
      icon: <Calendar className="h-6 w-6" />,
      category: 'productivity'
    },
    {
      id: 'timer',
      name: 'Study Timer',
      description: 'Pomodoro timer and study session tracker',
      icon: <Clock className="h-6 w-6" />,
      category: 'productivity'
    },
    {
      id: 'translator',
      name: 'Academic Translator',
      description: 'Translate academic texts and technical terms',
      icon: <Languages className="h-6 w-6" />,
      category: 'language'
    },
    {
      id: 'highlighter',
      name: 'PDF Highlighter',
      description: 'Highlight and annotate PDF documents',
      icon: <Highlighter className="h-6 w-6" />,
      category: 'documents'
    },
    {
      id: 'plagiarism',
      name: 'Plagiarism Checker',
      description: 'Check documents for potential plagiarism',
      icon: <FileSearch className="h-6 w-6" />,
      category: 'writing'
    },
    {
      id: 'summarizer',
      name: 'Text Summarizer',
      description: 'Generate concise summaries of academic texts',
      icon: <BookCopy className="h-6 w-6" />,
      category: 'writing'
    },
    {
      id: 'formatter',
      name: 'Document Formatter',
      description: 'Format documents according to academic standards',
      icon: <FileCheck className="h-6 w-6" />,
      category: 'documents'
    },
    {
      id: 'printer',
      name: 'Smart Print',
      description: 'Optimize documents for printing with annotations',
      icon: <Printer className="h-6 w-6" />,
      category: 'documents'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tools' },
    { id: 'documents', name: 'Document Tools' },
    { id: 'writing', name: 'Writing & Research' },
    { id: 'math', name: 'Mathematics' },
    { id: 'productivity', name: 'Productivity' },
    { id: 'language', name: 'Language' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = tools.filter(tool => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8 pb-10">
      <div>
        <h1 className="text-3xl font-bold text-primary-900">Academic Tools</h1>
        <p className="text-primary-600 mt-1">Essential tools to enhance your academic workflow</p>
      </div>

      {/* Search and Categories */}
      <div className="bg-white rounded-lg shadow-sm border border-primary-100 p-4">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tools..."
            className="input w-full"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredTools.map(tool => (
          <div
            key={tool.id}
            className="card p-6 hover:border-primary-300 transition-all duration-300 hover:translate-y-[-4px]"
          >
            <div className="rounded-full bg-primary-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
              <div className="text-primary-600">
                {tool.icon}
              </div>
            </div>
            
            <h3 className="text-lg font-medium text-primary-900 mb-2">{tool.name}</h3>
            <p className="text-primary-600 text-sm mb-4">{tool.description}</p>
            
            <button className="btn btn-primary w-full">
              Open Tool
            </button>
          </div>
        ))}
      </div>

      {/* Quick Access Section */}
      <div className="bg-primary-50 rounded-lg p-6 border border-primary-100">
        <h2 className="text-xl font-semibold text-primary-900 mb-4">Recently Used Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-primary-100 flex items-center">
            <div className="rounded-full bg-primary-100 p-2 mr-3">
              <FileConvert className="h-5 w-5 text-primary-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-primary-900">Document Converter</h3>
              <p className="text-xs text-primary-500">Last used: 2 hours ago</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-primary-100 flex items-center">
            <div className="rounded-full bg-primary-100 p-2 mr-3">
              <FileType className="h-5 w-5 text-primary-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-primary-900">Citation Generator</h3>
              <p className="text-xs text-primary-500">Last used: Yesterday</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-primary-100 flex items-center">
            <div className="rounded-full bg-primary-100 p-2 mr-3">
              <Calculator className="h-5 w-5 text-primary-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-primary-900">Scientific Calculator</h3>
              <p className="text-xs text-primary-500">Last used: 3 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
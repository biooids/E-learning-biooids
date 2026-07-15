import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Share, Star, MessageSquare, BrainCircuit } from 'lucide-react';
import { mockDocuments } from '../data/mockData';

const DocumentView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'document' | 'ai'>('document');
  
  // Find the document from mock data
  const document = mockDocuments.find(doc => doc.id === id);
  
  if (!document) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)]">
        <h2 className="text-2xl font-bold text-primary-900 mb-4">Document Not Found</h2>
        <p className="text-primary-600 mb-6">The document you're looking for doesn't exist or has been removed.</p>
        <button
          onClick={() => navigate('/documents')}
          className="btn btn-primary"
        >
          Back to Documents
        </button>
      </div>
    );
  }
  
  return (
    <div className="space-y-6 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/documents')}
            className="mr-3 p-2 rounded-full bg-primary-100 text-primary-600 hover:bg-primary-200 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-primary-900">{document.title}</h1>
            <p className="text-primary-600 mt-1">{document.subject.charAt(0).toUpperCase() + document.subject.slice(1)} • {document.pages} pages • {document.date}</p>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button className="btn btn-outline flex items-center">
            <Download size={18} className="mr-2" />
            <span>Download</span>
          </button>
          <button className="btn btn-outline flex items-center">
            <Share size={18} className="mr-2" />
            <span>Share</span>
          </button>
          <button className="btn btn-primary flex items-center">
            <BrainCircuit size={18} className="mr-2" />
            <span>Ask AI</span>
          </button>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="border-b border-primary-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('document')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'document'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-primary-500 hover:text-primary-700 hover:border-primary-300'
            }`}
          >
            Document
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'ai'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-primary-500 hover:text-primary-700 hover:border-primary-300'
            }`}
          >
            AI Analysis
          </button>
        </nav>
      </div>
      
      {/* Document Content */}
      {activeTab === 'document' && (
        <div className="bg-white rounded-lg shadow-md border border-primary-100 p-6">
          <div className="flex justify-end mb-4">
            <div className="flex items-center space-x-4">
              <button className="text-primary-400 hover:text-primary-600">
                <Star size={20} />
              </button>
              <button className="text-primary-400 hover:text-primary-600">
                <MessageSquare size={20} />
              </button>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <h2>{document.title}</h2>
            <p>{document.description}</p>
            <p>This is a placeholder for the document content. In a real application, this would display the actual content of the document, potentially with interactive elements for annotations, highlights, and more.</p>
            <p>The document would be displayed here in a format appropriate for its type (PDF viewer, text document, etc.).</p>
            
            {/* Mock document content for demonstration */}
            <div className="bg-primary-50 p-4 rounded-md border border-primary-100 my-4">
              <p className="font-medium">Sample Document Content</p>
              <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
              <p className="mt-2">Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere.</p>
            </div>
            
            <p>Additional content would continue here with proper formatting, images, charts, tables, and other elements as needed.</p>
          </div>
        </div>
      )}
      
      {/* AI Analysis Tab */}
      {activeTab === 'ai' && (
        <div className="bg-white rounded-lg shadow-md border border-primary-100 p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-primary-900 mb-2">AI Document Analysis</h2>
            <p className="text-primary-600">Get insights, summaries, and practice questions based on this document.</p>
          </div>
          
          <div className="space-y-6">
            {/* Summary Section */}
            <div className="border border-primary-100 rounded-lg p-4">
              <h3 className="text-lg font-medium text-primary-800 mb-3">Document Summary</h3>
              <p className="text-primary-700">This document covers the fundamental principles of [subject matter], focusing on key concepts such as [concept 1], [concept 2], and their applications in [field].</p>
              <div className="mt-4 pt-4 border-t border-primary-100">
                <h4 className="text-md font-medium text-primary-800 mb-2">Key Takeaways:</h4>
                <ul className="list-disc pl-5 text-primary-700 space-y-1">
                  <li>First major point from the document</li>
                  <li>Second major concept explained</li>
                  <li>Important application or example highlighted</li>
                </ul>
              </div>
            </div>
            
            {/* Practice Questions */}
            <div className="border border-primary-100 rounded-lg p-4">
              <h3 className="text-lg font-medium text-primary-800 mb-3">Practice Questions</h3>
              <div className="space-y-4">
                <div className="bg-primary-50 p-3 rounded-md">
                  <p className="font-medium text-primary-900">Question 1:</p>
                  <p className="text-primary-700 mt-1">Sample question based on the document content?</p>
                  <button className="text-primary-600 hover:text-primary-800 text-sm font-medium mt-2">
                    Show Answer
                  </button>
                </div>
                
                <div className="bg-primary-50 p-3 rounded-md">
                  <p className="font-medium text-primary-900">Question 2:</p>
                  <p className="text-primary-700 mt-1">Another sample question to test understanding of the material?</p>
                  <button className="text-primary-600 hover:text-primary-800 text-sm font-medium mt-2">
                    Show Answer
                  </button>
                </div>
              </div>
              <button className="btn btn-outline w-full mt-4">
                Generate More Questions
              </button>
            </div>
            
            {/* Ask AI Section */}
            <div className="border border-primary-100 rounded-lg p-4">
              <h3 className="text-lg font-medium text-primary-800 mb-3">Ask AI About This Document</h3>
              <div className="relative">
                <textarea
                  className="input w-full h-20 resize-none"
                  placeholder="Ask a question about this document..."
                ></textarea>
                <button className="absolute right-3 bottom-3 btn btn-primary py-1 px-3">
                  Ask
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentView;
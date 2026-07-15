import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, User, Upload, Download, Send, Plus, Paperclip } from 'lucide-react';
import { mockAssignments } from '../data/mockData';

const AssignmentView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [answer, setAnswer] = useState('');
  
  const assignment = mockAssignments.find(a => a.id === id);
  
  if (!assignment) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)]">
        <h2 className="text-2xl font-bold text-primary-900 mb-4">Assignment Not Found</h2>
        <p className="text-primary-600 mb-6">The assignment you're looking for doesn't exist or has been removed.</p>
        <button
          onClick={() => navigate('/assignments')}
          className="btn btn-primary"
        >
          Back to Assignments
        </button>
      </div>
    );
  }

  const isOverdue = new Date(assignment.dueDate) < new Date();
  
  return (
    <div className="space-y-6 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/assignments')}
            className="mr-3 p-2 rounded-full bg-primary-100 text-primary-600 hover:bg-primary-200 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-primary-900">{assignment.title}</h1>
            <div className="flex items-center gap-2 text-primary-600 mt-1">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                ${assignment.subject === 'physics' ? 'bg-blue-100 text-blue-800' :
                  assignment.subject === 'chemistry' ? 'bg-green-100 text-green-800' :
                  assignment.subject === 'math' ? 'bg-purple-100 text-purple-800' :
                  assignment.subject === 'biology' ? 'bg-red-100 text-red-800' :
                  assignment.subject === 'history' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-primary-100 text-primary-800'
                }`}
              >
                {assignment.subject.charAt(0).toUpperCase() + assignment.subject.slice(1)}
              </span>
              <span>•</span>
              <span className="flex items-center">
                <User size={14} className="mr-1" />
                {assignment.teacher}
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className={`flex items-center px-3 py-1.5 rounded-full text-sm
            ${isOverdue ? 'bg-error-100 text-error-700' : 'bg-warning-100 text-warning-700'}`}
          >
            <Clock size={16} className="mr-1.5" />
            <span>
              {isOverdue ? 'Overdue' : 'Due'}: {new Date(assignment.dueDate).toLocaleDateString()}
            </span>
          </div>
          
          {assignment.status === 'graded' && (
            <div className="flex items-center px-3 py-1.5 rounded-full text-sm bg-success-100 text-success-700">
              Grade: {assignment.grade}
            </div>
          )}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Assignment Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-primary-900 mb-4">Assignment Details</h2>
            <div className="prose max-w-none text-primary-700">
              <p>{assignment.description}</p>
              
              {/* Sample assignment content */}
              <div className="mt-6 space-y-4">
                <h3 className="text-primary-900 font-medium">Instructions:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Read the assigned chapter thoroughly</li>
                  <li>Complete all problems in the given set</li>
                  <li>Show all work and calculations clearly</li>
                  <li>Submit your work in PDF format</li>
                </ul>
                
                <h3 className="text-primary-900 font-medium mt-6">Resources:</h3>
                <div className="space-y-2">
                  <button className="flex items-center text-primary-600 hover:text-primary-800">
                    <Download size={16} className="mr-2" />
                    <span>Download Problem Set</span>
                  </button>
                  <button className="flex items-center text-primary-600 hover:text-primary-800">
                    <Download size={16} className="mr-2" />
                    <span>Reference Materials</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Submission Section */}
          {assignment.status !== 'graded' && (
            <div className="card p-6">
              <h2 className="text-lg font-semibold text-primary-900 mb-4">Your Submission</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">
                    Answer
                  </label>
                  <textarea
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    rows={6}
                    className="input w-full"
                    placeholder="Type your answer here..."
                  />
                </div>
                
                {/* File Attachments */}
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">
                    Attachments
                  </label>
                  <div className="border-2 border-dashed border-primary-200 rounded-lg p-6 text-center">
                    <div className="flex flex-col items-center">
                      <Upload className="h-8 w-8 text-primary-400 mb-2" />
                      <p className="text-primary-600 mb-2">Drag and drop your files here, or</p>
                      <button className="btn btn-outline">
                        <Plus size={16} className="mr-1" />
                        Add Files
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-4">
                  <div className="flex items-center text-sm text-primary-500">
                    <Paperclip size={16} className="mr-1" />
                    <span>Maximum file size: 10MB</span>
                  </div>
                  <button className="btn btn-primary flex items-center">
                    <Send size={16} className="mr-2" />
                    Submit Assignment
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Feedback Section */}
          {assignment.status === 'graded' && assignment.feedback && (
            <div className="card p-6">
              <h2 className="text-lg font-semibold text-primary-900 mb-4">Feedback</h2>
              <div className="bg-success-50 border border-success-200 rounded-lg p-4">
                <p className="text-success-800">{assignment.feedback}</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status Card */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-primary-900 mb-4">Submission Status</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-primary-100">
                <span className="text-primary-600">Status</span>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${assignment.status === 'pending' ? 'bg-warning-100 text-warning-700' :
                    assignment.status === 'submitted' ? 'bg-success-100 text-success-700' :
                    'bg-primary-100 text-primary-700'
                  }`}
                >
                  {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                </span>
              </div>
              
              <div className="flex justify-between items-center pb-4 border-b border-primary-100">
                <span className="text-primary-600">Due Date</span>
                <span className="text-primary-900">{new Date(assignment.dueDate).toLocaleDateString()}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-primary-600">Time Remaining</span>
                <span className={`text-sm font-medium ${isOverdue ? 'text-error-600' : 'text-warning-600'}`}>
                  {isOverdue ? 'Overdue' : '2 days left'}
                </span>
              </div>
            </div>
          </div>
          
          {/* AI Assistant */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-primary-900 mb-4">AI Assistant</h3>
            <p className="text-primary-600 text-sm mb-4">
              Need help with this assignment? Our AI assistant can help you understand the concepts better.
            </p>
            <button className="btn btn-primary w-full">
              Get AI Help
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentView;
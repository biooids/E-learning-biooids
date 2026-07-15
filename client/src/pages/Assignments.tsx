import React, { useState } from 'react';
import { Search, Filter, ClipboardList, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockAssignments } from '../data/mockData';

const Assignments: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pending' | 'submitted' | 'graded'>('pending');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAssignments = mockAssignments.filter(assignment => {
    const matchesSearch = assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         assignment.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = assignment.status === activeTab;
    return matchesSearch && matchesStatus;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-5 w-5 text-warning-500" />;
      case 'submitted':
        return <CheckCircle className="h-5 w-5 text-success-500" />;
      case 'graded':
        return <ClipboardList className="h-5 w-5 text-primary-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8 pb-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary-900">Assignments</h1>
          <p className="text-primary-600 mt-1">Manage your coursework and track your progress</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-primary-100 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-primary-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search assignments..."
              className="input pl-10 w-full"
            />
          </div>
          
          <div className="flex gap-4">
            <select className="input pr-8 appearance-none bg-right bg-no-repeat"
                    style={{ backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5 7.5L10 12.5L15 7.5\" stroke=\"%236B7280\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>')" }}
            >
              <option value="due-date">Due Date</option>
              <option value="subject">Subject</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>

        {/* Status tabs */}
        <div className="flex space-x-4 mt-4">
          <button
            onClick={() => setActiveTab('pending')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'pending'
                ? 'bg-warning-500 text-white'
                : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setActiveTab('submitted')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'submitted'
                ? 'bg-success-500 text-white'
                : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
            }`}
          >
            Submitted
          </button>
          <button
            onClick={() => setActiveTab('graded')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'graded'
                ? 'bg-primary-600 text-white'
                : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
            }`}
          >
            Graded
          </button>
        </div>
      </div>

      {/* Assignments List */}
      <div className="space-y-4">
        {filteredAssignments.map(assignment => (
          <Link
            key={assignment.id}
            to={`/assignments/${assignment.id}`}
            className="block"
          >
            <div className="card p-5 hover:border-primary-300 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(assignment.status)}
                    <h3 className="text-lg font-medium text-primary-900">{assignment.title}</h3>
                  </div>
                  
                  <div className="mt-2 space-y-2">
                    <p className="text-primary-600 text-sm">{assignment.description}</p>
                    
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center text-sm text-primary-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center text-sm text-primary-500">
                        <User className="h-4 w-4 mr-1" />
                        <span>{assignment.teacher}</span>
                      </div>
                      {assignment.grade && (
                        <div className="flex items-center text-sm font-medium text-success-600">
                          <span>Grade: {assignment.grade}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
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
                </div>
              </div>
            </div>
          </Link>
        ))}

        {filteredAssignments.length === 0 && (
          <div className="text-center py-12">
            <ClipboardList className="h-16 w-16 text-primary-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-primary-900 mb-2">No assignments found</h3>
            <p className="text-primary-500">
              {searchQuery
                ? "Try adjusting your search to find what you're looking for."
                : `No ${activeTab} assignments at the moment.`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Assignments;

const User: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
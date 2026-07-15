import React, { useState } from 'react';
import { FolderOpen, FileUp, Search, Filter, Plus, Folder, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import DocumentCard from '../components/document/DocumentCard';
import SubjectFilter from '../components/document/SubjectFilter';
import { mockDocuments, subjects } from '../data/mockData';
import { Document } from '../types';

const Documents: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [currentFolder, setCurrentFolder] = useState<Document | null>(null);
  
  // Get current documents based on folder navigation
  const currentDocuments = currentFolder ? currentFolder.items || [] : mockDocuments;
  
  // Filter documents based on search query and selected subject
  const filteredDocuments = currentDocuments.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = selectedSubject ? doc.subject === selectedSubject : true;
    
    return matchesSearch && matchesSubject;
  });
  
  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            {currentFolder && (
              <button
                onClick={() => setCurrentFolder(null)}
                className="p-2 rounded-full bg-primary-100 text-primary-600 hover:bg-primary-200 transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
            )}
            <div>
              <h1 className="text-3xl font-bold text-primary-900">
                {currentFolder ? currentFolder.title : 'Documents'}
              </h1>
              <p className="text-primary-600 mt-1">
                {currentFolder ? currentFolder.description : 'Manage and organize your academic documents'}
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <button 
            className="btn btn-outline flex items-center"
            onClick={() => setShowUploadModal(true)}
          >
            <FileUp size={18} className="mr-2" />
            <span>Upload</span>
          </button>
          <button className="btn btn-primary flex items-center">
            <Plus size={18} className="mr-2" />
            <span>New Folder</span>
          </button>
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
              placeholder="Search documents..."
              className="input pl-10 w-full"
            />
          </div>
          
          <div className="flex gap-4">
            <div className="relative">
              <button className="btn btn-outline flex items-center">
                <Filter size={18} className="mr-2" />
                <span>Filters</span>
              </button>
            </div>
            
            <select className="input pr-8 appearance-none bg-right bg-no-repeat" 
                   style={{ backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5 7.5L10 12.5L15 7.5\" stroke=\"%236B7280\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>')" }}
            >
              <option value="recent">Recently Updated</option>
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="date-asc">Date (Oldest)</option>
              <option value="date-desc">Date (Newest)</option>
            </select>
          </div>
        </div>
        
        {/* Subject filters */}
        {!currentFolder && (
          <div className="mt-4 flex flex-wrap gap-2">
            {subjects.map(subject => (
              <SubjectFilter
                key={subject.id}
                name={subject.name}
                color={subject.color}
                isSelected={selectedSubject === subject.id}
                onClick={() => setSelectedSubject(selectedSubject === subject.id ? null : subject.id)}
              />
            ))}
          </div>
        )}
      </div>
      
      {/* Documents grid */}
      {filteredDocuments.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredDocuments.map(doc => (
            doc.type === 'folder' ? (
              <div
                key={doc.id}
                onClick={() => setCurrentFolder(doc)}
                className="card group transition-all duration-300 hover:translate-y-[-4px] cursor-pointer"
              >
                <div className="flex items-center justify-between p-4 border-b border-primary-100">
                  <div className="flex items-center">
                    <div className="rounded-md p-2 bg-primary-100">
                      <Folder className="h-5 w-5 text-primary-600" />
                    </div>
                    <span className={`subject-tag ml-2 ${getSubjectStyle(doc.subject)}`}>
                      {doc.subject.charAt(0).toUpperCase() + doc.subject.slice(1)}
                    </span>
                  </div>
                  <button className="text-primary-400 hover:text-primary-600 p-1 rounded-full hover:bg-primary-100 transition-colors">
                    <MoreVertical size={18} />
                  </button>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-medium text-primary-900 line-clamp-1">{doc.title}</h3>
                  <p className="text-primary-600 text-sm mt-1 line-clamp-2">{doc.description}</p>
                  
                  <div className="flex items-center mt-4 text-xs text-primary-500">
                    <FileText size={14} className="mr-1" />
                    <span>{doc.items?.length || 0} items</span>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-primary-100 flex justify-between items-center">
                    <div className="text-xs text-primary-500">Updated {doc.date}</div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                        Open
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <DocumentCard key={doc.id} document={doc} />
            )
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <FolderOpen className="h-16 w-16 text-primary-300 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-primary-900 mb-2">No documents found</h3>
          <p className="text-primary-500 max-w-md mx-auto">
            {searchQuery || selectedSubject
              ? "Try adjusting your search or filters to find what you're looking for."
              : "You don't have any documents yet. Upload your first document to get started."}
          </p>
          <button 
            className="btn btn-primary mt-4"
            onClick={() => setShowUploadModal(true)}
          >
            Upload Document
          </button>
        </div>
      )}
    </div>
  );
};

export default Documents;

const ArrowLeft: React.FC<{ size: number }> = ({ size }) => (
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
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

const MoreVertical: React.FC<{ size: number }> = ({ size }) => (
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
    <circle cx="12" cy="12" r="1" />
    <circle cx="12" cy="5" r="1" />
    <circle cx="12" cy="19" r="1" />
  </svg>
);

const getSubjectStyle = (subject: string) => {
  switch (subject) {
    case 'physics':
      return 'bg-blue-100 text-blue-700';
    case 'chemistry':
      return 'bg-green-100 text-green-700';
    case 'math':
      return 'bg-purple-100 text-purple-700';
    case 'biology':
      return 'bg-red-100 text-red-700';
    case 'history':
      return 'bg-yellow-100 text-yellow-700';
    case 'literature':
      return 'bg-indigo-100 text-indigo-700';
    default:
      return 'bg-primary-100 text-primary-700';
  }
};
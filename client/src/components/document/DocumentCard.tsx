import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, MoreVertical, Clock } from 'lucide-react';
import { Document } from '../../types';

interface DocumentCardProps {
  document: Document;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ document }) => {
  // Get subject tag style based on subject
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
  
  return (
    <div className="card group transition-all duration-300 hover:translate-y-[-4px]">
      <div className="flex items-center justify-between p-4 border-b border-primary-100">
        <div className="flex items-center">
          <div className="rounded-md p-2 bg-primary-100">
            <FileText className="h-5 w-5 text-primary-600" />
          </div>
          <span className={`subject-tag ml-2 ${getSubjectStyle(document.subject)}`}>
            {document.subject.charAt(0).toUpperCase() + document.subject.slice(1)}
          </span>
        </div>
        <button className="text-primary-400 hover:text-primary-600 p-1 rounded-full hover:bg-primary-100 transition-colors">
          <MoreVertical size={18} />
        </button>
      </div>
      
      <Link to={`/documents/${document.id}`} className="block p-4">
        <h3 className="text-lg font-medium text-primary-900 line-clamp-1">{document.title}</h3>
        <p className="text-primary-600 text-sm mt-1 line-clamp-2">{document.description}</p>
        
        <div className="flex items-center mt-4 text-xs text-primary-500">
          <Clock size={14} className="mr-1" />
          <span>Updated {document.date}</span>
        </div>
        
        <div className="mt-4 pt-4 border-t border-primary-100 flex justify-between items-center">
          <div className="text-xs text-primary-500">{document.pages} pages</div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">
              Open
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DocumentCard;
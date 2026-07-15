import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookX, ChevronLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] text-center px-4">
      <BookX className="h-24 w-24 text-primary-300 mb-6" />
      <h1 className="text-4xl font-bold text-primary-900 mb-2">Page Not Found</h1>
      <p className="text-primary-600 max-w-md mb-8">
        We couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate('/')}
          className="btn btn-primary flex items-center justify-center"
        >
          <ChevronLeft size={20} className="mr-2" />
          Back to Dashboard
        </button>
        <button
          onClick={() => navigate('/documents')}
          className="btn btn-outline flex items-center justify-center"
        >
          View Documents
        </button>
      </div>
    </div>
  );
};

export default NotFound;
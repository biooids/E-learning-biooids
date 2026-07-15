import React from 'react';
import { X } from 'lucide-react';

interface SubjectFilterProps {
  name: string;
  color: string;
  isSelected: boolean;
  onClick: () => void;
}

const SubjectFilter: React.FC<SubjectFilterProps> = ({ name, color, isSelected, onClick }) => {
  // Get color classes based on subject color and selection state
  const getColorClasses = (color: string, isSelected: boolean) => {
    if (isSelected) {
      switch (color) {
        case 'blue':
          return 'bg-blue-500 text-white';
        case 'green':
          return 'bg-green-500 text-white';
        case 'purple':
          return 'bg-purple-500 text-white';
        case 'red':
          return 'bg-red-500 text-white';
        case 'yellow':
          return 'bg-yellow-500 text-white';
        case 'indigo':
          return 'bg-indigo-500 text-white';
        default:
          return 'bg-primary-600 text-white';
      }
    } else {
      switch (color) {
        case 'blue':
          return 'bg-blue-100 text-blue-700 hover:bg-blue-200';
        case 'green':
          return 'bg-green-100 text-green-700 hover:bg-green-200';
        case 'purple':
          return 'bg-purple-100 text-purple-700 hover:bg-purple-200';
        case 'red':
          return 'bg-red-100 text-red-700 hover:bg-red-200';
        case 'yellow':
          return 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200';
        case 'indigo':
          return 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200';
        default:
          return 'bg-primary-100 text-primary-700 hover:bg-primary-200';
      }
    }
  };
  
  const colorClasses = getColorClasses(color, isSelected);
  
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors ${colorClasses}`}
    >
      {name}
      {isSelected && (
        <X size={14} className="ml-1" />
      )}
    </button>
  );
};

export default SubjectFilter;
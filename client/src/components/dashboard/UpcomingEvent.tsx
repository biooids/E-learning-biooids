import React from 'react';

interface UpcomingEventProps {
  title: string;
  date: string;
  time: string;
  category: 'Exam' | 'Assignment' | 'Meeting' | string;
}

const UpcomingEvent: React.FC<UpcomingEventProps> = ({ title, date, time, category }) => {
  // Get category color
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'exam':
        return 'bg-error-500 text-white';
      case 'assignment':
        return 'bg-secondary-500 text-white';
      case 'meeting':
        return 'bg-primary-500 text-white';
      default:
        return 'bg-primary-100 text-primary-700';
    }
  };
  
  return (
    <div className="flex border-b border-primary-100 pb-3">
      <div className="flex-shrink-0 mr-3">
        <div className="flex flex-col items-center justify-center w-12 h-12 border border-primary-200 rounded-md bg-primary-50">
          <span className="text-sm font-bold text-primary-700">
            {date.split(',')[0].split(' ')[1]}
          </span>
          <span className="text-xs text-primary-500">
            {date.split(',')[0].split(' ')[0]}
          </span>
        </div>
      </div>
      
      <div className="flex-1">
        <h4 className="text-sm font-medium text-primary-900">{title}</h4>
        <div className="flex items-center mt-1">
          <span className="text-xs text-primary-500 mr-2">{time}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${getCategoryColor(category)}`}>
            {category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
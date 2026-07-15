import React from 'react';

// A simple component to simulate a progress chart
// In a real app, you might use a charting library like Chart.js or recharts
const ProgressChart: React.FC = () => {
  // Simulated data for each day of the week
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const values = [65, 40, 85, 30, 55, 25, 70];
  const maxValue = 100;
  
  return (
    <div className="w-full">
      <div className="flex items-end justify-between h-40 mb-2">
        {days.map((day, index) => (
          <div key={day} className="flex flex-col items-center flex-1">
            <div 
              className="w-full max-w-[30px] bg-primary-200 rounded-t-sm"
              style={{ 
                height: `${(values[index] / maxValue) * 100}%`,
                background: `linear-gradient(to top, #8B5D31, #C08E49)`
              }}
            ></div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between">
        {days.map((day) => (
          <div key={day} className="text-xs text-primary-500 text-center flex-1">
            {day}
          </div>
        ))}
      </div>
      
      <div className="flex justify-between mt-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-primary-700 mr-2"></div>
          <span className="text-sm text-primary-700">Study Hours</span>
        </div>
        <div className="text-sm font-medium text-primary-900">
          Total: 25.5 hours
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;
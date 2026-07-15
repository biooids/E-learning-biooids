import React from 'react';
import { Sparkles, Clock, BookOpenCheck, BookOpen, Trophy, Calendar } from 'lucide-react';
import DocumentCard from '../components/document/DocumentCard';
import UpcomingEvent from '../components/dashboard/UpcomingEvent';
import ProgressChart from '../components/dashboard/ProgressChart';
import { mockDocuments } from '../data/mockData';

const Dashboard: React.FC = () => {
  const recentDocuments = mockDocuments.slice(0, 4);
  
  return (
    <div className="space-y-8 pb-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-primary-900">Dashboard</h1>
        <div className="flex space-x-2">
          <button className="btn btn-primary flex items-center">
            <Sparkles size={18} className="mr-2" />
            <span>New AI Session</span>
          </button>
        </div>
      </div>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card p-5 flex items-center">
          <div className="rounded-full bg-primary-100 p-3 mr-4">
            <BookOpen className="h-6 w-6 text-primary-600" />
          </div>
          <div>
            <p className="text-sm text-primary-500">Documents</p>
            <p className="text-2xl font-semibold text-primary-900">24</p>
          </div>
        </div>
        
        <div className="card p-5 flex items-center">
          <div className="rounded-full bg-secondary-100 p-3 mr-4">
            <BookOpenCheck className="h-6 w-6 text-secondary-600" />
          </div>
          <div>
            <p className="text-sm text-primary-500">Completed</p>
            <p className="text-2xl font-semibold text-primary-900">18</p>
          </div>
        </div>
        
        <div className="card p-5 flex items-center">
          <div className="rounded-full bg-accent-100 p-3 mr-4">
            <Trophy className="h-6 w-6 text-accent-600" />
          </div>
          <div>
            <p className="text-sm text-primary-500">Applications</p>
            <p className="text-2xl font-semibold text-primary-900">5</p>
          </div>
        </div>
        
        <div className="card p-5 flex items-center">
          <div className="rounded-full bg-primary-100 p-3 mr-4">
            <Clock className="h-6 w-6 text-primary-600" />
          </div>
          <div>
            <p className="text-sm text-primary-500">Study Hours</p>
            <p className="text-2xl font-semibold text-primary-900">42</p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Documents */}
        <div className="lg:col-span-2 space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-primary-900">Recent Documents</h2>
            <a href="/documents" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              View All
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {recentDocuments.map((doc) => (
              <DocumentCard key={doc.id} document={doc} />
            ))}
          </div>
          
          {/* Study Progress */}
          <div className="card p-5 mt-6">
            <h3 className="text-lg font-semibold text-primary-900 mb-4">Weekly Study Progress</h3>
            <ProgressChart />
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Events */}
          <div className="card p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-primary-900">Upcoming Events</h3>
              <Calendar size={18} className="text-primary-500" />
            </div>
            
            <div className="space-y-4">
              <UpcomingEvent 
                title="Physics Exam"
                date="Oct 15, 2025"
                time="10:00 AM"
                category="Exam"
              />
              <UpcomingEvent 
                title="Chemistry Lab Report Due"
                date="Oct 17, 2025"
                time="11:59 PM"
                category="Assignment"
              />
              <UpcomingEvent 
                title="Math Study Group"
                date="Oct 18, 2025"
                time="3:00 PM"
                category="Meeting"
              />
            </div>
            
            <button className="btn btn-outline w-full mt-4">
              Add New Event
            </button>
          </div>
          
          {/* Scholarship Alert */}
          <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">New Scholarship Alert!</h3>
            <p className="text-sm text-secondary-700 mb-3">
              STEM Excellence Scholarship applications are now open. Deadline in 2 weeks.
            </p>
            <div className="flex space-x-3 mt-4">
              <button className="btn bg-secondary-600 text-white hover:bg-secondary-700 flex-1">
                Apply Now
              </button>
              <button className="btn btn-outline border-secondary-300 text-secondary-700 hover:bg-secondary-50">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
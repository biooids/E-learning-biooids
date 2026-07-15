import React, { useState } from 'react';
import { User, Mail, Phone, Book, Calendar, Award, School, Settings, BookOpen, FileText } from 'lucide-react';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'documents' | 'settings'>('profile');
  
  // Dummy user data
  const user = {
    name: 'Jane Smith',
    email: 'jane.smith@university.edu',
    phone: '+1 (234) 567-8901',
    university: 'State University',
    major: 'Computer Science',
    year: 'Junior',
    gpa: '3.8',
    activities: ['Robotics Club', 'Student Government', 'Math Tutoring'],
    about: 'Computer Science student with a passion for AI and machine learning. Looking for research opportunities and scholarships to further my education.',
  };
  
  // Mock stats
  const stats = [
    { label: 'Documents', value: 24, icon: <FileText size={16} /> },
    { label: 'Courses', value: 8, icon: <BookOpen size={16} /> },
    { label: 'Study Hours', value: 143, icon: <Clock size={16} /> },
    { label: 'Scholarships', value: 3, icon: <Award size={16} /> },
  ];
  
  return (
    <div className="space-y-8 pb-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-primary-900">My Profile</h1>
      </div>
      
      {/* User Info Banner */}
      <div className="bg-white rounded-lg shadow-sm border border-primary-100 p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="relative">
            <div className="h-24 w-24 md:h-32 md:w-32 rounded-full bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center text-white text-3xl md:text-4xl font-semibold">
              {user.name.split(' ').map(n => n[0]).join('')}
            </div>
            <button className="absolute bottom-0 right-0 p-1.5 bg-white rounded-full border border-primary-200 shadow-sm">
              <Settings size={16} className="text-primary-700" />
            </button>
          </div>
          
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-primary-900">{user.name}</h2>
            <p className="text-primary-600 mt-1 flex items-center">
              <School className="h-4 w-4 mr-2" />
              {user.university} • {user.major} • {user.year}
            </p>
            
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center text-primary-700">
                <Mail className="h-4 w-4 mr-2 text-primary-500" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center text-primary-700">
                <Phone className="h-4 w-4 mr-2 text-primary-500" />
                <span>{user.phone}</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button className="btn btn-primary">
              Edit Profile
            </button>
            <button className="btn btn-outline">
              View Resume
            </button>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="border-b border-primary-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('profile')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'profile'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-primary-500 hover:text-primary-700 hover:border-primary-300'
            }`}
          >
            <User size={16} className="inline mr-2" />
            Profile
          </button>
          <button
            onClick={() => setActiveTab('documents')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'documents'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-primary-500 hover:text-primary-700 hover:border-primary-300'
            }`}
          >
            <Book size={16} className="inline mr-2" />
            Documents
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'settings'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-primary-500 hover:text-primary-700 hover:border-primary-300'
            }`}
          >
            <Settings size={16} className="inline mr-2" />
            Settings
          </button>
        </nav>
      </div>
      
      {/* Tab Content */}
      {activeTab === 'profile' && (
        <>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg border border-primary-100 p-4 flex flex-col items-center">
                <div className="rounded-full bg-primary-100 p-2 mb-2">
                  {stat.icon}
                </div>
                <span className="text-2xl font-bold text-primary-900">{stat.value}</span>
                <span className="text-sm text-primary-500">{stat.label}</span>
              </div>
            ))}
          </div>
          
          {/* About and Activities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white rounded-lg shadow-sm border border-primary-100 p-6">
              <h3 className="text-lg font-semibold text-primary-900 mb-4">About Me</h3>
              <p className="text-primary-700">{user.about}</p>
              
              <div className="mt-6 pt-5 border-t border-primary-100">
                <h4 className="text-md font-medium text-primary-900 mb-3">Academic Interests</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Artificial Intelligence</span>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Machine Learning</span>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Data Science</span>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Web Development</span>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Cybersecurity</span>
                </div>
              </div>
              
              <div className="mt-6 pt-5 border-t border-primary-100">
                <h4 className="text-md font-medium text-primary-900 mb-3">Educational Background</h4>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <School className="h-5 w-5 text-primary-600" />
                    </div>
                    <div className="ml-3">
                      <h5 className="text-sm font-medium text-primary-900">State University</h5>
                      <p className="text-sm text-primary-500">Bachelor of Science in Computer Science</p>
                      <p className="text-xs text-primary-500">2023 - Present</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <School className="h-5 w-5 text-primary-600" />
                    </div>
                    <div className="ml-3">
                      <h5 className="text-sm font-medium text-primary-900">Central High School</h5>
                      <p className="text-sm text-primary-500">High School Diploma</p>
                      <p className="text-xs text-primary-500">2019 - 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-primary-100 p-6">
              <h3 className="text-lg font-semibold text-primary-900 mb-4">Activities & Achievements</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-md font-medium text-primary-900 mb-2">Extracurricular Activities</h4>
                  <ul className="space-y-2">
                    {user.activities.map((activity, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="h-2 w-2 rounded-full bg-primary-600"></div>
                        </div>
                        <span className="ml-2 text-primary-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-5 pt-5 border-t border-primary-100">
                  <h4 className="text-md font-medium text-primary-900 mb-2">Awards</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Award className="h-5 w-5 text-secondary-600 mr-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-primary-900">Dean's List</p>
                        <p className="text-xs text-primary-500">Fall 2023, Spring 2024</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Award className="h-5 w-5 text-secondary-600 mr-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-primary-900">Hackathon Winner</p>
                        <p className="text-xs text-primary-500">State University Tech Fest 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-5 pt-5 border-t border-primary-100">
                  <h4 className="text-md font-medium text-primary-900 mb-2">Skills</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-primary-700">Python</span>
                        <span className="text-xs text-primary-500">90%</span>
                      </div>
                      <div className="h-1.5 bg-primary-100 rounded-full">
                        <div className="h-1.5 bg-primary-600 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-primary-700">Java</span>
                        <span className="text-xs text-primary-500">75%</span>
                      </div>
                      <div className="h-1.5 bg-primary-100 rounded-full">
                        <div className="h-1.5 bg-primary-600 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-primary-700">Web Development</span>
                        <span className="text-xs text-primary-500">85%</span>
                      </div>
                      <div className="h-1.5 bg-primary-100 rounded-full">
                        <div className="h-1.5 bg-primary-600 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      
      {activeTab === 'documents' && (
        <div className="bg-white rounded-lg shadow-sm border border-primary-100 p-6">
          <h3 className="text-lg font-semibold text-primary-900 mb-4">My Documents</h3>
          <p className="text-primary-600">Manage your uploaded documents, notes, and submissions.</p>
          
          {/* This would contain document management UI */}
          <p className="text-primary-500 text-center py-10">Document management interface would be displayed here.</p>
        </div>
      )}
      
      {activeTab === 'settings' && (
        <div className="bg-white rounded-lg shadow-sm border border-primary-100 p-6">
          <h3 className="text-lg font-semibold text-primary-900 mb-4">Account Settings</h3>
          <p className="text-primary-600">Manage your account preferences, notifications, and privacy settings.</p>
          
          {/* This would contain settings UI */}
          <p className="text-primary-500 text-center py-10">Settings interface would be displayed here.</p>
        </div>
      )}
    </div>
  );
};

export default Profile;

const Clock: React.FC<{ size: number }> = ({ size }) => (
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
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
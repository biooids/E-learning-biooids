import React, { useState } from 'react';
import { Users, BookOpen, ClipboardList, Calendar, Plus, Search, Filter, MoreVertical, Eye, Edit, Trash2, Send, Clock, CheckCircle, XCircle, Award, TrendingUp, FileText, MessageSquare } from 'lucide-react';

interface Student {
  id: string;
  name: string;
  email: string;
  avatar: string;
  class: string;
  grade: string;
  attendance: number;
  assignments: {
    submitted: number;
    pending: number;
    graded: number;
  };
}

interface Class {
  id: string;
  name: string;
  subject: string;
  students: number;
  schedule: string;
  room: string;
  nextClass: string;
}

interface Assignment {
  id: string;
  title: string;
  class: string;
  dueDate: string;
  submissions: number;
  totalStudents: number;
  status: 'active' | 'draft' | 'closed';
}

const mockStudents: Student[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice.johnson@student.edu',
    avatar: 'AJ',
    class: 'Physics 101',
    grade: 'A',
    attendance: 95,
    assignments: { submitted: 8, pending: 2, graded: 6 }
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob.smith@student.edu',
    avatar: 'BS',
    class: 'Physics 101',
    grade: 'B+',
    attendance: 88,
    assignments: { submitted: 7, pending: 3, graded: 5 }
  },
  {
    id: '3',
    name: 'Carol Davis',
    email: 'carol.davis@student.edu',
    avatar: 'CD',
    class: 'Chemistry 201',
    grade: 'A-',
    attendance: 92,
    assignments: { submitted: 9, pending: 1, graded: 8 }
  }
];

const mockClasses: Class[] = [
  {
    id: '1',
    name: 'Physics 101',
    subject: 'Physics',
    students: 28,
    schedule: 'Mon, Wed, Fri 10:00 AM',
    room: 'Room 204',
    nextClass: 'Today at 10:00 AM'
  },
  {
    id: '2',
    name: 'Chemistry 201',
    subject: 'Chemistry',
    students: 24,
    schedule: 'Tue, Thu 2:00 PM',
    room: 'Lab 301',
    nextClass: 'Tomorrow at 2:00 PM'
  },
  {
    id: '3',
    name: 'Advanced Physics',
    subject: 'Physics',
    students: 15,
    schedule: 'Wed 4:00 PM',
    room: 'Room 205',
    nextClass: 'Wed at 4:00 PM'
  }
];

const mockAssignments: Assignment[] = [
  {
    id: '1',
    title: 'Quantum Mechanics Problem Set',
    class: 'Physics 101',
    dueDate: '2025-10-20',
    submissions: 22,
    totalStudents: 28,
    status: 'active'
  },
  {
    id: '2',
    title: 'Lab Report: Chemical Reactions',
    class: 'Chemistry 201',
    dueDate: '2025-10-18',
    submissions: 20,
    totalStudents: 24,
    status: 'active'
  },
  {
    id: '3',
    title: 'Thermodynamics Essay',
    class: 'Advanced Physics',
    dueDate: '2025-10-25',
    submissions: 0,
    totalStudents: 15,
    status: 'draft'
  }
];

const TeacherDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'students' | 'classes' | 'assignments'>('overview');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'overview', name: 'Overview', icon: <TrendingUp size={16} /> },
    { id: 'students', name: 'Students', icon: <Users size={16} /> },
    { id: 'classes', name: 'Classes', icon: <BookOpen size={16} /> },
    { id: 'assignments', name: 'Assignments', icon: <ClipboardList size={16} /> }
  ];

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'text-success-600 bg-success-100';
    if (grade.startsWith('B')) return 'text-blue-600 bg-blue-100';
    if (grade.startsWith('C')) return 'text-warning-600 bg-warning-100';
    return 'text-error-600 bg-error-100';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-success-600 bg-success-100';
      case 'draft': return 'text-warning-600 bg-warning-100';
      case 'closed': return 'text-primary-600 bg-primary-100';
      default: return 'text-primary-600 bg-primary-100';
    }
  };

  return (
    <div className="space-y-8 pb-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary-900">Teacher Dashboard</h1>
          <p className="text-primary-600 mt-1">Manage your classes, students, and assignments</p>
        </div>
        
        <div className="flex space-x-3">
          <button className="btn btn-outline flex items-center">
            <MessageSquare size={18} className="mr-2" />
            Messages
          </button>
          <button className="btn btn-primary flex items-center">
            <Plus size={18} className="mr-2" />
            Create Assignment
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-primary-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
                activeTab === tab.id
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-primary-500 hover:text-primary-700 hover:border-primary-300'
              }`}
            >
              {tab.icon}
              <span className="ml-2">{tab.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="card p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-primary-500">Total Students</p>
                  <p className="text-2xl font-semibold text-primary-900">67</p>
                </div>
                <div className="rounded-full bg-blue-100 p-3">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </div>
            
            <div className="card p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-primary-500">Active Classes</p>
                  <p className="text-2xl font-semibold text-primary-900">3</p>
                </div>
                <div className="rounded-full bg-green-100 p-3">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </div>
            
            <div className="card p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-primary-500">Pending Grading</p>
                  <p className="text-2xl font-semibold text-primary-900">15</p>
                </div>
                <div className="rounded-full bg-warning-100 p-3">
                  <ClipboardList className="h-6 w-6 text-warning-600" />
                </div>
              </div>
            </div>
            
            <div className="card p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-primary-500">Avg. Attendance</p>
                  <p className="text-2xl font-semibold text-primary-900">92%</p>
                </div>
                <div className="rounded-full bg-purple-100 p-3">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-primary-900 mb-4">Upcoming Classes</h3>
              <div className="space-y-3">
                {mockClasses.slice(0, 3).map(cls => (
                  <div key={cls.id} className="flex items-center justify-between p-3 bg-primary-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-primary-900">{cls.name}</h4>
                      <p className="text-sm text-primary-600">{cls.nextClass} • {cls.room}</p>
                    </div>
                    <span className="text-sm font-medium text-primary-700">{cls.students} students</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold text-primary-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="rounded-full bg-success-100 p-1 mr-3 mt-1">
                    <CheckCircle size={12} className="text-success-600" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-900">Alice Johnson submitted Physics assignment</p>
                    <p className="text-xs text-primary-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-blue-100 p-1 mr-3 mt-1">
                    <FileText size={12} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-900">New assignment created for Chemistry 201</p>
                    <p className="text-xs text-primary-500">5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-warning-100 p-1 mr-3 mt-1">
                    <Clock size={12} className="text-warning-600" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-900">Assignment deadline reminder sent</p>
                    <p className="text-xs text-primary-500">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Students Tab */}
      {activeTab === 'students' && (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-primary-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search students..."
                className="input pl-10 w-full"
              />
            </div>
            <div className="flex gap-3">
              <button className="btn btn-outline flex items-center">
                <Filter size={18} className="mr-2" />
                Filter
              </button>
              <button className="btn btn-primary flex items-center">
                <Plus size={18} className="mr-2" />
                Add Student
              </button>
            </div>
          </div>

          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-primary-500 uppercase tracking-wider">Student</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-primary-500 uppercase tracking-wider">Class</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-primary-500 uppercase tracking-wider">Grade</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-primary-500 uppercase tracking-wider">Attendance</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-primary-500 uppercase tracking-wider">Assignments</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-primary-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-primary-200">
                  {mockStudents.map(student => (
                    <tr key={student.id} className="hover:bg-primary-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-medium">
                            {student.avatar}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-primary-900">{student.name}</div>
                            <div className="text-sm text-primary-500">{student.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-900">{student.class}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getGradeColor(student.grade)}`}>
                          {student.grade}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-900">{student.attendance}%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-900">
                        <div className="flex space-x-2">
                          <span className="text-success-600">{student.assignments.submitted} submitted</span>
                          <span className="text-warning-600">{student.assignments.pending} pending</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-primary-600 hover:text-primary-900">
                            <Eye size={16} />
                          </button>
                          <button className="text-primary-600 hover:text-primary-900">
                            <Edit size={16} />
                          </button>
                          <button className="text-error-600 hover:text-error-900">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Classes Tab */}
      {activeTab === 'classes' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-primary-400" />
              </div>
              <input
                type="text"
                placeholder="Search classes..."
                className="input pl-10 w-64"
              />
            </div>
            <button className="btn btn-primary flex items-center">
              <Plus size={18} className="mr-2" />
              Create Class
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockClasses.map(cls => (
              <div key={cls.id} className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-primary-900">{cls.name}</h3>
                  <button className="text-primary-400 hover:text-primary-600">
                    <MoreVertical size={20} />
                  </button>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-primary-600">Subject:</span>
                    <span className="font-medium text-primary-900">{cls.subject}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-600">Students:</span>
                    <span className="font-medium text-primary-900">{cls.students}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-600">Schedule:</span>
                    <span className="font-medium text-primary-900 text-sm">{cls.schedule}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-600">Room:</span>
                    <span className="font-medium text-primary-900">{cls.room}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-primary-100">
                  <p className="text-sm text-primary-600 mb-3">Next class: {cls.nextClass}</p>
                  <div className="flex space-x-2">
                    <button className="btn btn-primary flex-1">Manage</button>
                    <button className="btn btn-outline">View</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Assignments Tab */}
      {activeTab === 'assignments' && (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-primary-400" />
              </div>
              <input
                type="text"
                placeholder="Search assignments..."
                className="input pl-10 w-full"
              />
            </div>
            <div className="flex gap-3">
              <select className="input">
                <option>All Classes</option>
                <option>Physics 101</option>
                <option>Chemistry 201</option>
                <option>Advanced Physics</option>
              </select>
              <button className="btn btn-primary flex items-center">
                <Plus size={18} className="mr-2" />
                New Assignment
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {mockAssignments.map(assignment => (
              <div key={assignment.id} className="card p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-medium text-primary-900">{assignment.title}</h3>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(assignment.status)}`}>
                        {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div>
                        <span className="text-primary-600 text-sm">Class:</span>
                        <p className="font-medium text-primary-900">{assignment.class}</p>
                      </div>
                      <div>
                        <span className="text-primary-600 text-sm">Due Date:</span>
                        <p className="font-medium text-primary-900">{new Date(assignment.dueDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <span className="text-primary-600 text-sm">Submissions:</span>
                        <p className="font-medium text-primary-900">{assignment.submissions}/{assignment.totalStudents}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 ml-4">
                    <button className="btn btn-outline">
                      <Eye size={16} className="mr-2" />
                      View
                    </button>
                    <button className="btn btn-primary">
                      <Edit size={16} className="mr-2" />
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;
import React, { useState } from 'react';
import { Search, Filter, Award, Calendar, Building, Wallet, Globe } from 'lucide-react';
import { mockOpportunities } from '../data/mockData';

const Opportunities: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  
  const filters = [
    { id: 'scholarship', name: 'Scholarships', icon: <Award size={16} className="mr-2" /> },
    { id: 'internship', name: 'Internships', icon: <Building size={16} className="mr-2" /> },
    { id: 'competition', name: 'Competitions', icon: <Trophy size={16} className="mr-2" /> },
    { id: 'exchange', name: 'Exchange Programs', icon: <Globe size={16} className="mr-2" /> },
  ];
  
  // Filter opportunities based on search and filters
  const filteredOpportunities = mockOpportunities.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         opp.organization.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter ? opp.type === selectedFilter : true;
    
    return matchesSearch && matchesFilter;
  });
  
  return (
    <div className="space-y-8 pb-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary-900">Opportunities</h1>
          <p className="text-primary-600 mt-1">Discover scholarships, internships, and academic opportunities</p>
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
              placeholder="Search opportunities..."
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
              <option value="deadline">Deadline (Soonest)</option>
              <option value="amount-desc">Amount (Highest)</option>
              <option value="amount-asc">Amount (Lowest)</option>
              <option value="recent">Recently Added</option>
            </select>
          </div>
        </div>
        
        {/* Type filters */}
        <div className="mt-4 flex flex-wrap gap-2">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(selectedFilter === filter.id ? null : filter.id)}
              className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selectedFilter === filter.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
              }`}
            >
              {filter.icon}
              {filter.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Featured Opportunity */}
      <div className="relative overflow-hidden bg-secondary-600 rounded-lg shadow-lg">
        <div className="absolute inset-0 bg-paper-texture opacity-10"></div>
        <div className="relative p-6 md:p-8 flex flex-col md:flex-row">
          <div className="flex-1 text-white">
            <div className="inline-flex items-center px-2.5 py-1 bg-white bg-opacity-20 rounded-full text-xs font-medium mb-4">
              <Award size={14} className="mr-1.5" />
              Featured Scholarship
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Global Excellence Scholarship 2025</h2>
            <p className="text-secondary-100 mb-6 max-w-2xl">A prestigious scholarship offering full tuition coverage for outstanding students pursuing degrees in STEM fields. Recipients will also receive mentorship and internship opportunities.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Building className="h-5 w-5 text-secondary-200 mr-2" />
                <span className="text-white">Horizon Foundation</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-secondary-200 mr-2" />
                <span className="text-white">Deadline: Dec 15, 2025</span>
              </div>
              <div className="flex items-center">
                <Wallet className="h-5 w-5 text-secondary-200 mr-2" />
                <span className="text-white">$25,000 per year</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-secondary-200 mr-2" />
                <span className="text-white">International Students Eligible</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button className="btn bg-white text-secondary-700 hover:bg-opacity-90">
                Apply Now
              </button>
              <button className="btn border border-white text-white hover:bg-white hover:bg-opacity-10">
                Save for Later
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Opportunities List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-primary-900">Available Opportunities</h2>
        
        <div className="space-y-4">
          {filteredOpportunities.map(opportunity => (
            <div key={opportunity.id} className="card p-5 hover:border-primary-300 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center mb-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      opportunity.type === 'scholarship' ? 'bg-secondary-100 text-secondary-800' :
                      opportunity.type === 'internship' ? 'bg-blue-100 text-blue-800' :
                      opportunity.type === 'competition' ? 'bg-purple-100 text-purple-800' :
                      'bg-primary-100 text-primary-800'
                    }`}>
                      {opportunity.type.charAt(0).toUpperCase() + opportunity.type.slice(1)}
                    </span>
                    <span className="ml-2 text-sm text-primary-500">{opportunity.organization}</span>
                  </div>
                  
                  <h3 className="text-lg font-medium text-primary-900">{opportunity.title}</h3>
                  <p className="text-primary-600 text-sm mt-1">{opportunity.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mt-3">
                    <div className="flex items-center text-sm text-primary-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Deadline: {opportunity.deadline}</span>
                    </div>
                    {opportunity.amount && (
                      <div className="flex items-center text-sm text-primary-500">
                        <Wallet className="h-4 w-4 mr-1" />
                        <span>{opportunity.amount}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex space-x-3 md:flex-col md:space-y-2 md:space-x-0 lg:flex-row lg:space-y-0 lg:space-x-3">
                  <button className="btn btn-primary flex-1 md:w-full">
                    Details
                  </button>
                  <button className="btn btn-outline flex-1 md:w-full">
                    Save
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Opportunities;

const Trophy: React.FC<{ size: number, className?: string }> = ({ size, className }) => (
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
    className={className}
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);
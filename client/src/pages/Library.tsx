import React, { useState } from 'react';
import { Search, Filter, BookOpen, Clock, Download, ShoppingCart, BookMarked, Calendar } from 'lucide-react';

interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
  price: number;
  type: 'buy' | 'rent' | 'free';
  format: 'ebook' | 'physical' | 'both';
  category: string;
  availability: 'available' | 'borrowed' | 'reserved';
  dueDate?: string;
}

const mockBooks: Book[] = [
  {
    id: '1',
    title: 'Introduction to Quantum Mechanics',
    author: 'David J. Griffiths',
    cover: 'https://images.pexels.com/photos/2203051/pexels-photo-2203051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A comprehensive introduction to quantum mechanics principles.',
    price: 79.99,
    type: 'buy',
    format: 'both',
    category: 'Physics',
    availability: 'available'
  },
  {
    id: '2',
    title: 'Organic Chemistry',
    author: 'John McMurry',
    cover: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Essential concepts in organic chemistry with detailed examples.',
    price: 29.99,
    type: 'rent',
    format: 'physical',
    category: 'Chemistry',
    availability: 'borrowed',
    dueDate: '2025-03-15'
  },
  {
    id: '3',
    title: 'Linear Algebra and Its Applications',
    author: 'Gilbert Strang',
    cover: 'https://images.pexels.com/photos/2927596/pexels-photo-2927596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A modern approach to linear algebra with real-world applications.',
    price: 0,
    type: 'free',
    format: 'ebook',
    category: 'Mathematics',
    availability: 'available'
  }
];

const Library: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);
  
  const categories = ['All', 'Physics', 'Chemistry', 'Mathematics', 'Biology', 'Computer Science', 'Literature'];
  const formats = ['All Formats', 'E-Book', 'Physical', 'Both'];

  return (
    <div className="space-y-8 pb-10">
      <div>
        <h1 className="text-3xl font-bold text-primary-900">Library</h1>
        <p className="text-primary-600 mt-1">Access academic books, journals, and resources</p>
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
              placeholder="Search books, journals, and resources..."
              className="input pl-10 w-full"
            />
          </div>
          
          <div className="flex gap-4">
            <select 
              className="input"
              value={selectedCategory || 'All'}
              onChange={(e) => setSelectedCategory(e.target.value === 'All' ? null : e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            
            <select
              className="input"
              value={selectedFormat || 'All Formats'}
              onChange={(e) => setSelectedFormat(e.target.value === 'All Formats' ? null : e.target.value)}
            >
              {formats.map(format => (
                <option key={format} value={format}>{format}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* My Library Section */}
      <div className="bg-white rounded-lg shadow-sm border border-primary-100 p-6">
        <h2 className="text-xl font-semibold text-primary-900 mb-4">My Library</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-primary-100 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-primary-900">Borrowed Books</h3>
              <span className="text-primary-600">2</span>
            </div>
            <div className="flex items-center text-sm text-primary-500">
              <Clock size={16} className="mr-2" />
              <span>Next due: Mar 15, 2025</span>
            </div>
          </div>
          
          <div className="border border-primary-100 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-primary-900">Purchased E-Books</h3>
              <span className="text-primary-600">5</span>
            </div>
            <div className="flex items-center text-sm text-primary-500">
              <Download size={16} className="mr-2" />
              <span>Available offline</span>
            </div>
          </div>
          
          <div className="border border-primary-100 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-primary-900">Reading List</h3>
              <span className="text-primary-600">3</span>
            </div>
            <div className="flex items-center text-sm text-primary-500">
              <BookMarked size={16} className="mr-2" />
              <span>Saved for later</span>
            </div>
          </div>
        </div>
      </div>

      {/* Available Books Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-primary-900">Available Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockBooks.map(book => (
            <div key={book.id} className="card overflow-hidden group">
              <div className="relative h-48">
                <img 
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${book.type === 'free' ? 'bg-success-100 text-success-800' :
                      book.type === 'rent' ? 'bg-warning-100 text-warning-800' :
                      'bg-primary-100 text-primary-800'}`}
                  >
                    {book.type.charAt(0).toUpperCase() + book.type.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-medium text-primary-900">{book.title}</h3>
                <p className="text-primary-600 text-sm">by {book.author}</p>
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary-600">Format:</span>
                    <span className="font-medium text-primary-900">{book.format.charAt(0).toUpperCase() + book.format.slice(1)}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary-600">Status:</span>
                    <span className={`font-medium
                      ${book.availability === 'available' ? 'text-success-600' :
                        book.availability === 'borrowed' ? 'text-warning-600' :
                        'text-error-600'}`}
                    >
                      {book.availability.charAt(0).toUpperCase() + book.availability.slice(1)}
                    </span>
                  </div>
                  
                  {book.dueDate && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-primary-600">Due Date:</span>
                      <span className="font-medium text-primary-900">{book.dueDate}</span>
                    </div>
                  )}
                </div>
                
                <div className="mt-4 pt-4 border-t border-primary-100">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary-900">
                      {book.price === 0 ? 'Free' : `$${book.price.toFixed(2)}`}
                    </span>
                    <button className="btn btn-primary flex items-center">
                      {book.type === 'buy' ? (
                        <>
                          <ShoppingCart size={16} className="mr-2" />
                          Purchase
                        </>
                      ) : book.type === 'rent' ? (
                        <>
                          <Calendar size={16} className="mr-2" />
                          Rent
                        </>
                      ) : (
                        <>
                          <Download size={16} className="mr-2" />
                          Download
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* External Resources */}
      <div className="bg-primary-50 rounded-lg p-6 border border-primary-100">
        <h2 className="text-xl font-semibold text-primary-900 mb-4">External Academic Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="#" className="block bg-white rounded-lg p-4 border border-primary-100 hover:border-primary-300 transition-colors">
            <h3 className="font-medium text-primary-900 mb-1">JSTOR</h3>
            <p className="text-sm text-primary-600">Access academic journals and research papers</p>
          </a>
          
          <a href="#" className="block bg-white rounded-lg p-4 border border-primary-100 hover:border-primary-300 transition-colors">
            <h3 className="font-medium text-primary-900 mb-1">Science Direct</h3>
            <p className="text-sm text-primary-600">Scientific and technical publications</p>
          </a>
          
          <a href="#" className="block bg-white rounded-lg p-4 border border-primary-100 hover:border-primary-300 transition-colors">
            <h3 className="font-medium text-primary-900 mb-1">Google Scholar</h3>
            <p className="text-sm text-primary-600">Search scholarly literature across disciplines</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Library;
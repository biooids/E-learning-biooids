import React, { useState } from 'react';
import { Search, Calendar, BookOpen, UserCircle } from 'lucide-react';
import { mockNews } from '../data/mockData';

const News: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const categories = [
    'All',
    'Research',
    'Scholarships',
    'Events',
    'Faculty',
    'Students',
    'Technology',
  ];
  
  // Filter news based on search query and category
  const filteredNews = mockNews.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !activeCategory || activeCategory === 'All' || article.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Featured article (first article or first matching search result)
  const featuredArticle = filteredNews[0] || mockNews[0];
  
  // Rest of the articles
  const remainingArticles = filteredNews.slice(1);
  
  return (
    <div className="space-y-8 pb-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary-900">Academic News</h1>
          <p className="text-primary-600 mt-1">Stay updated with the latest in academia</p>
        </div>
      </div>
      
      {/* Search */}
      <div className="relative max-w-2xl">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={18} className="text-primary-400" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search news articles..."
          className="input pl-10 w-full"
        />
      </div>
      
      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(activeCategory === category ? null : category)}
            className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category
                ? 'bg-primary-600 text-white'
                : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Featured Article */}
      {featuredArticle && (
        <div className="card overflow-hidden">
          <div className="relative h-64 bg-primary-800 bg-opacity-10">
            <img 
              src={featuredArticle.image} 
              alt={featuredArticle.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-500 text-white mb-3">
                Featured
              </span>
              <h2 className="text-2xl font-bold text-white mb-2">{featuredArticle.title}</h2>
              <div className="flex items-center text-white/80 text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{featuredArticle.date}</span>
                <span className="mx-2">•</span>
                <span>{featuredArticle.category}</span>
              </div>
            </div>
          </div>
          <div className="p-6">
            <p className="text-primary-600 mb-4">{featuredArticle.summary}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-primary-500">
                <UserCircle className="h-5 w-5 mr-2" />
                <span>By {featuredArticle.author}</span>
              </div>
              <button className="btn btn-primary">
                Read Full Article
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {remainingArticles.map(article => (
          <div key={article.id} className="card overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="relative h-40 overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 left-2">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${article.category === 'Research' ? 'bg-blue-500 text-white' :
                    article.category === 'Scholarships' ? 'bg-secondary-500 text-white' :
                    article.category === 'Events' ? 'bg-green-500 text-white' :
                    article.category === 'Faculty' ? 'bg-purple-500 text-white' :
                    article.category === 'Students' ? 'bg-accent-500 text-white' :
                    'bg-primary-500 text-white'
                  }`}
                >
                  {article.category}
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-primary-900 mb-2 line-clamp-2">{article.title}</h3>
              <p className="text-primary-600 text-sm mb-4 line-clamp-3">{article.summary}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-xs text-primary-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{article.date}</span>
                </div>
                <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Newsletter Signup */}
      <div className="bg-primary-800 rounded-lg p-6 text-white mt-10">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Subscribe to Academic Updates</h3>
            <p className="text-primary-200">Get the latest academic news, scholarship opportunities, and research updates delivered to your inbox.</p>
          </div>
          <div className="md:ml-6 flex-shrink-0">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full sm:w-auto px-4 py-2 rounded-md text-primary-900 focus:outline-none focus:ring-2 focus:ring-secondary-500"
              />
              <button className="w-full sm:w-auto btn bg-secondary-500 hover:bg-secondary-600 text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
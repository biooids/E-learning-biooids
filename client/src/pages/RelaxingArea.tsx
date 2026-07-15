import React, { useState } from 'react';
import { Gamepad2, Users, Clock, Trophy, Play, Pause, RotateCcw, Settings } from 'lucide-react';

interface Game {
  id: string;
  name: string;
  description: string;
  players: string;
  duration: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: 'board' | 'card' | 'puzzle' | 'strategy';
  image: string;
  available: boolean;
}

const mockGames: Game[] = [
  {
    id: 'chess',
    name: 'Chess',
    description: 'The classic strategy game of kings and queens',
    players: '2 players',
    duration: '30-60 min',
    difficulty: 'Hard',
    category: 'strategy',
    image: 'https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    available: true
  },
  {
    id: 'checkers',
    name: 'Checkers',
    description: 'Simple yet engaging strategy game',
    players: '2 players',
    duration: '15-30 min',
    difficulty: 'Medium',
    category: 'strategy',
    image: 'https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    available: true
  },
  {
    id: 'solitaire',
    name: 'Solitaire',
    description: 'Classic single-player card game',
    players: '1 player',
    duration: '10-20 min',
    difficulty: 'Easy',
    category: 'card',
    image: 'https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    available: true
  },
  {
    id: 'sudoku',
    name: 'Sudoku',
    description: 'Number puzzle game to challenge your mind',
    players: '1 player',
    duration: '15-45 min',
    difficulty: 'Medium',
    category: 'puzzle',
    image: 'https://images.pexels.com/photos/1314410/pexels-photo-1314410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    available: true
  },
  {
    id: 'poker',
    name: 'Poker',
    description: 'Strategic card game with bluffing elements',
    players: '2-8 players',
    duration: '30-90 min',
    difficulty: 'Hard',
    category: 'card',
    image: 'https://images.pexels.com/photos/1871508/pexels-photo-1871508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    available: true
  },
  {
    id: 'crossword',
    name: 'Crossword Puzzle',
    description: 'Word puzzle to expand your vocabulary',
    players: '1 player',
    duration: '20-60 min',
    difficulty: 'Medium',
    category: 'puzzle',
    image: 'https://images.pexels.com/photos/278887/pexels-photo-278887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    available: true
  },
  {
    id: 'scrabble',
    name: 'Scrabble',
    description: 'Word-building board game',
    players: '2-4 players',
    duration: '45-90 min',
    difficulty: 'Medium',
    category: 'board',
    image: 'https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    available: false
  },
  {
    id: 'monopoly',
    name: 'Monopoly',
    description: 'Classic property trading board game',
    players: '2-6 players',
    duration: '60-180 min',
    difficulty: 'Medium',
    category: 'board',
    image: 'https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    available: true
  }
];

const RelaxingArea: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const [gameTimer, setGameTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const categories = [
    { id: 'all', name: 'All Games', icon: <Gamepad2 size={16} /> },
    { id: 'board', name: 'Board Games', icon: <Trophy size={16} /> },
    { id: 'card', name: 'Card Games', icon: <Users size={16} /> },
    { id: 'puzzle', name: 'Puzzles', icon: <Settings size={16} /> },
    { id: 'strategy', name: 'Strategy', icon: <Trophy size={16} /> }
  ];

  const filteredGames = mockGames.filter(game => {
    const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory;
    const matchesSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-success-100 text-success-800';
      case 'Medium':
        return 'bg-warning-100 text-warning-800';
      case 'Hard':
        return 'bg-error-100 text-error-800';
      default:
        return 'bg-primary-100 text-primary-800';
    }
  };

  return (
    <div className="space-y-8 pb-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary-900">Relaxing Area</h1>
          <p className="text-primary-600 mt-1">Take a break and enjoy some recreational activities</p>
        </div>
        
        {activeGame && (
          <div className="flex items-center space-x-4">
            <div className="bg-white rounded-lg border border-primary-200 px-4 py-2">
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-primary-600" />
                <span className="font-mono text-lg text-primary-900">{formatTime(gameTimer)}</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className="btn btn-primary flex items-center"
              >
                {isTimerRunning ? <Pause size={16} className="mr-2" /> : <Play size={16} className="mr-2" />}
                {isTimerRunning ? 'Pause' : 'Start'}
              </button>
              <button
                onClick={() => {
                  setGameTimer(0);
                  setIsTimerRunning(false);
                }}
                className="btn btn-outline flex items-center"
              >
                <RotateCcw size={16} className="mr-2" />
                Reset
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Search and Categories */}
      <div className="bg-white rounded-lg shadow-sm border border-primary-100 p-4">
        <div className="relative mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search games..."
            className="input w-full"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
              }`}
            >
              {category.icon}
              <span className="ml-2">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Game Session */}
      {activeGame && (
        <div className="bg-gradient-to-r from-secondary-500 to-accent-500 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Currently Playing</h2>
              <p className="text-secondary-100">
                {mockGames.find(g => g.id === activeGame)?.name} - Enjoy your game session!
              </p>
            </div>
            <button
              onClick={() => {
                setActiveGame(null);
                setGameTimer(0);
                setIsTimerRunning(false);
              }}
              className="btn bg-white text-secondary-700 hover:bg-opacity-90"
            >
              End Session
            </button>
          </div>
        </div>
      )}

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredGames.map(game => (
          <div
            key={game.id}
            className={`card overflow-hidden group transition-all duration-300 hover:translate-y-[-4px] ${
              !game.available ? 'opacity-60' : ''
            }`}
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={game.image}
                alt={game.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 right-2">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(game.difficulty)}`}>
                  {game.difficulty}
                </span>
              </div>
              {!game.available && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white font-medium">Currently Unavailable</span>
                </div>
              )}
            </div>
            
            <div className="p-5">
              <h3 className="text-lg font-medium text-primary-900 mb-2">{game.name}</h3>
              <p className="text-primary-600 text-sm mb-4">{game.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-primary-500">Players:</span>
                  <span className="font-medium text-primary-900">{game.players}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-primary-500">Duration:</span>
                  <span className="font-medium text-primary-900">{game.duration}</span>
                </div>
              </div>
              
              <button
                onClick={() => game.available && setActiveGame(game.id)}
                disabled={!game.available}
                className={`btn w-full ${
                  game.available 
                    ? 'btn-primary' 
                    : 'bg-primary-200 text-primary-500 cursor-not-allowed'
                }`}
              >
                {game.available ? 'Start Game' : 'Unavailable'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Relaxation Tips */}
      <div className="bg-primary-50 rounded-lg p-6 border border-primary-100">
        <h2 className="text-xl font-semibold text-primary-900 mb-4">Relaxation Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-primary-100">
            <h3 className="font-medium text-primary-900 mb-2">Take Regular Breaks</h3>
            <p className="text-sm text-primary-600">
              Use the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-primary-100">
            <h3 className="font-medium text-primary-900 mb-2">Stay Hydrated</h3>
            <p className="text-sm text-primary-600">
              Keep a water bottle nearby and take sips regularly while playing or studying.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-primary-100">
            <h3 className="font-medium text-primary-900 mb-2">Stretch & Move</h3>
            <p className="text-sm text-primary-600">
              Do some light stretching or walk around between game sessions to keep your body active.
            </p>
          </div>
        </div>
      </div>

      {/* Game Statistics */}
      <div className="bg-white rounded-lg shadow-sm border border-primary-100 p-6">
        <h2 className="text-xl font-semibold text-primary-900 mb-4">Your Gaming Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-900">12</div>
            <div className="text-sm text-primary-500">Games Played</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-900">3h 45m</div>
            <div className="text-sm text-primary-500">Total Play Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-900">8</div>
            <div className="text-sm text-primary-500">Games Won</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-900">Chess</div>
            <div className="text-sm text-primary-500">Favorite Game</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelaxingArea;
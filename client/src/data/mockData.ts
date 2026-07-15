import { Document, Opportunity, NewsArticle, Subject, Assignment } from '../types';

// Mock subjects
export const subjects: Subject[] = [
  { id: 'physics', name: 'Physics', color: 'blue' },
  { id: 'chemistry', name: 'Chemistry', color: 'green' },
  { id: 'math', name: 'Mathematics', color: 'purple' },
  { id: 'biology', name: 'Biology', color: 'red' },
  { id: 'history', name: 'History', color: 'yellow' },
  { id: 'literature', name: 'Literature', color: 'indigo' },
];

// Mock documents with folders
export const mockDocuments: Document[] = [
  {
    id: 'f1',
    title: 'Physics',
    description: 'Physics study materials and notes',
    subject: 'physics',
    date: 'Oct 10, 2025',
    pages: 0,
    type: 'folder',
    items: [
      {
        id: 'd1',
        title: 'Quantum Mechanics Notes',
        description: 'Comprehensive notes on quantum mechanics principles, wave functions, and Schrödinger equation.',
        subject: 'physics',
        date: 'Oct 10, 2025',
        pages: 24,
        type: 'file'
      },
      {
        id: 'd7',
        title: 'Thermodynamics Problem Set',
        description: 'Solutions to problem set covering laws of thermodynamics and their applications.',
        subject: 'physics',
        date: 'Sep 22, 2025',
        pages: 8,
        type: 'file'
      }
    ]
  },
  {
    id: 'f2',
    title: 'Chemistry',
    description: 'Chemistry study materials and lab reports',
    subject: 'chemistry',
    date: 'Oct 8, 2025',
    pages: 0,
    type: 'folder',
    items: [
      {
        id: 'd2',
        title: 'Organic Chemistry Lab Report',
        description: 'Laboratory report on the synthesis and characterization of organic compounds.',
        subject: 'chemistry',
        date: 'Oct 8, 2025',
        pages: 18,
        type: 'file'
      },
      {
        id: 'd8',
        title: 'Biochemistry Notes',
        description: 'Detailed notes on protein structure, enzyme kinetics, and metabolic pathways.',
        subject: 'chemistry',
        date: 'Sep 20, 2025',
        pages: 30,
        type: 'file'
      }
    ]
  },
  {
    id: 'f3',
    title: 'Mathematics',
    description: 'Mathematics study materials and problem sets',
    subject: 'math',
    date: 'Oct 5, 2025',
    pages: 0,
    type: 'folder',
    items: [
      {
        id: 'd3',
        title: 'Linear Algebra Study Guide',
        description: 'Comprehensive study guide covering vectors, matrices, determinants, and linear transformations.',
        subject: 'math',
        date: 'Oct 5, 2025',
        pages: 36,
        type: 'file'
      }
    ]
  },
  {
    id: 'f4',
    title: 'Biology',
    description: 'Biology study materials and lab reports',
    subject: 'biology',
    date: 'Oct 3, 2025',
    pages: 0,
    type: 'folder',
    items: [
      {
        id: 'd4',
        title: 'Cell Biology Presentation',
        description: 'Presentation slides on cell structure, function, and cellular processes.',
        subject: 'biology',
        date: 'Oct 3, 2025',
        pages: 15,
        type: 'file'
      }
    ]
  },
  {
    id: 'f5',
    title: 'History',
    description: 'History essays and research papers',
    subject: 'history',
    date: 'Sep 28, 2025',
    pages: 0,
    type: 'folder',
    items: [
      {
        id: 'd5',
        title: 'World War II Essay',
        description: 'Analysis of the major causes and global impact of World War II.',
        subject: 'history',
        date: 'Sep 28, 2025',
        pages: 12,
        type: 'file'
      }
    ]
  },
  {
    id: 'f6',
    title: 'Literature',
    description: 'Literature essays and analyses',
    subject: 'literature',
    date: 'Sep 25, 2025',
    pages: 0,
    type: 'folder',
    items: [
      {
        id: 'd6',
        title: 'Shakespeare Analysis',
        description: 'Critical analysis of themes and character development in Shakespeare\'s Macbeth.',
        subject: 'literature',
        date: 'Sep 25, 2025',
        pages: 10,
        type: 'file'
      }
    ]
  }
];

// Mock assignments
export const mockAssignments: Assignment[] = [
  {
    id: 'a1',
    title: 'Quantum Mechanics Problem Set',
    subject: 'physics',
    description: 'Complete problems 1-10 from Chapter 5 on wave functions and the Schrödinger equation.',
    dueDate: '2025-10-20',
    status: 'pending',
    teacher: 'Dr. Richard Feynman',
    attachments: ['problem_set.pdf', 'reference_material.pdf']
  },
  {
    id: 'a2',
    title: 'Organic Chemistry Lab Report',
    subject: 'chemistry',
    description: 'Write a detailed report on the synthesis of aspirin experiment, including methodology and results.',
    dueDate: '2025-10-15',
    status: 'submitted',
    teacher: 'Dr. Marie Curie',
    attachments: ['lab_guidelines.pdf']
  },
  {
    id: 'a3',
    title: 'Linear Algebra Final Project',
    subject: 'math',
    description: 'Research paper on applications of eigenvalues and eigenvectors in computer graphics.',
    dueDate: '2025-10-25',
    status: 'graded',
    grade: 'A',
    feedback: 'Excellent work! Your analysis of 3D transformations was particularly insightful.',
    teacher: 'Prof. Ada Lovelace',
    attachments: ['project_rubric.pdf']
  },
  {
    id: 'a4',
    title: 'Cell Biology Research Paper',
    subject: 'biology',
    description: 'Write a research paper on the role of mitochondria in cellular energy production.',
    dueDate: '2025-10-18',
    status: 'pending',
    teacher: 'Dr. James Watson',
    attachments: ['research_guidelines.pdf']
  },
  {
    id: 'a5',
    title: 'World War II Analysis',
    subject: 'history',
    description: 'Compare and contrast the major turning points of World War II in the Pacific and European theaters.',
    dueDate: '2025-10-22',
    status: 'submitted',
    teacher: 'Prof. Winston Churchill',
    attachments: ['essay_requirements.pdf']
  }
];

// Mock opportunities
export const mockOpportunities: Opportunity[] = [
  {
    id: 'o1',
    title: 'STEM Excellence Scholarship',
    description: 'Scholarship for outstanding students pursuing degrees in science, technology, engineering, or mathematics.',
    organization: 'National Science Foundation',
    type: 'scholarship',
    deadline: 'Nov 15, 2025',
    amount: '$10,000',
  },
  {
    id: 'o2',
    title: 'Research Assistant Position',
    description: 'Opportunity to assist faculty with ongoing research projects in the Department of Physics.',
    organization: 'State University',
    type: 'internship',
    deadline: 'Oct 30, 2025',
    amount: '$18/hour',
  },
  {
    id: 'o3',
    title: 'National Mathematics Challenge',
    description: 'Annual competition for university students to showcase their mathematical problem-solving skills.',
    organization: 'American Mathematical Society',
    type: 'competition',
    deadline: 'Dec 5, 2025',
    amount: 'Prizes up to $5,000',
  },
  {
    id: 'o4',
    title: 'Global Leaders Program',
    description: 'Study abroad opportunity for students interested in international relations and global studies.',
    organization: 'International Education Institute',
    type: 'exchange',
    deadline: 'Jan 15, 2026',
    amount: 'Full funding available',
  },
  {
    id: 'o5',
    title: 'Future Scientists Scholarship',
    description: 'Merit-based scholarship for promising students in natural sciences with financial need.',
    organization: 'Science Foundation',
    type: 'scholarship',
    deadline: 'Dec 1, 2025',
    amount: '$8,000',
  },
  {
    id: 'o6',
    title: 'Tech Innovation Internship',
    description: 'Summer internship program focused on developing innovative technology solutions.',
    organization: 'TechFuture Inc.',
    type: 'internship',
    deadline: 'Feb 28, 2026',
    amount: '$22/hour',
  },
  {
    id: 'o7',
    title: 'Environmental Research Grant',
    description: 'Funding opportunity for student-led research projects focused on environmental sustainability.',
    organization: 'Green Earth Foundation',
    type: 'scholarship',
    deadline: 'Nov 30, 2025',
    amount: 'Up to $3,000',
  },
];

// Mock news articles
export const mockNews: NewsArticle[] = [
  {
    id: 'n1',
    title: 'Breakthrough in Quantum Computing Announced by University Researchers',
    summary: 'A team of researchers has achieved a significant breakthrough in quantum computing, potentially bringing practical quantum computers one step closer to reality.',
    image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Research',
    author: 'Dr. Sarah Johnson',
    date: 'Oct 12, 2025',
  },
  {
    id: 'n2',
    title: 'New Scholarship Program Launched for First-Generation College Students',
    summary: 'A major foundation has announced a $50 million scholarship program specifically designed to support first-generation college students in pursuing STEM degrees.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Scholarships',
    author: 'Michael Chang',
    date: 'Oct 10, 2025',
  },
  {
    id: 'n3',
    title: 'Annual Academic Conference to Feature Nobel Prize Winners',
    summary: 'This year\'s Academic Excellence Conference will feature keynote speeches from three Nobel Prize laureates, discussing the future of scientific research.',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Events',
    author: 'Emma Rodriguez',
    date: 'Oct 8, 2025',
  },
  {
    id: 'n4',
    title: 'New Study Reveals Impact of Digital Learning Tools on Student Success',
    summary: 'A comprehensive five-year study has revealed significant positive correlations between the use of digital learning tools and improved student outcomes across disciplines.',
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Research',
    author: 'Dr. Robert Lee',
    date: 'Oct 5, 2025',
  },
  {
    id: 'n5',
    title: 'University Launches New Interdisciplinary Program in AI Ethics',
    summary: 'Responding to the growing importance of ethical considerations in artificial intelligence, a major university has launched a new interdisciplinary program combining computer science, philosophy, and law.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Faculty',
    author: 'Jennifer Williams',
    date: 'Oct 3, 2025',
  },
  {
    id: 'n6',
    title: 'Student Team Wins International Robotics Competition',
    summary: 'A team of undergraduate engineering students has won first place in a prestigious international robotics competition, beating teams from over 50 countries.',
    image: 'https://images.pexels.com/photos/8566437/pexels-photo-8566437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Students',
    author: 'David Chen',
    date: 'Sep 30, 2025',
  },
  {
    id: 'n7',
    title: 'New Study Abroad Partnerships Announced with European Universities',
    summary: 'The Office of International Education has announced new exchange program partnerships with five prestigious European universities, expanding opportunities for students in all disciplines.',
    image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Events',
    author: 'Sophia Garcia',
    date: 'Sep 28, 2025',
  },
];
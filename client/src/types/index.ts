export interface Document {
  id: string;
  title: string;
  description: string;
  subject: string;
  date: string;
  pages: number;
  type?: 'file' | 'folder';
  items?: Document[];
}

export interface Subject {
  id: string;
  name: string;
  color: string;
}

export interface Opportunity {
  id: string;
  title: string;
  description: string;
  organization: string;
  type: 'scholarship' | 'internship' | 'competition' | 'exchange' | string;
  deadline: string;
  amount: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  image: string;
  category: 'Research' | 'Scholarships' | 'Events' | 'Faculty' | 'Students' | 'Technology' | string;
  author: string;
  date: string;
}

export interface Assignment {
  id: string;
  title: string;
  subject: string;
  description: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded';
  grade?: string;
  feedback?: string;
  attachments?: string[];
  teacher: string;
}
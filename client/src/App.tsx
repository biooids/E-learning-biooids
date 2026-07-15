import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import Dashboard from './pages/Dashboard';
import Documents from './pages/Documents';
import Opportunities from './pages/Opportunities';
import News from './pages/News';
import AiAssistant from './pages/AiAssistant';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import DocumentView from './pages/DocumentView';
import Assignments from './pages/Assignments';
import AssignmentView from './pages/AssignmentView';
import Tools from './pages/Tools';
import Library from './pages/Library';
import RelaxingArea from './pages/RelaxingArea';
import TeacherDashboard from './pages/TeacherDashboard';

// Context
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="documents" element={<Documents />} />
          <Route path="documents/:id" element={<DocumentView />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="assignments/:id" element={<AssignmentView />} />
          <Route path="tools" element={<Tools />} />
          <Route path="library" element={<Library />} />
          <Route path="relaxing-area" element={<RelaxingArea />} />
          <Route path="opportunities" element={<Opportunities />} />
          <Route path="news" element={<News />} />
          <Route path="ai-assistant" element={<AiAssistant />} />
          <Route path="profile" element={<Profile />} />
          <Route path="teacher" element={<TeacherDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
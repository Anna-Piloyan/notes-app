import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import AboutPage from './pages/AboutPage/AboutPage'
import NotesPage from './pages/NotesPage/NotesPage'
import TodoPage from './pages/TodoPage/TodoPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Menu from './components/Menu/Menu'


function App() {
  return (
    <div className="app">
      <Router>
        <Menu />
        <div className="app-container">
            <Routes>
              <Route path="" element={<AboutPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="notes" element={<NotesPage />} />
              <Route path="todo" element={<TodoPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

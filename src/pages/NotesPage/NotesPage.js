import React from 'react';
import './NotesPage.css';

import NotesApp from '../../components/NotesApp/NotesApp';

const NotesPage = () => (
  <div className="notes-page">
    <h1 className="notes-header">Notes</h1>
    <NotesApp />
  </div>
);

export default NotesPage;

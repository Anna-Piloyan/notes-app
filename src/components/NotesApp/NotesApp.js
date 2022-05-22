import React from 'react';
import './NotesApp.css';
import NoteEditor from '../NoteEditor/NoteEditor'
import NotesGrid from '../NotesGrid/NotesGrid'


class NotesApp extends React.Component {

  constructor() {
    super()
    this.state = { notes: [] }
    this.addNote = this.addNote.bind(this)
    this.deleteNote = this.deleteNote.bind(this)
  }

  componentDidMount(){
    let localNotes = JSON.parse(localStorage.getItem('notes'))
    if(localNotes){
      this.setState({notes: localNotes})
    }
  }
  componentDidUpdate(){
    let notesStr = JSON.stringify(this.state.notes)
    localStorage.setItem('notes', notesStr)
  }

  addNote(newNote) {
    let notesCopy = this.state.notes.slice()
    notesCopy.unshift(newNote)
    this.setState({ notes: notesCopy })

  }
  deleteNote(id) {
   let filteredNotes = this.state.notes.filter(note => note.id !== id)
   this.setState({ notes: filteredNotes })

  }

  render() {
    return (
      <div className="notes-app container">
        <NoteEditor onNoteAdd={this.addNote} />
        <NotesGrid onNoteDelete={this.deleteNote} notes={this.state.notes} />
      </div>
    )
  }
}

export default NotesApp;

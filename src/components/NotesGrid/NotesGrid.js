import React from 'react';
import './NotesGrid.css';
import Masonry from 'masonry-layout'
import Note from '../Note/Note'

class NotesGrid extends React.Component {
  constructor(props) {
    super(props)
    this.state =
    {
      notes: this.props.notes
    }
    this.handleSearch = this.handleSearch.bind(this)
  }
  componentDidMount() {
    this.msnry = new Masonry('.notes-grid', {
      itemSelector: '.note',
      columnWidth: 200,
      gutter: 10
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.notes.length !== this.props.notes.length) {    //this.state.notes
      this.msnry.reloadItems()
      this.msnry.layout()
    }

  }

  handleSearch(e) {      //метод робочий але не відображає при завантаженні ноути, тільки після пошуку
    let displayedNotes = [];
    if (e.target.value === '')
      return displayedNotes = this.props.notes;
    displayedNotes = !this.state.notes ? this.props.notes : this.props.notes.filter(function (item) {
      return item.title.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    });
    this.setState({ notes: displayedNotes });
    console.log(displayedNotes);
  }

  render() {

    return (
      <div>
        <input className="noteSearch" type="search" placeholder="Search..." onChange={this.handleSearch} />
        <div className="notes-grid row">
          {
            this.props.notes.map(note => {    //this.state.notes
              return <Note
                key={note.id}
                id={note.id}
                title={note.title}
                text={note.text}
                color={note.color}
                onNoteDelete={this.props.onNoteDelete}
              />
            })
          }
        </div>
      </div>
    )
  }
}


NotesGrid.propTypes = {};

NotesGrid.defaultProps = {};

export default NotesGrid;

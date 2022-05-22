import React from 'react';
import './NoteEditor.css';


let colors = ["grey", "green", "tomato", "yellow", "red", "brown"];

class NoteEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      color: '',
      colors: colors
    }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleAddNote = this.handleAddNote.bind(this)
    this.hadleColorChange = this.hadleColorChange.bind(this);

  }
  hadleColorChange(e) {
    this.input = e.target;
    this.setState({
      color: e.target.style.backgroundColor,
    })
  }
  handleTextChange(e) {

    this.setState({ text: e.target.value })
  }
  handleTitleChange(e) {

    this.setState({ title: e.target.value })
  }

  handleAddNote() {
    let newNote = {
      id: Date.now(),
      title: this.state.title,
      text: this.state.text,
      color: this.state.color
    }
    this.props.onNoteAdd(newNote)
    this.setState({ text: '', title: '', color: '' })

  }
  render() {

    return (

      <div className="note-editor row">
        <div className="input-field col s10">
          <textarea value={this.state.title} onChange={this.handleTitleChange} id="textEditor" className="materialize-textarea"></textarea>
          <label htmlFor="textEditor">Enter title</label>
        </div>
        <div className="input-field col s10">
          <textarea value={this.state.text} onChange={this.handleTextChange} id="textEditor" className="materialize-textarea"></textarea>
          <label htmlFor="textEditor">Enter new note</label>
        </div>
        <div className="input-field col s10 controls">
          <div className="row colors controls">
            {
              colors.map(el => {
                return (
                  <div className="col s1" key={el}>
                    <a className="waves-effect waves-light btn-large" style={{ backgroundColor: el }} onClick={this.hadleColorChange} />

                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="input-field col s2">
          <a onClick={this.handleAddNote} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
        </div>
      </div>
    )
  }
}



NoteEditor.propTypes = {};

NoteEditor.defaultProps = {};

export default NoteEditor;

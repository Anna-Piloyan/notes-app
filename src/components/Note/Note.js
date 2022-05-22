import React from 'react';
import './Note.css';

const Note = (props) => (
  <div className="card note" style={{backgroundColor: props.color}}>
    <div className="delete-btn-container">
      <span className="delet-note" onClick={()=>{props.onNoteDelete(props.id)}}>X</span>
    </div>
    <div className="card-content white-text">
      <span className="card-title">{props.title}</span>
      <p>{props.text}</p>
    </div>
    <div className="card-action">
      <a href="#">This is a link</a>
    </div>
  </div>
);

Note.propTypes = {};

Note.defaultProps = {};

export default Note;

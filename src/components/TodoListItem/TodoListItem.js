import React from 'react';
import './TodoListItem.css';

const TodoListItem = (props) => (
  <div className="row d">
    <div className="col s1">
      <label>
        <input type="checkbox" checked={props.checked} onChange={(e) => { props.onItemDone(e, props.id) }} />
        <span></span>
      </label>
    </div>
    <div className="col s9">
      <span id={props.id} style={{ opacity: props.checked ? '0.25' : '1', textDecoration: props.checked ? 'line-through' : 'none' }} >{props.text}</span>
    </div>
    <div className="col s1">
      <span className="delete-task" onClick={() => { props.onItemDelete(props.id) }}>
        <i className="small material-icons ">delete</i>
      </span>
    </div>
  </div>
)




export default TodoListItem;
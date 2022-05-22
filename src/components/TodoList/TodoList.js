import React from 'react';
import './TodoList.css';


import TodoListItem from '../TodoListItem/TodoListItem';

class TodoList extends React.Component {

   
    render() {
        return (
            <div className="row">
               
                {this.props.tasks.map(task => {
                    return <TodoListItem key={task.id}
                        id={task.id}
                        text={task.text}
                        checked={task.checked}
                        onItemDelete={this.props.onItemDelete}
                        onItemDone={this.props.onItemDone}
                    />
                })}

            </div>
        )
    }
}



export default TodoList;
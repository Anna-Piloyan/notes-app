import React from 'react';
import './TodoApp.css';


import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';



class TodoApp extends React.Component {
    constructor() {
        super()
        this.state = 
        { 
          tasks: [] 
        }
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.itemDone = this.itemDone.bind(this)
      }
      componentDidMount() {
    
        let local = JSON.parse(localStorage.getItem('tasks'))
        if (local)
          this.setState({ tasks: local })
      }
    
      componentDidUpdate() {
        let tasksStr = JSON.stringify(this.state.tasks)
        localStorage.setItem('tasks', tasksStr)
      }
    
      addItem(newTask) {
        let tasksCopy = this.state.tasks.slice()
        tasksCopy.unshift(newTask)
        this.setState({ tasks: tasksCopy })
      }
      deleteItem(id) {
        
        this.setState({ tasks: this.state.tasks.filter(task => task.id !== id) })
      }
      itemDone(e, id) {
       
        if (e.target.checked) {
          document.getElementById(id).style.opacity = '0.25'
          document.getElementById(id).style.textDecoration = 'line-through'
          document.getElementById(id).style.color = 'red'
          let tasksCopy = this.state.tasks.slice()
          tasksCopy.find(el=>el.id === id).checked = true;
          tasksCopy.sort((a, b) => (a.checked) - (b.checked));
          this.setState({ tasks: tasksCopy })
        }
        else{
          document.getElementById(id).style.opacity = '1'
          document.getElementById(id).style.textDecoration = 'none'
          document.getElementById(id).style.color = 'black'
          let tasksCopy = this.state.tasks.slice()
          tasksCopy.find(el=>el.id === id).checked = false;
          tasksCopy.sort((a, b) => (a.checked) - (b.checked));
          this.setState({ tasks: tasksCopy })
        }
      }
      render() {
        return (
          <div className="todo-app container">
            <TodoForm onItemAdd={this.addItem} />
            <TodoList onItemDelete={this.deleteItem} onItemDone={this.itemDone} tasks={this.state.tasks} />
          </div>
        )
      }
    }

export default TodoApp;

  
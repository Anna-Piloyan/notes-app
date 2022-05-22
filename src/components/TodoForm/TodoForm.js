import React from 'react';
import './TodoForm.css';

class TodoForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: '',
            checked: false
        }
        this.handleTextChange = this.handleTextChange.bind(this)
        this.handleAddItem = this.handleAddItem.bind(this)
    }
    handleTextChange(e) {
       
        this.setState({ text: e.target.value })
    }
    handleAddItem() {
        let newTask = {
            id: Date.now(),
            text: this.state.text,
            checked: false
        }
        this.props.onItemAdd(newTask)
        this.setState({ text: '', checked: false })
    }

    render() {
        return (
            <div className="todo-add row">
                <div className="input-field col s11">
                    <label htmlFor="textEditor">Enter new task</label>
                    <textarea value={this.state.text} onChange={this.handleTextChange} id="textEditor" className="materialize-textarea"></textarea>
                </div>
                <div className="input-field col s1">
                    <a onClick={this.handleAddItem} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
                </div>
            </div>
        )
    }
}
TodoForm.propTypes = {};

TodoForm.defaultProps = {};

export default TodoForm;

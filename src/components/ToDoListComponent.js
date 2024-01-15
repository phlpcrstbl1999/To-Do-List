import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './ToDoListComponent.css';

const todolist = ['Learn Javascript', 'Learn React', 'Build a React App'];

const ToDoListComponent = () => {
    const[lists, setLists] = useState(todolist);
    return <div className="container">
            {/* <h1>THINGS TO DO</h1> */}
            <input type="text" className="whatToDo" placeholder='Add New'></input>
            {lists.map((list, index) => (
                <div className="list-container">
                    <input type="checkBox" value={index}></input>
                    <li key={index}>{list}</li>
                </div>
            ))}
            <div className="btn-container">
                <button><FontAwesomeIcon icon={faPlus} /></button>
            </div>
            
        </div>
}

export default ToDoListComponent;
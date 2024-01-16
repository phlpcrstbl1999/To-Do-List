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
            {lists.map((list, index) => <>
                <label className="list-container">
                        <input type="checkBox" value={index}></input>
                        <li key={index}>{list}</li>
                </label>
            </>)}
            <div className="btn-container">
                <button class="plus-btn"><FontAwesomeIcon icon={faPlus} /></button>
                <p>{todolist.length} items left</p>
            </div>
            
        </div>
}

export default ToDoListComponent;
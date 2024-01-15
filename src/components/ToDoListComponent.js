import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const todolist = ['Learn Javascript', 'Learn React', 'Build a React App'];

const ToDoListComponent = () => {
    const[lists, setLists] = useState(todolist);
    return <div className="container">
            {/* <h1>THINGS TO DO</h1> */}
            <input type="text" className="whatToDo" placeholder='Add New'></input>
            {lists.map((list, index) => (
                <div className="list-container">
                    <input type="checkBox" value="list"></input>
                    <li key={index}>{list}</li>
                </div>
            ))}
            <button><FontAwesomeIcon icon={faPlus} /></button>
        </div>
}

export default ToDoListComponent;
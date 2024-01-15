import React, {useState} from 'react';
const todolist = ['Learn Javascript', 'Learn React', 'Build a React App'];

const ToDoListComponent = () => {
    const[lists, setLists] = useState(todolist);
    return <div className="container">
            {/* <h1>THINGS TO DO</h1> */}
            <input type="text" className="whatToDo" placeholder='Add New'></input>
            {lists.map((list, index) => (
                <li key={index}>{list}</li>
            ))}
        </div>
}

export default ToDoListComponent;
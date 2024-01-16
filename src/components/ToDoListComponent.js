import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './ToDoListComponent.css';

const toDolist = ['Learn Javascript', 'Learn React', 'Build a React App'];
const ToDoListComponent = () => {
    const[lists, setLists] = useState(toDolist);
    const[whatToDo, setWhatToDo] = useState("");
    const[itemsLeft, setItemsLeft] = useState(toDolist.length);
    const handleWhatToDo = (e) => {
        setWhatToDo(e.target.value);
    }

    const addList = () => {
        const addItemsLeft = itemsLeft + 1;
        setLists([...lists, whatToDo]);
        setWhatToDo('');
        setItemsLeft(addItemsLeft);
        alert("Added Successfuly")
        
    }
    const handleAddWhatToDo = () => {
        whatToDo === "" ? alert("Please enter what to do") : addList();
    }
    const handleCheckBox = (e) => {
        const index = e.target.value;
        const updatedList = [...lists];
        const minusItemsLeft = itemsLeft - 1;
        updatedList.splice(index, 1);
        setLists(updatedList);
        setItemsLeft(minusItemsLeft);
    }
    return <div className="container">
            {/* <h1>THINGS TO DO</h1> */}
            <input type="text" className="whatToDo" placeholder='Add New' onChange={handleWhatToDo} id="whatToDo" value={whatToDo}></input>
            {lists.map((list, index) => (
                <label className="list-container" key={index} value={index}>
                        <input type="checkBox" value={index} onChange={handleCheckBox} checked={false}></input>
                        <li>{list}</li>
                </label>
            ))}
            <div className="btn-container">
                <button className="plus-btn" onClick={handleAddWhatToDo}><FontAwesomeIcon icon={faPlus} /></button>
                <p>{itemsLeft} items left</p>
            </div>
        </div>
}

export default ToDoListComponent;
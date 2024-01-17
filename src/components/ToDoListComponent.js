import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './ToDoListComponent.css';

const toDolist = [
    { todo: 'Learn Javascript', status: 'incomplete' },
    { todo: 'Learn React', status: 'incomplete' },
    { todo: 'Build a React App', status: 'incomplete' }
  ];
const ToDoListComponent = () => {
    const[lists, setLists] = useState(toDolist);
    const[whatToDo, setWhatToDo] = useState("");
    const[itemsLeft, setItemsLeft] = useState(toDolist.filter(list => list.status === 'incomplete').length);
    const[isActive, setIsActive] = useState(true);
    const[sortLists, setSortLists] = useState(lists);
    const completedList = [...lists];
    const handleWhatToDo = (e) => {
        setWhatToDo(e.target.value);
    }
    const addList = () => {
        const addItemsLeft = itemsLeft + 1;
        const newToDo = {todo: whatToDo, status: 'incomplete'};
        setLists([...lists, newToDo]);
        setSortLists([...lists, newToDo]);
        setWhatToDo('');
        setItemsLeft(addItemsLeft);
        alert("Added Successfuly");
    }
    const handleAddWhatToDo = () => {
        whatToDo === "" ? alert("Please enter what to do") : addList();
    }
    const handleCheckBox = (e) => {
        const index = e.target.value;
       
        let setStatus = completedList[index];
        setStatus.status === 'incomplete' ? setStatus.status = 'completed' : setStatus.status = 'incomplete';
        const listCount = completedList.filter(list => list.status === 'incomplete').length;
        setItemsLeft(listCount);
    }
    const handleIsActive = () => {
        const completedCount = completedList.filter(list => list.status === 'completed').length;
        const listCount = completedList.filter(list => list.status === 'incomplete').length;
        const completedHandler = completedList.filter(list => list.status === 'completed');
        if(isActive) {
            setSortLists(completedHandler);
            setItemsLeft(completedCount);
        }else {
            setSortLists(completedList);
            setItemsLeft(listCount);
        }
        setIsActive(!isActive);
    }
    return <div className="container">
            <h1 className="title">THINGS TO DO</h1>
            <input type="text" className="whatToDo" placeholder='Add New' onChange={handleWhatToDo} id="whatToDo" value={whatToDo}></input>
            {sortLists.map((list, index) => (
                <label className="list-container" key={index} value={index}>
                        <input type="checkBox" value={index} onChange={handleCheckBox} id={index}></input>
                        <li className={`${list.status === 'completed' ? 'completed' : ''}`}>{
                            list.todo
                        }</li>
                        
                </label>
            ))}
            {itemsLeft === 0 && <li className='title'>No ToDos</li>}

            <div className="footer">
                <div className="btn-container">
                    <button className="plus-btn" onClick={handleAddWhatToDo}><FontAwesomeIcon icon={faPlus} /></button>
                    <p>{itemsLeft} items left</p>
                </div>
                <div>
                    <button className={`footer-btn ${isActive ? 'active' : ''}`} onClick={handleIsActive} disabled={isActive ? 'disabled' : ''}>All</button>
                    <button className={`footer-btn ${!isActive ? 'active' : ''}`} onClick={handleIsActive} disabled={!isActive ? 'disabled' : ''}>Completed</button>
                </div>
            </div>
        </div>
}

export default ToDoListComponent;
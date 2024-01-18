import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './ToDoListComponent.css';

const toDolist = [
    { id: 0, todo: 'Learn Javascript', status: 'incomplete' },
    { id: 1, todo: 'Learn React', status: 'incomplete' },
    { id: 2, todo: 'Build a React App', status: 'incomplete' }
  ];
const ToDoListComponent = () => {
    const[lists, setLists] = useState(toDolist);
    const[whatToDo, setWhatToDo] = useState("");
    const[itemsLeft, setItemsLeft] = useState(lists.filter(list => list.status === 'incomplete').length);
    const[isActive, setIsActive] = useState(true);
    const[sortLists, setSortLists] = useState(lists);
    const handleWhatToDo = (e) => {
        setWhatToDo(e.target.value);
    }
    const addList = () => {
        const addItemsLeft = itemsLeft + 1;
        const listsCount = lists.length + 1;
        const newToDo = {id: listsCount - 1, todo: whatToDo, status: 'incomplete'};
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
        const id = e.target.value;
        let getList = lists[id];
        getList.status === 'incomplete' ? getList.status = 'completed' : getList.status = 'incomplete';
        const listCount = lists.filter(list => list.status === 'incomplete').length;
        setItemsLeft(listCount);
    }
    const handleIsActive = () => {
        const completedCount = lists.filter(list => list.status === 'completed').length;
        const listCount = lists.filter(list => list.status === 'incomplete').length;
        const completedHandler = lists.filter(list => list.status === 'completed');
        if(isActive) {
            setSortLists(completedHandler);
            setItemsLeft(completedCount);
        }else {
            setSortLists(lists);
            setItemsLeft(listCount);
        }
        setIsActive(!isActive);
    }
    return <div className="container">
            <h1 className="title">THINGS TO DO</h1>
            <input type="text" className="whatToDo" placeholder='Add New' onChange={handleWhatToDo} id="whatToDo" value={whatToDo}></input>
            {sortLists.map((list) => (
                <label className="list-container" key={list.id} value={list.id}>
                        <input type="checkBox" value={list.id} onChange={handleCheckBox} id={list.id} disabled={isActive ? '' : 'disabled'}></input>
                        <li className={`${list.status === 'completed' ? 'completed' : ''}`}>{
                            list.todo
                        }</li>
                        
                </label>
            ))}
            {itemsLeft === 0 && <li className='title'>No ToDos</li>}

            <div className="footer">
                <div className="btn-container">
                    <button className="plus-btn" onClick={handleAddWhatToDo} disabled={isActive ? '' : 'disabled'}><FontAwesomeIcon icon={faPlus} /></button>
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
import React, { useState } from 'react'
import { useEffect } from 'react';

function ToDoList() {

    const [tasks, setTasks] = useState(["gfsgjfih", "b", "b"]);
    const [newTask, setNewTask] = useState("");

    // useEffect(() => window.addEventListener("keyup", event => {
    //     if (event == "Enter") {
    //         addTask();
    //     }
    // }))
    function handleKeyDown(event) {
        if (event.key == "Enter") {
            addTask();
        }
    }
    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    function addTask() {
        if (newTask != "") {
            setTasks(prevTasks => [...prevTasks, newTask]);
            setNewTask("");
        }

    }
    function deleteTask(index) {
        setTimeout(() => {
            setTasks(tasks.filter((_, i) => i != index))
        }, 50);
        
    }
    function moveTaskUp(index) {
        if (index > 0) {
            const copy = [...tasks];
            [copy[index], copy[index-1]] = [copy[index-1], copy[index]]
            setTasks(copy);
        }
    }
    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const copy = [...tasks];
            [copy[index], copy[index+1]] = [copy[index+1], copy[index]]
            setTasks(copy);
        }
    }

    return (
    <div className='to-do-list' onKeyDown={handleKeyDown}>

        <h1>To-Do-List</h1>

        <div className='input-container'>
            <input type="text"
                   placeholder='Enter a task...'
                   value={newTask}
                   onChange={handleInputChange}
                   id='task-input' />
                   <button className='add-btn'
                           onClick={addTask}>Add</button>
        </div>

        <ol>
            {tasks.map((task, id) => 
                <li key={id} id={`list-element-${id}`}>
                    <div className='task-container'>
                        <span className='text'>{task}</span>
                        <div className="task-buttons">
                            <button className='delete-btn' onClick={() => deleteTask(id)}>Delete</button>
                            <div className='move-btn-container'>
                                <button className='move-btn' onClick={() => moveTaskUp(id)}>⬆</button>
                                <button className='move-btn' onClick={() => moveTaskDown(id)}>⬇</button>
                            </div>
                        </div>
                    </div>
                    
                    
                </li>)}
        </ol>

    </div>)
}

export default ToDoList
import React from "react";
import { createPortal } from "react-dom";
import { FaTimes } from 'react-icons/fa';
import { MdOutlineEventNote } from "react-icons/md";
import { VscClose } from "react-icons/md";




function Task({ task, onDelete, onToggle }) {
    return ( 

        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                <MdOutlineEventNote className="icon" style={{color: "#fff", cursor:"pointer"}} onClick={() => onDelete(task.id)} />
            </h3>
            <p>{task.text}{' '}</p>
            <p>{task.day}</p>
            <FaTimes style={{color:'black', cursor:"pointer", margin:"5px"}} onClick={() => onDelete(task.id)} />
        </div>
    
    ) 
}

export default Task;
    


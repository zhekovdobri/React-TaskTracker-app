import React from 'react'
import { useState } from 'react'
import Calendar from 'react-calendar'
import Clock from './Clock'




//function AddTask() { 
const AddTask = ({ onAdd }) => {


    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit} >
            <div className='form-control'>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <label>Task</label>
                    <Clock />
                </div>
                <input type='text' placeholder='AddTask' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add Day & Time' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input 
                type='checkbox' 
                checked={reminder} 
                value={reminder} 
                onChange={(e) => setReminder(e.currentTarget.checked)} 
                />
            </div>

            <input type='submit' 
            //checked={reminder}
            value='Save Task' className='btn btn-block' />

        </form>
    )
}

export default AddTask;

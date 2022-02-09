import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from 'react';
import react from "react";
import reactDom from "react-dom";




function App() {

  
  
  
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at Scool',
            day: 'Feb 6th at 1:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shopping', 
            day: 'Feb 5th at 2:30pm',
            reminder: false,
        }
    ]
);


// Add Task
// function addTask() {}
const addTask = (task) => {

  const id = Math.floor(Math.random() * 10000) +1

  const newTask = { id, ...task }

  setTasks([ ...tasks, newTask])
}



// Delete Task
// function deleteTask(id) {
const deleteTask = (id) => {
  return (
    setTasks(tasks.filter((task)=> task.id !== id))
  )}
  
// Toggle Reminder
// function toggelReminder(id) { 
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder}
  : task ))
} 
  

  return (
    <div className="container">
      <Header onAdd={ () => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />} 
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />)
      : ('No Task to Show')}
    </div>
  );
}



export default App;

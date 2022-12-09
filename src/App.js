import React, { useState } from 'react'
import './App.css';
import todo from './todo.jpg'
import TaskList from './TaskList';
import { findAllByTestId } from '@testing-library/react';

const App=()=>{

const [task,setTask] =useState('')
const [list,setList]= useState([{
  id:Date.now(),
  value:'Learn JS',
  isDone:false
}])
//console.log(task)
const addHandler=()=>{
  const newItem={
    id:Date.now(),
    value:task,
    isDone:false
  }
  //console.log(newItem)
  let newList =[...list]
  newList.push(newItem)
  setList(newList)
  setTask('')
}

const onDelete =(id)=>{
  const list1 =[...list]
  const updatedList=list.filter(item => item.id!== id)
  setList(updatedList)
}

return <div>
<img src={todo} width={100} height={100} className="logo"></img>
<h1 className="app-title">React ToDo App</h1>
<div className="container">Add an Item...<br/>
  <input type="text" className="input-text"
  placeholder="Enter your Task"
 value={task}
 onChange={e=>setTask(e.target.value)}
 />
  <button className="add-btn" onClick={addHandler}>ADD</button>
  <div className="list">
    <ul>
      {list.map(li=> <TaskList taskName={li.value}  key={li.id}  id={li.id} deleteHandler={onDelete}/>)}
      {/*<TaskList taskName="Learn JS"/>*/}
    </ul>
  </div>
</div>
</div>
}

export default App
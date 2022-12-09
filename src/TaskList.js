
import './App.css'

const TaskList=({taskName,id,deleteHandler})=>{
return <li>
    <input type="checkbox"/>
    {taskName}
    <button className="btn" onClick={()=>deleteHandler(id)}>Delete</button>
</li>
}


export default TaskList
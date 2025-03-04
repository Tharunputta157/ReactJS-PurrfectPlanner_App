//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function Todo() {
  const [text,SetText] = useState('');
  const [list,SetList] = useState([]);
  const handleChange=(event)=>{
    SetText(event.target.value)
  }

  const addTask=()=>{
    const task1={
      id: list.length===0? 1 : list[list.length-1].id+1,
      name: text
    }

    SetList([...list,task1])
    console.log("----------------------------")
    console.log(text)

  }

  const handleDelete=(id)=>{
    let newList= list.filter((task)=>{
      if(task.id===id){
        return false
      }
      else{
        return true
      }
 
    })

    SetList(newList)
  }

  

  return (
    <div className="TodoApp">
      <div className='addtask'>
        <h2>Add your tasks here</h2>
        <input type="text" onChange={handleChange}/>
        <button class= "todo-button" onClick={addTask}>Add task</button>
      </div>
      <div className='list'>

        {list.map((task)=>{
          return(
            <div classname ="task-container">
              <div class="taskname">{task.name}</div>
              <button class= "delbutton" onClick={()=>handleDelete(task.id)}>Delete</button>
              
            </div>
          )
          
        })}
        
        
      </div>
      

    </div>
  );
}

export default Todo;

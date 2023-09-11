import React, { useContext } from "react";
import { useState, useRef } from "react";
import {TaskMoving} from "../list/List"


export default function Backlog () {
    const [task, setTask]=useState('');
    const [taskList, setTaskList]=useState([]);
    const {moveTask, setMoveTask, date, setDate}=useContext(TaskMoving);
    const inputRef=useRef(null)

    const handleSubmit =(event)=>{
        event.preventDefault();
        if (task!==''){setTaskList([...taskList,task])}else{setTaskList([...taskList])}
        console.log(taskList);
        setTask('');
        setDate(new Date().toLocaleDateString());
        inputRef.current.focus();
    };

    const handleDelete=(index)=>(setTaskList(taskList.filter((o, i) => index !== i)));

    
    async function handleMove (index){
      let result=(taskList.filter((o, i) => index === i));
      const end =await setMoveTask([...moveTask, result]);
      return handleDelete(index);
   }
   
   
 return(
 <div className="container px-5 py-5 bg-sky-200 flex flex-col justify-between md:mr-2 mb-3 rounded min-w-150 h-fit">
    <h2 className="text-sky-900 text-xl font-bold text-center mb-3">Backlog</h2>
    <div>
      <div>
         {taskList.map((todo, index)=><span key={index} 
         className="flex flex-row flex-nowrap justify-between items-center text-sky-900 font-normal text-md mb-2 bg-sky-100 rounded px-2 py-2 hover:opacity-70"
         >{todo}
         { <div><button 
            type="button"
            className="px-2 py-1 text-white text-md bg-sky-700 rounded cursor:pointer"
            onClick={()=>handleDelete(index)}>Delete</button>
            <button
            type="button"
            className="cursor:pointer"  
            onClick={()=>handleMove(index)}
            >
              {<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-sky-900 -mb-1 active:fill-sky-300 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            } 
            </button>
            <div><span className="text-xs">{date}</span></div>
            </div>
            }
         </span>)}
      </div>
    </div>
    <form onSubmit={handleSubmit} className="flex flex-col flex-nowrap">
    <input 
     type="text"
     name="task"
     value={task}
     onChange={(e)=>setTask(e.target.value)}
     ref={inputRef}
     placeholder="Enter your task..."
     className="px-3 py-2 bg-sky-100 rounded">
     </input>
    <input type="submit" value="Submit" className="py-3 px-3 bg-sky-500 rounded mt-3 text-xl text-white disabled:opacity-75" disabled={!task} 
    ></input>
    </form>
 </div>
 )
}

//(taskList.filter((o, i) => index == i))
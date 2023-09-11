import React from "react";
import { useContext } from "react";
import { TaskMoving } from "../list/List";


export default function InProgress(){
    const {moveTask2, setMoveTask2, moveTask3, setMoveTask3, date}=useContext(TaskMoving);
    
    const handleDelete=(index)=>(setMoveTask2(moveTask2.filter((o, i) => index != i)));
    
    async function handleMove (index){
    let result=(moveTask2.filter((o, i) => index == i));
    const end =await setMoveTask3([...moveTask3, result]);
    return handleDelete(index);
    }

    return (
        <div className="md:mr-2 mb-3 container px-5 py-5 bg-sky-200 flex flex-col justify-between rounded h-fit">
           <h2 className="text-sky-900 text-xl font-bold text-center mb-3">in Progress</h2>
           <div>
            <ul>{moveTask2.map((task, index)=><li className="text-sky-900 font-normal text-md mb-2 bg-sky-100 rounded px-2 py-2 flex flex-row flex-nowrap justify-between items-center mb-2">{task}
            { <div><button 
            type="button"
            className="px-2 py-1 text-white text-md bg-sky-700 rounded cursor:pointer"
            onClick={()=>handleDelete(index)}
            >Delete</button>
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
            </li>)}</ul>
           </div>
        </div>
    )
}
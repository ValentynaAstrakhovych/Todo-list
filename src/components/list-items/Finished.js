import React from "react";
import { useContext } from "react";
import { TaskMoving } from "../list/List";

export default function Finished () {
   const {moveTask3, setMoveTask3, date}=useContext(TaskMoving);
   const handleDelete=(index)=>(setMoveTask3(moveTask3.filter((o, i) => index != i)));
 return(
   <div className="md:mr-2 mb-3 container px-5 py-5 bg-sky-200 flex flex-col justify-between rounded h-fit">
   <h2 className="text-sky-900 text-xl font-bold text-center mb-3">Finished</h2>
   <div>
    <ul>{moveTask3.map((task, index)=><li className="text-sky-900 font-normal text-md mb-2 bg-sky-100 rounded px-2 py-2 flex flex-row flex-nowrap justify-between items-center mb-2">{task}
    {<div><button 
    type="button"
    className="px-2 py-1 text-white text-md bg-sky-700 rounded cursor:pointer"
    onClick={()=>handleDelete(index)}
    >Delete</button>
    <div><span className="text-xs">{date}</span></div>
    </div>
    }
    </li>)}</ul>
   </div>
</div>
 )
}
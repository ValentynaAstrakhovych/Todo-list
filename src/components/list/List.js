import React, { useContext } from "react";
import Backlog from "../list-items/Backlog"
import Ready from "../list-items/Ready"
import InProgress from "../list-items/inProgress"
import Finished from "../list-items/Finished"
import { createContext } from "react";
import {useLocalStorage} from "../customHooks/useLocalStorage"
import {NumbersOfTasks} from "../../pages/Main/MainPage"

export const TaskMoving = createContext();

export default function List() {
   const [moveTask, setMoveTask]=useLocalStorage("moveTask",[]);
   const [moveTask2, setMoveTask2]=useLocalStorage("moveTask2",[]);
   const [moveTask3, setMoveTask3]=useLocalStorage("moveTask3",[]);
   const [date,setDate]=useLocalStorage("date","");

   const {setActive, setFinished}=useContext(NumbersOfTasks);

  (function(){
      const activeArr = [...moveTask, ...moveTask2];
      const finishedArr=[...moveTask3];
      setActive((activeArr.flat()).length);
      setFinished((finishedArr.flat()).length);
   })();

   return(
   <div>
      <div className="flex flex-row justify-between flex-wrap md:flex-nowrap">
         <TaskMoving.Provider value={{moveTask, setMoveTask, moveTask2, setMoveTask2, moveTask3, setMoveTask3, date, setDate}} >
         <Backlog  />
         <Ready />
         <InProgress />
         <Finished />
         </TaskMoving.Provider>
      </div>
   </div>
   )
}
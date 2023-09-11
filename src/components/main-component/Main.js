import React from "react";
import { useContext } from "react";
import {AuthContextd} from "../../pages/Main/MainPage"
import EmptyState from "../empty-state/Empty-state";
import List from "../list/List"


export default function Main(){
    const [isLogged] = useContext(AuthContextd)

    console.log(isLogged);
    return(
        <main className="bg-sky-400 h-full py-10 px-5">
            <>{isLogged?
            (<List/>):
            (<EmptyState/>)}</>    
        </main>
    )
}
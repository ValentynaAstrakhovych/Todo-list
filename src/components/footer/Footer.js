import React, { useContext } from "react";
import { useState} from "react";
import {NumbersOfTasks, AuthContextd} from "../../pages/Main/MainPage"

export default function Footer() {
   const [isLogged] = useContext(AuthContextd)
   const {active, finished}=useContext(NumbersOfTasks);
	return (
		<footer className="bg-sky-700 px-5 py-5 text-white text-lg font-semibold fixed end-0 right-0 left-0 absolute">
			<div className="flex flex-row flex-nowrap justify-start aligin-center">
                <div className="mr-7">
                    {isLogged && <h4>Active tasks: {active}</h4>}
                </div>
                <div>
                {isLogged && <h4>Finished tasks: {finished}</h4>}
                </div>
            </div>
		</footer>
	)
}

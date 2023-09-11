import React from "react";
import { useContext } from "react";
import {AuthContextd} from "../../pages/Main/MainPage";


export default function Header() {
	const [isLogged, setIsLogged] = useContext(AuthContextd);
  
	return (
		<header className="flex flex-row flex-nowrap justify-between aligin-center sticky top-0 bg-sky-700 px-5 py-5 text-white text-lg font-semibold ">
			<div>
				<h1>ToDo App</h1>
			</div>
			<button id="authorization" onClick={()=>setIsLogged(!isLogged)}>{isLogged? 'Log out' : 'Log in'}</button>
		</header>
	)
}


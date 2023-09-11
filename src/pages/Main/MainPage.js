import React, { createContext, useState } from "react";
import Header from "../../components/header/Header";
import Main from "../../components/main-component/Main";
import Footer from "../../components/footer/Footer";


export const AuthContextd = createContext();
export const NumbersOfTasks = createContext();

export default function MainPage() {
  const [isLogged, setIsLogged]= useState(false);
  const [active, setActive]=useState(0);
  const [finished, setFinished]=useState(0);
  
  return (
    <div className="relative h-screen">
          <AuthContextd.Provider value={[isLogged, setIsLogged]}>
          <Header  />
          <NumbersOfTasks.Provider value={{active, setActive, finished, setFinished}}>
          <Main />
          <Footer />
          </NumbersOfTasks.Provider>
          </AuthContextd.Provider>
    </div>
  );
}

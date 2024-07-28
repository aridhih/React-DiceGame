import PlayGame from "./Components/PlayGame/PlayGame";
import StartGame from "./Components/StartGame/StartGame";

import React,{useState} from "react";
function App() {
   const [Startgame,setStartgame]=useState(false);

   const Toggle = () => {
     setStartgame(!Startgame);
   }
  return (
    <div>
      { Startgame ? <PlayGame/> : <StartGame Toggle={Toggle}/> }
      
    </div>
  );
}

export default App;

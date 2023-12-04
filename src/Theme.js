import { useState,useEffect } from "react";
import "./index.css";


const ChangeBg=()=>{
const [status,setStatus]=useState("Dark");
  const [bgColour,setBgColour]=useState(false);
  const[CurrentDisp,setCurrentDisp]=useState(false);
  const handleClick=()=>{
    if(bgColour===false && CurrentDisp===false){
      setBgColour(true);
      setCurrentDisp(true);

      setStatus("Dark");


    }
    if(bgColour===true && CurrentDisp===true){
      setBgColour(false);
      setCurrentDisp(false);
     setStatus("Light");
    }

    document.body.className = bgColour ? "dark" : "light";

  };

  
  return(
    <div>
      
      
<button className={CurrentDisp ? "bg1" : "bg2"} onClick={handleClick}>{status}</button>

    </div>
  )
}

export default ChangeBg;
import {useEffect} from "react";
import {useState} from "react";

function Useeffect(){

const[data,setdata] = useState("");
const[data1,setdata1] = useState("");

const checkbox =(e) =>{
    setdata(e.target.value)
}

const checkbox1=(e) =>{
    setdata1(e.target.value)
}

useEffect(()=>{
    console.log("hi")
},[data]);

return(<>
  <input type = "text" onChange={checkbox}/>
  <input type = "text" onChange={checkbox1}/>



</>)
}

export default Useeffect;

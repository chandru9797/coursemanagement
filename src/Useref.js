import {useRef} from "react";

function Useref(){
    const reference = useRef();
    const reference1 = useRef();


const checkvalue = () =>{
    console.log(reference.current.value,reference1.current.value);
}




return (

     <>
       
       <input type="text"  ref={reference}/>
       <input type="password" ref={reference1}/>
       <button onClick={checkvalue}>alert</button>
      
     
     </>
)

};

export default Useref;




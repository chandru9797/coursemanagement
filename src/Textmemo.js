import {useMemo,useState} from "react";
import styles from "./Sample.module.css";

function Textmemo(){

    const [count,setCount] = useState(0);

    const calculator1= useMemo( ()=>calculator(count),[count]);

    return (<> <h1 className={styles.error}> s</h1> {calculator1}</>)
    
     
}
const calculator =(num)=>{
    for (let i=0;i<100;i++){
        num+=1;
    }
    return num; 
}

export default Textmemo;
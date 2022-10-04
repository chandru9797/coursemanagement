import React from "react";
import {useContext} from "react";
import {userContext} from "react";

function Sample(){
    const name = useContext(userContext);
    return <>{name}</>
}

export default Sample;
import React from "react";
const ScrollListOfArt =(props) =>{
    return(
        <div style={{overflowY:"scroll",height:'70vh'}}>{props.children}</div>
    );
}

export default ScrollListOfArt;
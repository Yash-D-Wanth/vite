import React,{useState} from 'react'
function MemoComp(props){
    console.log("rendering memo component")
    return(
        <>
        {props.name}
        </>
    )
}
export default React.memo(MemoComp)

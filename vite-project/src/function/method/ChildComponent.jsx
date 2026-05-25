import react from 'react'
export default function ChildComponent(props){
    return(
        <>
        <button onClick={()=>props.from("nandhini")}>display</button>
        </>
    )
}
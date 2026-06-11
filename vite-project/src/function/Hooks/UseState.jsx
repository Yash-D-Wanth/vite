import {useState} from 'react'
export default function UseState(){
    // const [name,setName]=useState({firstName:"",lastName:""})
    // const initial=0
    // const [count,setCount]=useState(initial)
    // const five=()=>{
    //     for(let i=0;i<5;i++){
    //         setCount(prevCount=>prevCount+1)
    //     }
    // }
    // const [items,setItem]=useState([])
    // function add(){
    //     setItem([...items,{
    //         id:items.length,
    //         value:Math.floor(Math.random()*10)+1
    // }])
    // }
    return(
        <>
        {/* <button onClick={()=>add()}>add</button>
        <ul>
            {items.map(item=>(<li key={item.id}>{item.value}</li>))}
        </ul> */}
        {/* <input type="text" value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}></input>
        <p>{name.firstName}</p>
        <input type="text" value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>
        <p>{name.lastName}</p> */}
        {/* <p>{count}</p>
        <button onClick={()=>setCount(
            prevCount=>prevCount+1
        )}>add</button>
        <button onClick={()=>setCount(prevCount=>prevCount-1)}>sub</button>
        <button onClick={()=>five()}>increment 5</button> */}
        </>
    )
}
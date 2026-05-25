import { useState } from 'react'
import ChildComponent from './ChildComponent'
export default function ParentComponent(){
    const [user,setUser]=useState("yashwanth")
    const display=(name)=>{
        alert(`hi ${user} from ${name}`)
    }
    return(
        <>
            <ChildComponent from={display}/>
        </>
    )
}
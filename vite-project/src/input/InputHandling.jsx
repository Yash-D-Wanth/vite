import react,{useState} from 'react'
import Display from './Display'
export default function InputHandling(){
    const [firstInput,setFirstInput]=useState("")
    const [secondInput,setSecondInput]=useState("")
    const [thirdInput,setThirdInput]=useState("")
    const [output,setOutput]=useState([])
    const [counter,setCounter]=useState(0)
    const displayName=(event)=>{
        setFirstInput(event.target.value)
    }
    const displayAge=(event)=>{
        setSecondInput(event.target.value)
    }
    const displayDepartment=(event)=>{
        setThirdInput(event.target.value)
    }
    const displayForm=(event)=>{
        event.preventDefault()        
        const newInput = 
        {
            id:counter,
            username: firstInput,
            age: secondInput,
            department: thirdInput
        }
        setOutput([...output,newInput])
        setCounter(counter+1)
    }
    const removeOperation=(selectedId)=>{
        setOutput(output.filter((row)=>row.id!==selectedId))
    }
    return(
    <>
    <Display displayForm={displayForm} firstInput={firstInput} displayName={displayName} secondInput={secondInput} displayAge={displayAge} thirdInput={thirdInput} displayDepartment={displayDepartment} output={output} removeOperation={removeOperation}/>
    </>
    )
}
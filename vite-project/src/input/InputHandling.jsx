import react,{useState} from 'react'
import Display from './Display'
export default function InputHandling(){
    let [firstInput,setFirstInput]=useState("")
    let [secondInput,setSecondInput]=useState("")
    let [thirdInput,setThirdInput]=useState("")
    let [output,setOutput]=useState([])
    let [counter,setCounter]=useState("")
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
    const removeOperation=(selectedRow)=>{
        setOutput(output.filter((row)=>row.id!==selectedRow))
    }
    return(
    <>
    <Display displayForm={displayForm} firstInput={firstInput} displayName={displayName} secondInput={secondInput} displayAge={displayAge} thirdInput={thirdInput} displayDepartment={displayDepartment} output={output} removeOperation={removeOperation}/>
    </>
    )
}
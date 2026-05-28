// import react,{useState} from 'react'
// import Display from './Display'
// export default function InputHandling(){
//     const [firstInput,setFirstInput]=useState("")
//     const [secondInput,setSecondInput]=useState("")
//     const [thirdInput,setThirdInput]=useState("")
//     const [output,setOutput]=useState([])
//     const [counter,setCounter]=useState(0)
//     const displayName=(event)=>{
//         setFirstInput(event.target.value)
//     }
//     const displayAge=(event)=>{
//         setSecondInput(event.target.value)
//     }
//     const displayDepartment=(event)=>{
//         setThirdInput(event.target.value)
//     }
//     const displayForm=(event)=>{
//         event.preventDefault()        
//         const newInput = 
//         {
//             id:counter,
//             username: firstInput,
//             age: secondInput,
//             department: thirdInput
//         }
//         setOutput([...output,newInput])
//         setCounter(counter+1)
//     }
//     const removeOperation=(selectedId)=>{
//         setOutput(output.filter((row)=>row.id!==selectedId))
//     }
//     return(
//     <>
//     <Display displayForm={displayForm} firstInput={firstInput} displayName={displayName} secondInput={secondInput} displayAge={displayAge} thirdInput={thirdInput} displayDepartment={displayDepartment} output={output} removeOperation={removeOperation}/>
//     </>
//     )
// }

import React, { Component } from 'react'
export default class InputHandling extends Component {
    constructor(props) {
        super(props)
        this.usernameRef = React.createRef()
        this.ageRef = React.createRef()
        this.departmentRef = React.createRef()
        this.state = {
            storage: []
        }
    }

    display = (event) => {
        event.preventDefault()
        const username = this.usernameRef.current.value
        const age = this.ageRef.current.value
        const department = this.departmentRef.current.value

        if (!username && !age && !department) return

        const newEntry = {
            id: Date.now(),
            username,
            age,
            department
        }

        this.setState((prevState) => ({
            storage: [...prevState.storage, newEntry]
        }))
    }

    removeOperation = (selectedId) => {
        this.setState((prevState) => ({
            storage: prevState.storage.filter((row) => row.id !== selectedId)
        }))
    }

    render() {
        const { storage } = this.state
        return (
            <>
                <form onSubmit={this.display}>
                    <label>username:</label>
                    <input type="text" ref={this.usernameRef} />
                    <br />
                    <label>age:</label>
                    <input type="text" ref={this.ageRef} />
                    <br />
                    <label>department:</label>
                    <input type="text" ref={this.departmentRef} />
                    <br />
                    <button type="submit">submit</button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <td>username</td>
                            <td>age</td>
                            <td>department</td>
                            <td>actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {storage.map((row) => (
                            <tr key={row.id}>
                                <td>{row.username}</td>
                                <td>{row.age}</td>
                                <td>{row.department}</td>
                                <td>
                                    <button type="button" onClick={() => this.removeOperation(row.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        )
    }
}

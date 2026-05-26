import react from 'react'
export default function Display(props){
    const removeOperation=()=>{
        
    }
    return(
        <>
        <form onSubmit={props.displayForm}>
        <label >username</label>
        <input id="username" type="text" value={props.firstInput} onChange={props.displayName}/>
        <label >user age</label>
        <input id="age" type="text" value={props.secondInput} onChange={props.displayAge}/>
        <label >department</label>
        <input id="department" type="text" value={props.thirdInput} onChange={props.displayDepartment}/>
        <button type="submit">submit</button>
    </form>
    <table>
        <thead>
            <tr>
                <th>Username</th>
                <th>Age</th>
                <th>Department</th>
            </tr>
        </thead>
        <tbody>
            {props.output.map((input, id) => (
                <tr key={input.id}>
                    <td>{input.username}</td>
                    <td>{input.age}</td>
                    <td>{input.department}</td>
                    <button onClick={()=>props.removeOperation(input.id)}>-</button>
                </tr>
            ))}
        </tbody>
    </table>
        </>
    )
}
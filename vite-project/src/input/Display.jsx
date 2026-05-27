import react from 'react'
import Table from './Table'
export default function Display(props){
    return(
        <>
        <form onSubmit={props.displayForm}>
        <label >username</label>
        <input id="username" type="text" value={props.firstInput} onChange={props.displayName}/>
        <label >user age</label>
        <input id="age" type="text"></input>
        <label >department</label>
        <input id="department" type="text" value={props.thirdInput} onChange={props.displayDepartment}/>
        <button type="submit">submit</button>
    </form>
    <Table output={props.output} removeOperation={props.removeOperation}/>
        </>
    )
}
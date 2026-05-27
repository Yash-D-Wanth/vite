export default function Table(props){
    return(
        <>
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
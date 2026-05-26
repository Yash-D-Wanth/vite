export default function ChildMap({person}){
    return(
        <>
        <li>i am {person.name},i am {person.role} of straw hats and many of them call me {person.nickname} my opponents are {person.opponents.map(opponent=>(
            <p key={opponent}>{opponent}</p>
        ))}</li>
        </>
    )
}
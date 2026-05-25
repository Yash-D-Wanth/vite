import react from 'react'
import ChildMap from './ChildMap'
export default function ParentMap(){
    let persons=[
        {
            id:1,
            name:"yashwanth",
            role:"captain",
            nickname:"dark-flame"
        },
        {
            id:2,
            name:"nandhini",
            role:"navigator",
            nickname:"heaven-beauty"
        }
    ]
    return(
        <>
        <ul>
            {persons.map(person=>(
            <ChildMap key={person.id} person={person}/>
        ))}
        </ul>
        </>
    )
}
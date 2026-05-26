import react from 'react'
import ChildMap from './ChildMap'
export default function ParentMap(){
    let persons=[
        {
            id:1,
            name:"yashwanth",
            role:"captain",
            nickname:"dark-flame",
            opponents:["black-beard","imu","kaido"]
        },
        {
            id:2,
            name:"nandhini",
            role:"navigator",
            nickname:"heaven-beauty",
            opponents:["big-mom","luccy","caesar"]
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
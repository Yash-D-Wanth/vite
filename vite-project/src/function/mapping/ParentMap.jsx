import react from 'react'
import ChildMap from './ChildMap'
export default function ParentMap(){
    let persons=[
        {
            id:1,
            name:"luffy",
            role:"captain",
            nickname:"straw-hat",
            opponents:["black-beard","imu","kaido"]
        },
        {
            id:2,
            name:"nami",
            role:"navigator",
            nickname:"cat-burgler",
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
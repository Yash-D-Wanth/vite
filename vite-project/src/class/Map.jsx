import react,{Component} from 'react'
import ChildMap from './ChildMap'
export default class Map extends Component{
    constructor(){
        super()

    }
    render(){
        let persons=[{
            id:1,
            name:"yashwanth",
            age:19,
            skills:["HTML","CSS","JS"]
        },
        {
            id:2,
            name:"zoro",
            age:20,
            skills:["ruby","excel","python"]
        }]
        
        return(
            <>
                {persons.map(person=>(
                    <ChildMap key={person.id} person={person}/>
              ))}
            </>
        )
    }
}
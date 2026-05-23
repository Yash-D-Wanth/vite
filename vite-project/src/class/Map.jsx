import react,{Component} from 'react'
import ChildMap from './ChildMap'
export default class Map extends Component{
    constructor(){
        super()

    }
    render(){
        let persons=[{
            name:"yashwanth",
            age:19,
            skills:["HTML","CSS","JS"]
        },
        {
            name:"Nandhini",
            age:20,
            skills:["ruby","excel","python"]
        }]
        
        return(
            <>
              <p>{persons.map(person=>(
                <ChildMap person={person}/>
              ))} </p>
            </>
        )
    }
}
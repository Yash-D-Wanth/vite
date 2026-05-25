import react,{Component} from 'react'
export default class ChildMap extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <li>
                i am {this.props.person.name} i am {this.props.person.age} and i know {this.props.person.skills.map((skill, index)=>(
                <p key={index}>{skill}</p>
            ))}
            </li>
            </>
        )
    }
}
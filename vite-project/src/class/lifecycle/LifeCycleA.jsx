import react,{Component} from 'react'
import LifeCycleB from './LifeCycleB'
export default class LifeCycleA extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"yashwanth"
        }
        console.log("constructor life cycle - A")
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps life cycle - A")
        return true
    }
    componentDidMount(){
        console.log("componentDidMount life cycle - A")
    }
    render(){
        console.log("render life cycle - A")
        return(
            <>
            <LifeCycleB/>
            </>
        )
    }
}
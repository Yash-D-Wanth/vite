import react,{Component} from 'react'
export default class LifeCycleB extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"yashwanth"
        }
        console.log("constructor life cycle - B")
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps life cycle - B")
        return true
    }
    componentDidMount(){
        console.log("componentDidMount life cycle - B")
    }
    render(){
        console.log("render life cycle - B")
        return(
            <>
            </>
        )
    }
}
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
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate life cycle - B")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("getSnapShotBeforeUpdate life cycle - B")
        return null
    }
    componentDidUpdate(){
        console.log("componentDidUpdate life cycle - B")
    }
    update=()=>{
        this.setState({
            name:"vishwa"
        })
    }
    render(){
        console.log("render life cycle - B")
        return(
            <>
            </>
        )
    }
}
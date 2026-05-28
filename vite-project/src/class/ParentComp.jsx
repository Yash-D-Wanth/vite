import { Component } from "react";
import PureComp from './PureComp'
export default class ParentComp extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"vishwa"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"yashwanth"
            })
        },3000)
    }
    render(){
        return(
            <>
            {console.log("parent component")}
            <PureComp name={this.state.name}/>
            </>
        )
    }
}
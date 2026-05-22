import react,{Component} from 'react'
export default class State extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    increment(){
        this.setState((prevState)=>({
            count:prevState.count+1
        }),console.log("inside "+this.state.count))
        console.log(this.state.count)
    }
    render(){
        return(
            <>
            <h1>count - {this.state.count}</h1>
            <button onClick={()=>this.increment()}>add</button>
            </>
        )
    }
}
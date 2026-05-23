import react,{Component} from 'react'
export default class EventBind extends Component{
    constructor(){
        super()
        this.state={
            state:"yashwanth"
        }
        // this.display=this.display.bind(this)
    }
    display=()=>{
        this.setState({
            state:"no you're aegon targaryen true heir to the iron throne"
        })
    }
    render(){
        return(
            <>
            <h1>i am {this.state.state}</h1>
            {/* <button onClick={this.display.bind(this)}>you're</button> 
            <button onClick={this.display}>you're</button>
            <button onClick={()=>this.display()}>no you're</button> */}
            <button onClick={this.display}>you're</button>
            </>
        )
    }
} 
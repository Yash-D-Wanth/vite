import React,{Component} from 'react'
export default class Refs extends Component{
    constructor(props){
        super(props)
        this.inputRef=React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    display=()=>{
        alert(`${this.inputRef.current.value}`)
    }
    render(){
        return(
            <>
            <input type="text" ref={this.inputRef}/>
            <button onClick={()=>this.display()}>submit</button>
            </>
        )
    }
}
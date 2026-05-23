import React,{PureComponent} from 'react'
import ChildComponent from './ChildComponent'
export default class ParentComponent extends PureComponent{
    constructor(){
        super()
        this.state={
            name:"yashwanth"
        }
    }
    display=(input)=>{
        alert(`hi ${this.state.name} from ${input}`)
    }
    render(){
        return(
            <>
            <ChildComponent from={this.display}/>
            </>
        )
    }
}
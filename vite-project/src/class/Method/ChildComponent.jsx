import React,{PureComponent} from 'react'
export default class ChildComponent extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <button onClick={()=>this.props.from("nandhini")}>display</button>
            </>
        )
    }
}
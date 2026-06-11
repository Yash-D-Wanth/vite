import React, { Component } from 'react'
const Button =(WrappedComponent,incrementNumber)=>{
    class Button extends Component{
        constructor(props){
            super(props)
            this.state={
                count:0
            }
        }
        increment=()=>{
            this.setState(prevState=>{
                return{ count:prevState.count+incrementNumber}
            })
        }
        render(){
            return(
                <>
                <WrappedComponent count={this.state.count} increment={()=>this.increment()} />
                </>
            )
        }
    }
    return Button
}
export default Button

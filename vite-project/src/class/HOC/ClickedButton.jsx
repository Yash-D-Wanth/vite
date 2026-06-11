import { Component } from 'react'
import Button from './Button'
class ClickedButton extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const{count,increment}=this.props
        return(
        <>
        <button onClick={increment}>clicked {count} times</button>
        </>
        )
    }
}
export default Button(ClickedButton,5)
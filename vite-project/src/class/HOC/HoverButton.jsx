import {Component} from 'react'
import Button from './Button'
class HoverButton extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {count,increment}=this.props
        return(
            <>
            <button onMouseOver={increment}>clicked {count} times</button>
            </>
        )
    }
}
export default Button(HoverButton,10)
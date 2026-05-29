import React,{Component} from 'react'
import ReactDOM from 'react-dom'
export default class Portals extends Component{
    constructor(){
        super()
    }
    render(){
        return ReactDOM.createPortal(
            <h1>yashwanth</h1>,document.getElementById("portal-root")
        )
    }
}

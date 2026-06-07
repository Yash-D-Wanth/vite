import {Component} from 'react'
import React from 'react-dom'
export default class MainPortal extends Component{
    render(){
        return React.createPortal(
            <>
            
            </>,document.getElementById("root-div")
        )
    }
}
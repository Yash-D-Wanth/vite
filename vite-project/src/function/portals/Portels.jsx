import React from 'react'
import ReactDOM from 'react-dom'
export default function Portals(){
    return ReactDOM.createPortal(
        <div className="portal-content">
            <h1>king in the north</h1>
        </div>,
        document.getElementById('portal-root')
    )
}
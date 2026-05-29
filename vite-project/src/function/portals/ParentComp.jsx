import React, { useState } from 'react'
import Portals from './Portels'

export default function ParentComp(){
    const [showPortal, setShowPortal] = useState(false)

    const togglePortal = () => {
        setShowPortal(prev => !prev)
    }
    return(
        <>
        <h1>yashwanth</h1>
        <button onClick={togglePortal}>
            {showPortal ? 'Hide portal' : 'Show portal'}
        </button>
        {showPortal && <Portals />}
        </>
    )
}
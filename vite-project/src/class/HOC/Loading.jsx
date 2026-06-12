import React, {Component} from 'react'
import Waiting from './Waiting'
class Loading extends Component{
    render(){
        const {change, loading}=this.props
        return(
            <>
            <h1>{loading ? 'user loaded' : 'loading...'}</h1>
            <button onClick={change}>change</button>
            </>
        )
    }
}
export default Waiting(Loading)
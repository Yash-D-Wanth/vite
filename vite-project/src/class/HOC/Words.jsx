import {Component} from 'react'
import StylingHOC from './Styling'
class Words extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <h1>blah blah</h1>
            </>
        )
    }
}
export default StylingHOC(Words)
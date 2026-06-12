import react,{Component} from 'react'
const Styling =(WrappedComponent)=>{
class StylingHOC extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <h1 style={{border:"2px solid black"}}>
                <WrappedComponent {...this.props}/>
            </h1>
            </>
        )
    }
}
return StylingHOC
}
export default Styling

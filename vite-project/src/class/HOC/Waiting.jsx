import React,{Component} from 'react'
const Waiting=(WrappedComponent)=>{
class Waiting extends Component{
    constructor(props){
        super(props)
        this.state={
            loading:false
        }
    }
    change=()=>{
        this.setState(prevState=>{
            return {loading:!prevState.loading}
        })
    }
    render(){
        return(
            <>
            <WrappedComponent change={this.change} loading={this.state.loading}/>
            </>
        )
    }
}
return Waiting
}
export default Waiting
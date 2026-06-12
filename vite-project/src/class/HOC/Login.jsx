import react,{Component} from 'react'
const Login =(WrappedComponent)=>{
    class Login extends Component{
        constructor(){
            super()
            this.state={
                status:false
            }
        }
        Change=()=>{
            this.setState(prevState=>{
                return {status:!prevState.status}
            })
        }
        render(){
            return(
                <>
                <WrappedComponent Change={this.Change} status={this.state.status}/>
                </>
            )
        }
    }
    return Login
}
export default Login
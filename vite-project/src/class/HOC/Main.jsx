import react,{Component} from 'react'
import Login from './Login'
class Main extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const{Change,status}=this.props
        return(
            <>
            {status?"logged in":"loading ..."}
            <button onClick={()=>Change()}>{status?"log out":"log in"}</button>
            </>
        )
    }
}
export default Login(Main)
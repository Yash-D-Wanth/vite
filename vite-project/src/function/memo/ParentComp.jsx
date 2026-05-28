import react,{Component} from 'react'
import MemoComp from './MemoComp'
export default class ParentComp extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"yashwanth"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"vishwa"
            })
            console.log("parent compoennt")
        },2000)
    }
    render(){
        return(
            <>
            <MemoComp name={this.state.name}/>
            </>
        )
    }
}
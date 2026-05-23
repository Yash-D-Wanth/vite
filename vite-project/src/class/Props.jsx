import react,{Component} from 'react'
export default class Props extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {name}=this.props
        return(
            <>
                <h1>i am {name}</h1>
                {this.props.children}
            </>
        )
    }
}
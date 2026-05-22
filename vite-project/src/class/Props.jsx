import react,{Component} from 'react'
export default class Props extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <>
                <h1>i am {this.props.name}</h1>
                {this.props.children}
            </>
        )
    }
}
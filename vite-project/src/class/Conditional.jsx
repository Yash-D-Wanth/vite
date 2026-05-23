import react,{PureComponent} from 'react'
export default class Conditional extends PureComponent{
    constructor(){
        super()
        this.state={
            isLogged:true
        }
    }
    render(){
        return(
            <>
            {this.state.isLogged?<p>welcome nandhini</p>:<p>welcome yashwanth</p>}
            </>
        )
    }
}
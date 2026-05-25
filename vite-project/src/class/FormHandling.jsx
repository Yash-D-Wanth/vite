import react,{Component} from 'react'
export default class FormHandling extends Component{
    constructor(){
        super()
        this.state={
            name:"",
            yonko:""
        }
    }
    displayName=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
    displayState=(event)=>{
        this.setState({
            yonko:event.target.value
        })
    }
    handleForm=(event)=>{
        alert(` the entered name is ${this.state.name} he selected ${this.state.yonko}`)
        event.preventDefault()
    }
    render(){
        const{name,yonko}=this.state
        return(
            <>
            <form onSubmit={this.handleForm}>
                <label>pirate name:</label>
            <input type="text" value={name} onChange={this.displayName}></input>
            <select value={yonko} onChange={this.displayState}>
                <option value="white-beard">white-beard</option>
                <option value="red-haired">shanks</option>
                <option value="black-beard">teach</option>
                <option value="straw-hat">luffy</option>
            </select>
            <button type="submit">submit</button>
            </form>
            </>
        )
    }
}
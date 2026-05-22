import react,{PureComponent} from 'react'
export default class Counter extends PureComponent{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    increment(){
        this.setState((prevState)=>({
            count:prevState.count+1
        }))
    }
    decrement(){
        this.setState((prevState)=>({
            count:prevState.count-1
        }))
    }
    render(){
        return(
            <>
            <h1>count:{this.state.count}</h1>
            <button onClick={()=>this.increment()}>+</button>
            <button onClick={()=>this.decrement()}>-</button>
            </>
        )
    }
}
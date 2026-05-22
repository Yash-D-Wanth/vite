export default function Props(props){
    return(
        <>
        <h1>hello {props.name}</h1>
        {props.children}
        </>
    )
}
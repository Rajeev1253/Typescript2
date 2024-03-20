type GreetProps={
    name:string,
    maxCount?:number,
    isLoggedIn: boolean
    
}


export const Greet = (props:GreetProps)=>{
    return(
        <div>
            <h2>
                {props.isLoggedIn ?`Welcome${props.name} you have${props.maxCount} unread message`:"Welcome Guest"}
              </h2>
        </div>
    )
}
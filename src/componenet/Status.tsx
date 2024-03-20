type StatusProps ={
    status: "loading" | "success" | "error"
}
export const Status = (props:StatusProps)=>{
    let message
    if(props.status === "loading"){
        message ='Loading....'
    }
    else if(message === "success"){
        message = "Data Fetched sucessfully"
    }
    else if(message === "error"){
        message = "Error"
    }
    return(
        <div>
            <h2>Status = {message}</h2>
        </div>
    )
}
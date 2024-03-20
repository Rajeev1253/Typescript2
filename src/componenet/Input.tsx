import react from "react"

type InputProps = {
    value:string,
    handleChange: (event:React.ChangeEvent<HTMLInputElement>)=> void
}

export const Input = (props:InputProps)=>{
    return <input type="text" value={props.value} onChange={props.handleChange}/>
}
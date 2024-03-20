import React from 'react';
import './App.css';
import { Greet } from './componenet/Greet';
import { PersonList } from './componenet/PersonList';
import { Status } from './componenet/Status';
import { Heading } from './componenet/Heading';
import { Oscar } from './componenet/Oscar';
import { Button } from './componenet/Button';
import { Input } from './componenet/Input';
const PersonName = [{
  first:"Bruce",
  last:"Wayne"
},
{
  first:"Rajeev",
  last:"Goyal"
},
{
  first:"dilkash",
  last:"jaura"
}
]

function App() {
  return (
    <div className="App">
      <Greet name="Rajeev" maxCount={20} isLoggedIn={true}/>
      <PersonList name={PersonName}/>
      <Status status="success"/>
      <Oscar>
     <Heading>Oscar goes to Leanardo Capario</Heading>
      </Oscar>
      <Button handleClick={()=>{
        console.log("Button clicked")
      }}/>  
      <Input value='' handleChange={(event)=>console.log(event)}/> 
      <div style ={{width:"400px",height:"100px",border:"1px solid black",backgroundColor:"yellow"}}></div> 
      </div>
  );
}

export default App;

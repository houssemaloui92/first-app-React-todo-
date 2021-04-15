
import React from 'react'

function Todoform({input,setinput,todo,settodo}) {
const inputTextHnadler =(e)=>{
   setinput(e.target.value);
   console.log(e.target.value)

}
const submithandler =(e)=>{
    e.preventDefault();
settodo([...todo ,{text: input, id : Math.random()*10000}])
setinput('')
};
    return (
      
             <div>
   <from>
     <input  placeholder ="ADD YOUR PLAN" value ={input} onChange={inputTextHnadler} type ='text'/>
     
    <button onClick={submithandler} type='submit' >
SAVE YOUR PLANS
    </button>
   </from>
        </div>
    )
}

export default Todoform

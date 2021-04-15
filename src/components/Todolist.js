import React from 'react'
import Todo from './Todo'

function Todolist({todo}) {
  
    
    return (
       <div>
           <ul>
              {todo.map(x=>(

            <Todo text={x.text} />
    ))}
            
               
           </ul>
        </div>
    )
}

export default Todolist

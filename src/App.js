import React , {useState} from 'react';
import './App.css'
import Todoform from './components/Todoform'
import Todolist from './components/Todolist'

function App() {
const [input,setinput] = useState('')
const [todo, settodo] = useState([])
  return (
    <main>
      
   
    <div >
    <header className="head">
      WHAT'S YOUR PLANS FOR THE DAY ?
    </header>
    
    <form className ="form">
   <Todoform  input={input} todo ={todo} settodo={settodo} setinput ={setinput}/>
   <Todolist todo={todo}/>
   </form>
  
  
   
    </div>
    </main>
  )
}

export default App;

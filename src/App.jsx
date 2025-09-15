import { useState } from "react"
import Navbar from "./Navbar"

const App = () => {
  var [a,b] = useState(69);
  return (
    <>
    <Navbar des="I became a softare engineer"  data={{age:25, name:"anu"}}/>
    <div className="w-full h-screen bg-zinc-900 text-white p-4 ">
      <h1>{a}</h1>
      <button onClick={() => b(a+1)} className="p-3 bg-green-500 hover:bg-green-700 text-white font-bold rounded-md">click</button>
      
      <h1 className="">Nikita Singh</h1>
    </div> 
    </>
    
  )
}

export default App
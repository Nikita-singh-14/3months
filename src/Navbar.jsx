import React, { useState } from 'react'

const Navbar = ({ des, data}) => {
    const [a,b] = useState(false);
  return (
    <div className='p-5'>
        <h1 className={`${a===false ? "text-red-500" : "text-blue-500"}`}>{a===false ? "N" : "anu"}</h1>
        <h4>{des}</h4>
        <h3>{data.age}</h3>
        <h3>{data.name}</h3>
        <button onClick={() => b(!a)}>
            change
        </button>
        <ul>
            <li></li>
        </ul>
    </div>
  )
}

export default Navbar
//Use useeffect to display an alert saying "Component has been Updated" every time the component's state changes

import React, { useEffect, useState } from 'react'

function Main() {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        alert('Component has been updated')
    },[count]);
  return (
    <div>
    <h1 style={{marginTop:'300px'}}>No.of clicks : {count}</h1>
    <button style={{marginTop:'30px'}} onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}

export default Main
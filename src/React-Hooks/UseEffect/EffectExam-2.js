import React, { useEffect, useState } from "react";


// useEffect they are 4 cases
// 1. Run useEffect without dependancy
// 2. Given [] empty array or dependancy
// 3. Given [count] anything dependancy in useEffect you need more than [count, toggle, data] like give ( , ) comma
// 4. 


const IndexTwo = () => {
    const [count, setCount] = useState(0)
    const [toggle, setToggle] = useState(true)
    const [pageWidth, setPageWidth] = useState(window.innerWidth)
   useEffect (() => {
    const resizeHandler = () =>{
      setPageWidth(window.innerWidth)
    }
    window.addEventListener('resize', resizeHandler)
    return () =>{
      window.removeEventListener('resize', resizeHandler)
    }
  }, [count, toggle, pageWidth]);
  return(
    <div>
        <h1>I'm from useEffect </h1>
        <h1>{pageWidth}</h1>
        <h2 onClick={()=>setToggle(!toggle)}>{toggle ? "Open" : "Close"}</h2>
        <h1>Count- {[count]}</h1>
        <button onClick={()=>{
            setCount(count + 1)
        }}>+</button>
    </div>
  )
};

export default IndexTwo;

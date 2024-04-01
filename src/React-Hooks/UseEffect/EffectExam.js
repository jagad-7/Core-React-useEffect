import React, { useEffect, useState } from "react";

const Index = () => {
    const [count, setCount] = useState(0)
   useEffect (() => {
    console.log("Hello Jagadeesh")
    // },[]); this  will run only once when the component is mounted empty dependacy is []  so it runs only one time in life cycle of
  }, []);
  return(
    <div>
        <h1>I'm from useEffect </h1>
        <h1>Count- {[count]}</h1>
        <button onClick={()=>{
            setCount(count + 1)
        }}>+</button>
    </div>
  )
};

export default Index;

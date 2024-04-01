import React, { useEffect, useState } from 'react'
import './style.css'


const URL = "https://jsonplaceholder.typicode.com/posts"

export default function ExamOfUseEffect() {
 const [userData, setUserData] = useState([])
 const [loading, setLoading] = useState(false)
 const [isError, setIsError] = useState({status: false, msg: ''})

const userDatafetch = async (apiURL) => {
   setLoading(true)
   setIsError({status: false, msg: ''})
   try {
      const res = await fetch(apiURL);
      const data = await res.json();
      setUserData(data);
      setLoading(false)
      setIsError({status: false, msg: ''})
      if(res.status === 404){
         throw new Error ('Data not Pound')
      }
   } catch (error) {
      setLoading(false)
      setIsError({status: true, msg: error.message ||  'Something is Happed, plzz try agian later!'})
   }
}

 useEffect (() =>{
    userDatafetch(URL)
 }, [])

   if(loading){
      return(
         <div>
            <h4>Loading...</h4>
         </div>
      )
   }
if( isError?.status){
   return(
      <div>
         <h4 style={{color: 'red'}}>{isError.msg}</h4>
      </div>
   )
}
  return (
   <div>
        <h1>ExamOfUseEffect-2</h1>
    <ul>
      {
         userData.map((eachData)=>{
            const {id, userId, title, body} = eachData;
            return(
               <li key={id} className="fetch"> 
                  <h3>{userId}</h3>
                  <h3>{title}</h3>
                  <h4>{body}</h4>
               </li>
            )
         })
      }
    </ul>
   </div>
  )
}


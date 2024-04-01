import React, { useEffect, useState } from "react"
import './style.css'

const URL = "https://jsonplaceholder.typicode.com/users";

const ExampOne = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState({ status: false, msg: "" });

  const fetchUserData = async (apiUrl) => {
    setLoading(true);
    setIsError({ status: false, msg: "" });
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setUserData(data);
      setLoading(false);
      setIsError({ status: false, msg: "" });
      if(response.status === 404){
        throw new Error('404 Data not Pound')
      }
    } catch (error) {
      setLoading(false);
      setIsError({
        status: true,
        msg: error.message || "Something went wrong, Please try agin!",
      });
    }
  };
  useEffect(() => {
    fetchUserData(URL);
  }, []);
  if(loading){
    return(
        <div>
            <h3>Loading......</h3>
        </div>
    )
  }
  if(isError?.status) // option shining is called (isError.status)
  {
    return(
        <div>
            <h3 style={{color: 'red'}}>{isError.msg}</h3>
        </div>
    )
  }
  return (
    <div>
      <h1>API Data Fetching useEffect-1 Example</h1>
      <ul>
        {userData.map((eachUser) => {
          const { name, email, id } = eachUser;
          return (
            <li key={id} className="fetch">
              <div className="one">{name}</div>
              <div className="two">{email}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExampOne;

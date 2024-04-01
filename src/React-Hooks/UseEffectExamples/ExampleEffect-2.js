import React, { useState, useEffect } from "react";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
export default function ExampleEffectwo() {
  const [dringData, setDringData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState({status: false, msg: ''})

  const fetchDrink = async (apiURL) => {
    setLoading(true);
    setIsError({status: false, msg: ''})
    try {
      const res = await fetch(apiURL);
      const { drinks } = await res.json();
      setDringData(drinks);
      setLoading(false);
    setIsError({status: false, msg: ''})
    } catch (error) {
      setLoading(false);
    setIsError({status: true, msg: error.message || 'Something Went Wrong!'})
    }
  };

  useEffect(() => {
    const correctURL = `${URL}${searchTerm}`;
    fetchDrink(correctURL);
  }, [searchTerm]);

  return (
    <div>
      <form>
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Enter Details"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <hr />
      {loading && !isError?.status && <h4>Loading....</h4>}
      {!isError?.status && <h4 style={{color: 'redwine'}}>{isError.msg}</h4>}
      {!loading && !isError?.status && (
        <ul>
          {dringData.map((eachData) => {
            const { idDrink, strDrink, strDrinkThumb } = eachData;
            return (
              <li key={idDrink}>
                <div>
                  <img src={strDrinkThumb} alt={strDrink} />
                </div>
                <div>
                  <h3 className="text">{strDrink}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

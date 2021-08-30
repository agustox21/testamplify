import  "./App.css";
import React, { useEffect, useState } from "react";
import { loadingBar } from "aws-amplify";

function App() {
  
   const [data, setData] = useState(null); 
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);


     useEffect(() => {
         fetch("https://jsonplaceholder.typicode.com/users") 
         .then (res => res.json())
         .then(result => 
            {
                setData(result);
                setLoading(false);
            },
            (error) => {
                 console.log("error Fetching data", error);
                 setError(error);
            }
           );
         /* .then(response=>  {
             if (response.ok){
                  return response.json();
             }
             throw response;
          })
          .then(res =>
          {
                setData(res);
          })
          .catch (error => {
              console.error("Error Fetching data :" , error);
              setError(error);
          })
          .finally(() => {
              setLoading(false);
          });   */
        },[]);
      
       if (loading) return "Loading...";
       if (error) return "Error!"; 

       return (
        <div>
          <h1>Top 5 ways to fetch data in React - 1</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      );

}

export default App;
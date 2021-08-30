import  "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Sample2() {
  
   const [data, setData] = useState(null); 
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);


     useEffect(() => {
         axios("https://jsonplaceholder.typicode.com/users").then(
          (res) => {
             setData(res.data);
             setLoading(false);
          },
          (error) => {
             console.log("Error fetching data :", error);
             setError(error); 
          } 
         );
   
        },[]);
      
       if (loading) return "Loading...";
       if (error) return "Error!"; 

       return (
        <div className="App">
          <h1>Top 5 ways to fetch data in React - Sample 2</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      );

}

export default Sample2;
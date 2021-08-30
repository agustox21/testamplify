import  "./App.css";
import React, { useEffect, useState } from "react";
import{ useQuery, userQuery } from 'react-query';

function Sample5() {
   
   const  { isLoading, error , data } = useQuery("users", () =>
     fetch("https://jsonplaceholder.typicode.com/users").then ((res)=>
     res.json() 
     )
   );
          
   if (isLoading) return "Loading...";
   if (error) return "Error!"; 

   return (
   <div className="App">
      <h1>Top 5 ways to fetch data in React - 4</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
   </div>
  );

}

export default Sample5;
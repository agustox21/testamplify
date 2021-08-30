import  "./App.css";
import React, { useEffect, useState } from "react";
import useFetch from "react-fetch-hook";
import Sample3 from "./Sample3";

function Sample4() {
   
   const  { isLoading, error , data } = useFetch("https://jsonplaceholder.typicode.com/users"); 
          
   if (isLoading) return "Loading...";
   if (error) return "Error!"; 

   return (
   <div className="App">
      <h1>Top 5 ways to fetch data in React - 4</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
   </div>
  );

}

export default Sample4;
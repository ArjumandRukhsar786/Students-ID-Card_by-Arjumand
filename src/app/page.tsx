import React from "react";
import Card from "./components/card";

export default function Home(){

  return (
   
    <>
      <div className="bg-gradient-to-r from-black to-pink-500 h-12 text-center text-2xl text-white font-extrabold">
        <h1>All Students ID Card</h1>
      </div>
      
       <Card name = 'Muskan Ali' rollno = {278975} day = 'Monday' class = '2 to 5'/><br/>
       <Card name = 'Sana Jawed' rollno = {478990} day = 'Friday' class = '9 to 12'/><br/>
       <Card name = 'Fatima Batool' rollno = {345800} day = 'Sunday' class = '7 to 10'/>
   

   
    </>
  
  );
 
}
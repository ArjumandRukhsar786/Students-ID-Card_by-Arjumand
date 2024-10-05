import React from 'react'

interface Tprops {
  name:string,
  rollno: number,
  class:string,
  day:string

}

const Card = (props : Tprops) => {
  return (
    <>
    <div className='m-4'>
      <div className='bg-orange-200 shadow-lg w-72 border-dashed rounded-lg overflow-hidden transition-transform transform hover:scale-105' >
      <div className='flex items-center p-4'>
        <img 
        src="https://i.pinimg.com/564x/18/69/1e/18691e45314ccfffff68dbec5c7d3db6.jpg" 
        alt={`${props.name}'s profile`} 
        className='w-14 h-14 rounded-full border-2 border-pink-300 mr-4 object-cover'
        />
       <div>
        <h2 className='text-xl font-bold text-blue-600 pl-2'>Student ID Card</h2>
        </div>
       </div>
        <p className='text-gray-600 p-2 font-bold'>Student Name : {props.name}</p>
        <p className='text-gray-600 p-2 font-bold'>Roll Number : {props.rollno}</p>
        <p className='text-gray-600 p-2 font-bold'>Class : {props.class}</p>
        <p className='text-gray-600 p-2 font-bold'>Day : {props.day}</p>
        </div>
    </div>
    </>
  )
}

export default Card
import React, { useState } from 'react'
import '../index.css';
export default function Calc() {
    const [value,setValue]=useState('');
  
  return (
    <div className=' container w-full bg-white   grid '>
    <div className=' mx-auto mt-auto text-4xl font-bold font-mono text-red-900  w-1/4 text-center '>Calculator</div>
    <div className='mx-auto mb-auto bg-gray-400 w-1/4 grid justify-items-center gap-y-3  py-6 px-5 rounded-lg' >
    
    <div className='w-full text-center'>
      <input  className='w-full py-3 rounded-lg text-right font-bold text-3xl px-2 ' placeholder='0' type='text' value={value}/>
    </div>
    <div className='w-full flex justify-around'>
    <button className='bg-green-700 py-1 px-2 rounded w-1/3 font-semibold text-white text-xl' onClick={(e)=>setValue('')}>Clear</button>
    <button className='bg-green-700 py-1 px-2 rounded w-1/3 font-semibold text-white text-xl' onClick={(e)=>setValue( value.slice(0, -1))}>Delete</button>
    </div>
    <div className='w-full flex justify-around'>
    <button className='bg-yellow-600 py-2 px-2 w-1/5 rounded text-center font-semibold text-black text-xl' value='7' onClick={(e)=>setValue(value + e.target.value)}>7</button>
    <button className='bg-yellow-600 py-2 px-2 w-1/5 rounded text-center font-semibold text-black text-xl'  value='8'onClick={(e)=>setValue(value + e.target.value)}>8</button>
    <button className='bg-yellow-600 py-2 px-2 w-1/5 rounded text-center font-semibold text-black text-xl' value='9'onClick={(e)=>setValue(value + e.target.value)}>9</button>
    <button className='bg-yellow-600 py-2 px-2 w-1/5 rounded text-center font-semibold text-black text-xl' value='+' onClick={(e)=>setValue(value + e.target.value)}>+</button>
    </div>
    <div className='w-full flex justify-around'>
    <button className='bg-yellow-600 py-2 px-2 w-1/5 rounded text-center font-semibold text-black text-xl' value='4' onClick={(e)=>setValue(value + e.target.value)}>4</button>
    <button className='bg-yellow-600 py-2 px-2 w-1/5 rounded text-center font-semibold text-black text-xl' value='5' onClick={(e)=>setValue(value + e.target.value)}>5</button>
    <button className='bg-yellow-600 py-2 px-2 w-1/5 rounded text-center font-semibold text-black text-xl' value='6' onClick={(e)=>setValue(value + e.target.value)}>6</button>
    <button className='bg-yellow-600 py-2 px-2 w-1/5 rounded text-center font-semibold text-black text-xl' value='-' onClick={(e)=>setValue(value + e.target.value)}>-</button>
    </div>
    <div className='w-full flex justify-around'>
    <button className='bg-yellow-600 py-2 px-2 w-1/5 rounded text-center font-semibold text-black text-xl' value='1' onClick={(e)=>setValue(value + e.target.value)}>1</button>
    <button className='bg-yellow-600 py-2 px-2 w-1/5 rounded text-center font-semibold text-black text-xl' value='2' onClick={(e)=>setValue(value + e.target.value)}>2</button>
    <button className='bg-yellow-600 py-2 px-2 w-1/5 rounded text-center font-semibold text-black text-xl' value='3' onClick={(e)=>setValue(value + e.target.value)}>3</button>
    <button className='bg-yellow-600 py-2 px-2 w-1/5 rounded text-center font-semibold text-black text-xl' value='*' onClick={(e)=>setValue(value + e.target.value)}>*</button>
    </div>
    <div className='w-full flex justify-around'>
    <button className='bg-yellow-600 py-2 px-2 w-1/5 rounded text-center font-semibold text-black text-xl' value='0' onClick={(e)=>setValue(value + e.target.value)}>0</button>
    <button className='bg-yellow-600 py-2 px-2 w-1/5 rounded text-center font-semibold text-black text-xl' value='.' onClick={(e)=>setValue(value + e.target.value)}>.</button>
    <button className='bg-green-600 py-2 px-2 w-1/5 rounded text-center font-semibold text-black text-xl' value='=' onClick={(e)=> setValue(() => eval(value))}>=</button>
    <button className='bg-yellow-600 py-2 px-2 w-1/5 rounded text-center font-semibold text-black text-xl' value='/' onClick={(e)=>setValue(value + e.target.value)}>/</button>
    </div>
    </div>
    </div>
  )
}

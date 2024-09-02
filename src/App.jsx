'use client'
import React, { useState } from 'react'

const page = () => {
  const[title,settitle]=useState("")
  const[desp,setdesp]=useState("")
  const[maintask,setMainTask]=useState([])
  const submitHandler=(e)=>{
    e.preventDefault()
    setMainTask([...maintask,{title,desp}])
    settitle("")
    setdesp("")
    console.log(maintask)
  }
  const deletehandler=(i)=>{
    let copytask=[...maintask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }


  let rendertask=<h3>No Task Available</h3>;

  if(maintask.length>0){
    rendertask=maintask.map((t,i)=>{
      return(
        <li key={i} className='flex items-center justify-between'>
          <div className="flex justify-between mb-8 w-2/3" >
          <h4 className='text-2xl font-semibold'>{t.title}</h4>
          <h4 className='text-xl font-semibold'>{t.desp}</h4>
        </div>
        <button 
        onClick={()=>{
          {deletehandler(i)}
        }}
        className='bg-blue-900 text-white px-4 py-2'>Delete</button>
        </li>
        
      )
    })
  }
  return (
    <>
    <h1 className='bg-black text-white h-24 text-center text-5xl p-5' >Eshwar's Todolist</h1>
    <form onSubmit={submitHandler}>
      <input type="text" className="m-5 border-zinc-800 border-4 text-2xl" placeholder='Enter Your Task Here' 
      value={title} 
      onChange={(e)=>{
        settitle(e.target.value)
      }} >
      </input>

      <input type="text" className="m-5 border-zinc-800 border-4 text-2xl" placeholder='Enter Task Description'
      value={desp} 
      onChange={(e)=>{
        setdesp(e.target.value)
      }}>
      
      </input>
      <button className='bg-black text-white text-2xl px-4 py-2 font-bold rounded'> ADD TASK </button>
    </form>
    <hr />
    <div className="p-8 bg-slate-200" >
      <ul>
        {rendertask}
      </ul>
    </div>
    </>
  )
}

export default page
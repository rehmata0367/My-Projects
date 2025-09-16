"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);

    settitle(" ");
    setdesc(" ");
    console.log(mainTask);
  };
  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setMainTask(copytask)
  }

  let renderTask = <h2> No task Available</h2>
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-8'>
          <div className='flex justify-between items-center w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-lg font-medium'>{t.desc}</h6>
            <button onClick={() => {
              deleteHandler(i)
            }} className='bg-red-500 font-bold rounded px-4 py-2 text-white'>Delete</button>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className='text-5xl bg-black text-white p-3 text-center'>Hi I am Next + React + Tailwindcss = Rehmat-Todolist</h1>
      <form onSubmit={submitHandler}>
        <input className='border-b-emerald-500 px-3 py-4 m-3 bg-amber-400 rounded-lg' type='text' placeholder='Enter your task'
          value={title}
          onChange={(e) => {
            settitle(e.target.value)

          }}
        ></input>
        <input className='px-4 py-2 m-2 border-zinc-950  bg-amber-400 rounded-lg' type='text' placeholder='Enter your Description'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}
        ></input>
        <button className='border-b-emerald-800 px-2 py-4 m-2  bg-black text-white rounded-xl w-32'> Add Task </button>
      </form>

      <hr />

      <div className='p-5 bg-blue-400'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  );
};

export default page

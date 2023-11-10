import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-white my-4 h-[60px] flex justify-center items-center gap-[7px] rounded-lg'>
        <img src="/logo.png" alt="logo" />
        <h1 className='font-bold text-xl'>Firebase Contact App</h1>
    </div>
  )
}

export default Navbar
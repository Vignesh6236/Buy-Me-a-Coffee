import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 text-white flex justify-between px-4 h-[8vh] items-center'>
      <div className="logo font-bold text-lg">
        Buy Me a Coffee!
      </div>
      <ul className='flex justify-between gap-4 h-10 items-center'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign up</li>
        <li>Login</li>

      </ul>
    </nav>
  )
}

export default Navbar

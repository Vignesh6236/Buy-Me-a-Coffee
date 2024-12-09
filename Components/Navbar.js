"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
  const { data: session } = useSession()

  if (session) {
    return <div className='text-white flex gap-4 items-center'>
      Signed in as {session.user.email} <br />
      <button
        onClick={() => signOut()}
        type="button"
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Sign Out
      </button>
    </div>
  }

  return (
    <nav className='bg-gray-900 text-white flex justify-between px-4 h-[8vh] items-center w-screen'>
      <div className="logo font-bold text-lg flex justify-center items-center">
        <span>
          <Image src="/assets/coffee.gif" alt="coffee gif" height={70} width={70} unoptimized={true} /></span>
        Buy Me a Coffee!
      </div>
      <ul className='flex justify-between gap-4 h-10 items-center'>
        <li>
          <Link href={"/login"}>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Login
            </button>
          </Link>
        </li>

      </ul>
    </nav>
  )
}

export default Navbar

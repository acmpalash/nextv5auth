'use client'

import React from 'react'
import Link from 'next/link'
import { UserButton, useAuth } from '@clerk/nextjs';

const Navbar = () => {
    const {userId} = useAuth();
    
  return (    
    <div className='bg-blend-overlay bg-zinc-800 rounded-b-xl'>
        <ul className='flex justify-between py-4 px-6'>
            <div>
                <li>
                    <Link href='/'>Home</Link>
                </li>
            </div>
            <div className='flex items-center'>
                <li>
                    <Link href="/client">Client Page</Link>
                </li>
            </div>
            <div className='flex items-center gap-6'>
                { !userId ? (
                    <>
                        <li>
                            <Link href='/sign-in'>Login</Link>
                        </li>
                        <li>
                            <Link href='/sign-up'>SignUp</Link>
                        </li>
                    </>
                 ) : (
                    <>
                        <li>
                            <Link href="/profile">Profile</Link> 
                        </li>               
                        <li className='flex items-center'>
                            <UserButton />
                        </li>                
                </>
                 )}
                
            </div>
            </ul>      
    </div>
  )
}

export default Navbar


'use client'
import React from 'react';
import { useUser } from '@clerk/nextjs';

const ClientPage = () => {
    const { isSignedIn, user, isLoaded } = useUser();
  
    if (!isLoaded || !isSignedIn) {
    //   Handle loading state
      return null
    }

    console.log(user)

    return(
        <div className='h-full flex flex-col items-center justify-center text-2xl'>
            Hello,{user.username } Welcome to Clerk
        </div>
    )
}

export default ClientPage

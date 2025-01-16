'use client'
import React from 'react';
import { UserProfile, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const Profile = () => {
  const { user, isSignedIn } = useUser();
  const router = useRouter();

    React.useEffect(()=>{
      if(!isSignedIn){
        router.push('/');
      }
    },[isSignedIn, router])
    
  return (
    <div className="flex justify-center items-center mt-8">
    if{isSignedIn? (
      <>
      <h1 className="text-2xl">{user?.username}</h1>
      <UserProfile />
    </>
  ):(
    <p> Loading... </p>
  )}
  </div>
  )
}

export default Profile

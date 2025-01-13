'use client'
import React from 'react'
import { currentUser } from '@clerk/nextjs/server';
import { UserProfile, useAuth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const Profile = async () => {
    const {userId}=useAuth();
    const isAuth = !!userId;
    const user = await currentUser();

    if(!isAuth){
        redirect('/')
    }
  return (
    <div className="flex justify-center items-center mt-8">
      <h1 className="text-2xl">{user?.username}</h1>
      <UserProfile />
    </div>
  )
}

export default Profile

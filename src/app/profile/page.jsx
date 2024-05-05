'use client'

import React from 'react'
import { useSession } from 'next-auth/react'
import Navbar from '../components/Navbar';
import { useRouter } from 'next/navigation'

function ProfilePage() {

  const { data: session } = useSession();

  const router = useRouter();
  if(!session) router.replace("login");

  return (
    <div>
      <Navbar session={ session }/>
      <div className='container mx-auto'>
        <h3 className='text-3xl my-3'>Welcome { session?.user?.name }</h3>
        <p>Email: { session?.user?.email }</p>
        <hr className='my-3'/>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla amet excepturi nam fugit quia maxime! Corporis culpa sit natus non, quia iure odit labore eveniet laboriosam vero inventore saepe! Consequatur?</p>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage

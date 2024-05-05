'use client'

import Navbar from "./components/Navbar";
import { useSession } from "next-auth/react";

export default function Home() {

  const { data: session } = useSession();

  return (
    <main>
      <Navbar session={ session }/>
      <div className='container mx-auto'>
        <h3 className='text-3xl my-3'>Welcome to Website</h3>
        <hr className='my-3'/>
        <div>
          <p>This Website made for training my NextJS </p>
        </div>
      </div>
    </main>
  );
}

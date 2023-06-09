import React from 'react';
import Link from 'next/link';
import { TbGridDots } from 'react-icons/tb';

export default function HomeHeader() {
  return (
    <header className="flex justify-end p-5 text-sm">
        <div className='flex space-x-4 items-center'>
        <Link className='hover:underline' href='https://mail.google.com'>
          Gmail
        </Link>
         <Link className='hover:underline' href='https://images.google.com'>
          Images
        </Link>
          <TbGridDots className="hover:bg-gray-200 bg-transparent rounded-full text-4xl p-2"/>
          <button className='bg-red-600 text-white px-2 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md hover:shadow-md transition-shadow'> SignIn </button>
      </div>
    </header>
  )
}

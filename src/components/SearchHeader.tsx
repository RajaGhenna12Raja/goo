import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import SearchBox from './SearchBox';
import { RiSettings3Line } from 'react-icons/ri';
import { TbGridDots } from 'react-icons/tb';
import SearchHeaderOptions from './SearchHeaderOptions';

export default function SearchHeader() {
  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-6 items-center justify-between'>
        <Link href={'/'}>
          <Image
            src='/see.logo.png'
            height={40}
            width={120}
            alt='mainLogo'
          ></Image>
        </Link>
        <div className='flex-1'>
          <SearchBox />
        </div>
        <div className='hidden md:inline-flex space-x-2'>
          <RiSettings3Line className='header-icon' />
          <TbGridDots className='header-icon' />
        </div>
        <button className='bg-red-600 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 shadow-md transition-all ml-2'>Sign In</button>
      </div>
      <SearchHeaderOptions/>
    </header>
  );
}

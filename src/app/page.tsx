import React from 'react'
import HomeHeader from '@/components/HomeHeader'
import Image from 'next/image'
import HomeSearch from '@/components/HomeSearch'

export default function Home() {
  return (
   <>
   {/* Header */}
   <HomeHeader/>
   {/* body */}
   <div className='flex flex-col items-center mt-24'>
      <Image src='/goo.logo.png' height={200} width={600} alt="mainImage"/>
      <HomeSearch/>
   </div>
   </>
  )
}

import React from 'react'
import Image from 'next/image'
import { geistMono } from '@/customfonts'
import ArtCard from './ArtCard'


const Gallery = () => {
  return (
    <section className='w-screen flex justify-center items-center'>
        <div className='w-11/12 flex flex-col gap-2'>
            <div className='flex justify-between items-center'>
                <p className={`${geistMono.className} font-semibold text-3xl`}>OUR GALLERY</p>
                <div className='flex justify-between items-centqer gap-3'>
                    <Image src={'./search.svg'} alt='search' width={25} height={25} className='cursor-pointer' />
                    <Image src={'./filter.svg'} alt='filter' width={25} height={25} className='cursor-pointer' />
                </div>
            </div>
              <div className='h-screen w-full grid md:grid-cols-4 grid-cols-2 justify-center'>
                <ArtCard />
                <ArtCard />
                <ArtCard />
                <ArtCard />
                <ArtCard />
                <ArtCard />
                <ArtCard />
                <ArtCard />
              </div>
        </div>
    </section>
  )
}

export default Gallery
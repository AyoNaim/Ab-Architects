import React from 'react'
import Image from 'next/image'
import { geistMono } from '@/customfonts'
import NavLinks from './NavLinks'

const Hero = () => {
  return (
    <section className='w-screen flex justify-center items-center'>
      <div className='w-full m:w-11/12 flex justify-between items-center h-96'>
        <div className='h-full w-5/12 hidden md:flex md:justify-center md:items-center relative'>
            <Image src={'./blob.svg'} alt='design blob' width={250} height={250} className='absolute left-5' />
            <Image src={'./plan.svg'} alt='design plan' width={170} height={170} className='absolute' />
        </div>
        <div className='h-full w-full flex flex-col justify-center items-center '>
          <p className={`${geistMono.className} text-5xl`}>
            WELCOME TO
          </p>
          <p className={`${geistMono.className} text-5xl mt-2`}>
            <strong>ARCHITECTRA</strong>
          </p>
          <p className={`${geistMono.className} mt-3`}>
            deisgn + construction
          </p>
          <NavLinks text="Build your Home" type="contact" icon="arrow.svg" className="hover:bg-red-500 mt-4" />
        </div>
        <div className='h-full w-5/12 hidden md:flex md:justify-center md:items-center relative'>
            <Image src={'./building.svg'} alt='design plan' width={170} height={170} className='absolute' />
            <Image src={'./buildblob.svg'} alt='blob' width={250} height={250}/>
        </div>
      </div>
    </section>
  )
}

export default Hero
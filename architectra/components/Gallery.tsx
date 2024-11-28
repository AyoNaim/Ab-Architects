import React from 'react'
import Image from 'next/image'
import { geistMono } from '@/customfonts'
import ArtCard from './ArtCard'
import NavLinks from './NavLinks'

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
              <div className='w-full grid md:gap-11 gap-2 md:grid-cols-4 grid-cols-2 justify-center'>
                <ArtCard img='pexels.jpg' blurimg='pexelsblur.png' />
                <ArtCard img='image.jpg' blurimg='imageblur.png' />
                <ArtCard img='img.jpg' blurimg='imgblur.png' />
                <ArtCard img='pix.jpg' blurimg='pixblur.png' />
                <ArtCard img='architecture.jpg' blurimg='architectureblur.png' />
                <ArtCard img='pic.jpg' blurimg='picblur.png' />
                <ArtCard img='photo.jpg' blurimg='photoblur.png' />
                <ArtCard img='structure.jpg' blurimg='structureblur.png' />
              </div>
              <div className='flex justify-center items-center mt-7'>
                <NavLinks text="Get in touch" type="contact" icon="arrow.svg" className="hover:bg-red-500"/>
              </div>
        </div>
    </section>
  )
}


export default Gallery
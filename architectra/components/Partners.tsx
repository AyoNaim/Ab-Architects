import { geistMono } from '@/customfonts'
import Image from 'next/image'
import React from 'react'


const ScrollingLogo = () => {
  return (
    <div className='flex justify-center items-center w-32 h-10 bg-gray-200 rounded-md'>
      <Image src={'./pepsi.svg'} alt='pepsi' width={70} height={60} />
    </div>
  )
}

const Partners = () => {
  return (
    <section className='w-screen flex justify-center items-center mt-14 mb-10'>
        <div className='w-11/12 flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center'>
                <p className={`${geistMono.className} text-3xl leading-snug md:leading-none select-none`}><strong>WE PARTNER WITH THE WORLD'S BEST</strong></p>
            </div>
            <div className='flex justify-between items-center gap-5 mt-4 logos'>
                {
                  Array.from({length: 10}).map((logo) => (
                    <ScrollingLogo/>
                  ))
                }
                {
                  Array.from({length: 10}).map((logo) => (
                    <ScrollingLogo/>
                  ))
                }
                {/*grid grid-cols-2  */}
                {/* <Image src={'./coke.svg'} alt='cocacola' width={100} height={100} />
                <Image src={'./ferrari.svg'} alt='ferrari' width={70} height={70} />
                <Image src={'./porsche.svg'} alt='porsche' width={100} height={120} />
                <Image src={'./lamborghini.svg'} alt='lamborghini' width={70} height={70} />
                <Image src={'./bugatti.svg'} alt='bugatti' width={100} height={100} />
                <Image src={'./pepsi.svg'} alt='pepsi' width={100} height={100} /> */}
            </div>
        </div>
    </section>
  )
}

export default Partners
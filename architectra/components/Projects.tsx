import React from 'react'
import { AccordionDemo } from './Accordion'
import { geistMono } from '@/customfonts'

const Projects = () => {
  return (
    <section className='w-screen flex justify-center items-center mt-10'>
        <div className='w-11/12 flex flex-col gap-3'>
          <p className={`${geistMono.className} text-5xl leading-snug md:leading-none`}>OUR WORKS OF <br />PERFECTION & LONGEVITY</p>
          <div>
            <AccordionDemo />
          </div>
        </div>
    </section>
  )
}

export default Projects
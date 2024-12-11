import React from 'react'
import Foto from '@/assets/images.png'
import Image from 'next/image'

function Hero() {
  return (
    <>
      <div className='container'>
        <div className='flex flex-wrap'>
          <div className='w-full self-center p-4 lg:w-1/2'>
            <h1 className='text-base font-semibold text-primary md:text-xl lg:text-2xl'>Selamat Datang Di Website Kami <span className='block font-bold text-dark text-4xl mt-1 lg:text-5xl'>Rekayasa Perangkat Lunak</span></h1>
            <h2 className='font-medium text-secondary mb-10 text-lg lg:text-2xl'>We A FrontEnd Developer</h2>
            <p className='font-medium text-secondary mb-10 leading-relaxed'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet nostrum exercitationem cupiditate blanditiis repellat, asperiores et earum sit natus tempore?</p>
          </div>
        <div className='w-full self-end p-4 lg:w-1/2'>
          <div className='mt-10 relative lg:mt-9 right-0'>
            <Image src={Foto} width={200} alt='foto' className='max-w-full mx-auto' />
            <span className='absolute bottom-0 -z-10 left-1/2 -translate-x-1/2'>
              <svg width='500' height='330'viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#9333ea" d="M24,-38.9C32.3,-27,40.9,-21.6,51.3,-11.5C61.6,-1.5,73.6,13.2,72.8,26.2C72,39.2,58.5,50.6,44.3,61.6C30,72.7,15,83.5,-0.6,84.3C-16.2,85.1,-32.3,75.9,-36.7,61.6C-41.1,47.3,-33.7,27.9,-37.7,12.9C-41.7,-2.2,-57.1,-12.9,-57.8,-21.3C-58.5,-29.7,-44.5,-35.8,-32.4,-46.5C-20.3,-57.1,-10.2,-72.2,-1.2,-70.6C7.9,-69,15.7,-50.7,24,-38.9Z" transform="translate(100 100)" />
              </svg>
            </span>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Hero
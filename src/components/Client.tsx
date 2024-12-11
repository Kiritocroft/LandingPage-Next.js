import React from 'react'
import {logo1, logo2, logo3, logo4, logo5} from '@/assets/partner'
import Link from 'next/link'
import Image from 'next/image'

function Client() {
  return (
    <>
    <div className='container'>
        <div className='w-full px-4'>
            <div className='max-w-xl mx-auto text-center mb-16'>
                <h4 className='font-semibold text-lg text-primary mb-2'>Client</h4>
                <h2 className='font-bold text-white text-3xl mb-4'>Partner Project</h2>
                <p className='font-medium text-md text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque reiciendis dolor?</p>
            </div>
        </div>
        <div className='w-full px-4'>
            <div className='flex flex-wrap items-center justify-center'>
                <Link href='#' className='max-w-[110px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'>
                    <Image src={logo1} alt='logo1'/>
                </Link>
                <Link href='#' className='max-w-[140px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'>
                    <Image src={logo2} alt='logo2'/>
                </Link>
                <Link href='#' className='max-w-[110px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'>
                    <Image src={logo3} alt='logo3'/>
                </Link>
                <Link href='#' className='max-w-[110px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'>
                    <Image src={logo4} alt='logo4'/>
                </Link>
                <Link href='#' className='max-w-[110px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'>
                    <Image src={logo5} alt='logo5'/>
                </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Client
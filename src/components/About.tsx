import React from 'react'
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';

function About() {
  return (
    <>
    <div className='container'>
        <div className='flex flex-wrap'>
            <div className='w-full px-4 mb-10 lg:w-1/2'>
            <h4 className='font-bold uppercase text-primary text-lg mb-3'>Tentang Kami</h4>
            <h2 className='font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl'>Ayo Belajar FrontEnd Dengan Next.js</h2>
            <p className='font-medium text-base text-secondary max-w-xl lg:text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia labore omnis ut necessitatibus quaerat maiores minima natus sapiente cumque deleniti!</p>
            </div>
            <div className='w-full px-4 lg:w-1/2'>
                <h3 className='font-semibold text-dark text-2xl mb-4 lg:mt-10'>Lets Join Us</h3>
                <p className='font-medium text-base text-slate-400 max-w-xl lg:text-lg'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod nulla enim itaque laudantium consequatur ipsa quasi blanditiis aut nostrum debitis!
                </p>
                <div className='flex items-center'>
                    <Link href='#' className='w-9 h-9 mr-3 rounded-full flex justifty-center items-center border border-slate-300 hover:border-primary hover:text-primary'>
                    <FaTiktok className='ml-2.5'/>
                    </Link>
                    <Link href='#' className='w-9 h-9 mr-3 rounded-full flex justifty-center items-center border border-slate-300 hover:border-primary hover:text-primary'>
                    <FaLinkedin className='ml-2.5'/>
                    </Link>
                    <Link href='#' className='w-9 h-9 mr-3 rounded-full flex justifty-center items-center border border-slate-300 hover:border-primary hover:text-primary'>
                    <FaFacebook className='ml-2.5'/>
                    </Link>
                    <Link href='#' className='w-9 h-9 mr-3 rounded-full flex justifty-center items-center border border-slate-300 hover:border-primary hover:text-primary'>
                    <FaWhatsapp className='ml-2.5'/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About
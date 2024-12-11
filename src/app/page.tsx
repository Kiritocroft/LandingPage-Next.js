"use client"
import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Portfolio from '@/components/Portfolio'
import Client from '@/components/Client'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Link from 'next/link'

function page() {
  const [menu, setMenu] = useState(false)
  const [header,setHeader]=useState(false)
  const toggleMenu = () => {
    setMenu(!menu)
  }
  const scrollHeader=()=>{
    if(window.scrollY >=50){
      setHeader(true)
    }else{
      setHeader(false)
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll',scrollHeader)
    return()=>{
      window.addEventListener('scroll',scrollHeader)
    }
  })
  return (
    <>
      <header className={`${header?'fixed bg-white bg-opacity-80 buram':'absolute bg-transparent'} top-0 left-0 w-full flex items-center z-10`}>
        <div>
          <div className='container'>
            <div className='flex items-center justify-between h-20 relative'>
              <div className='px-4'>
                <Link className='font-bold text-lg text-primary block p-4' href='/'>Rekayasa Perangkat Lunak</Link>
              </div>
              <div className='flex items-center justify-center p-4'>
                <button className='block absolute right-4 lg:hidden' onClick={toggleMenu}>
                  <span className={`bg-dark block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${menu ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                  <span className={`bg-dark block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm my-0.5 ${menu ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`bg-dark block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${menu ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                </button>
                <nav className={`${!menu ? 'hidden' : 'block'} absolute py-4 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:top-0 lg:block lg:static lg:bg-transparent lg:max-w-full lg:rounded-none lg:shadow-none`}>
                  <ul className='block lg:flex'>
                    <li className='group'>
                      <Link href='#' className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>Home</Link>
                    </li>
                    <li className='group'>
                      <Link href='#' className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>About</Link>
                    </li>
                    <li className='group'>
                      <Link href='#' className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>Portfolio</Link>
                    </li>
                    <li className='group'>
                      <Link href='#' className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>Kontak</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className='px-36  py-32'>
        <Hero />
      </section>
      {/* end Hero Section */}
      {/* About Section */}
      <section className='px-36  py-32'>
        <About />
      </section>
      {/* end About Section */}
      {/* Portfolio Section */}
      <section className='px-36  py-32 bg-slate-100'>
        <Portfolio />
      </section>
      {/* end Portfolio Section */}
      {/* Client Section */}
      <section className='px-36  py-32 bg-slate-700'>
        <Client />
      </section>
      {/* end Client Section */}
      {/* Blog Section */}
      <section className='px-36  py-32'>
        <Blog />
      </section>
      {/* end Blog Section */}
      {/* Contact Section */}
      <section className='px-36  py-32'>
        <Contact />
      </section>
      {/* end Contact Section */}
      {/* Footer Section */}
      <section className='bg-dark pt-24 pb-12'>
        <Footer />
      </section>
      {/* end Footer Section */}
    </>
  )
}

export default page
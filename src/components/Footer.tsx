import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <>
            <div className='container'>
                <div className='flex flex-wrap'>
                    <div className='w-full px-4 mb-12 text-slate-200 font-medium md:w-1/3'>
                        <h2 className='font-bold text-4xl text-white mb-5'>Rekayasa Perangkat Lunak</h2>
                        <h3 className='font-bold text-2xl mb-2'>Hubungi Kami</h3>
                        <p>nabilganteng03@gmail.com</p>
                        <p>jl.dg tata raya komp permata mutiara</p>
                        <p>makassar</p>
                    </div>
                    <div className='w-full px-4 mb-12 md:w-1/3'>
                        <h3 className='font-semibold text-xl text-white mb-5'>Kategori</h3>
                        <ul className='text-secondary'>
                            <li>
                                <Link className='inline-block text-base hover:text-primary mb-3' href='#'>React.js</Link>
                            </li>
                            <li>
                                <Link className='inline-block text-base hover:text-primary mb-3' href='#'>Laravel</Link>
                            </li>
                            <li>
                                <Link className='inline-block text-base hover:text-primary mb-3' href='#'>Next.js</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='w-full px-4 mb-12 md:w-1/3'>
                        <h3 className='font-semibold text-xl text-white mb-5'>Tautan</h3>
                        <ul className='text-secondary'>
                            <li>
                                <Link className='inline-block text-base hover:text-primary mb-3' href='#'>Home</Link>
                            </li>
                            <li>
                                <Link className='inline-block text-base hover:text-primary mb-3' href='#'>About</Link>
                            </li>
                            <li>
                                <Link className='inline-block text-base hover:text-primary mb-3' href='#'>Portfolio</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='w-full pt-8 border-t border-slate-800'>
                        <p className='font-medium text-sm text-slate-500 text-center'>Dibuat oleh Siswa RPL</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
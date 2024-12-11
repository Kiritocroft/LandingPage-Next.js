import React from 'react'
import { gb1, gb2, gb3, gb4 } from '@/assets/portfolio'
import Link from 'next/link'
import Image from 'next/image'

function Blog() {
    return (
        <>
            <div className='container'>
                <div className='w-full px-4'>
                    <div className='max-w-xl mx-auto text-center mb-16'>
                        <h4 className='font-semibold text-lg text-primary mb-2'>Blog</h4>
                        <h2 className='font-bold text-dark text-3xl mb-4'>Blog Terkini</h2>
                        <p></p>
                    </div>
                </div>
                <div className='flex flex-wrap'>
                    <div className='w-full px-4 lg:w-1/2 xl:w-1/3'>
                        <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-10'>
                            <Image src={gb1} alt='gb1' sizes='100vw' />
                            <div className='py-8 px-6'>
                                <h3 className='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate'>Cara Membuat Website Anime</h3>
                                <p className='font-medium text-base mb-4 text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quod temporibus distinctio illo eum repudiandae aspernatur corrupti reiciendis, amet ipsa.</p>
                                <Link className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-md hover:opacity-80' href='#'>selengkapnya..</Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full px-4 lg:w-1/2 xl:w-1/3'>
                        <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-10'>
                            <Image src={gb2} alt='gb2' sizes='100vw' />
                            <div className='py-8 px-6'>
                                <h3 className='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate'>Cara Membuat Website Anime</h3>
                                <p className='font-medium text-base mb-4 text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quod temporibus distinctio illo eum repudiandae aspernatur corrupti reiciendis, amet ipsa.</p>
                                <Link className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-md hover:opacity-80' href='#'>selengkapnya..</Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full px-4 lg:w-1/2 xl:w-1/3'>
                        <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-10'>
                            <Image src={gb4} alt='gb4' sizes='100vw' />
                            <div className='py-8 px-6'>
                                <h3 className='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate'>Cara Membuat Website Anime</h3>
                                <p className='font-medium text-base mb-4 text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quod temporibus distinctio illo eum repudiandae aspernatur corrupti reiciendis, amet ipsa.</p>
                                <Link className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-md hover:opacity-80' href='#'>selengkapnya..</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
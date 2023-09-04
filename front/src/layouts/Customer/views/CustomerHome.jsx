import React from 'react'
import Categories from '../../Guest/components/Categories';
import homepage from '../../Unix/images/homepage.webp'
import Sponsors from '../../Guest/views/Sponsors';
import HeroSlider from '../../Guest/components/HeroSlider';
import AD from '../../Guest/views/AD';

export default function CustomerHome() {
  
  return (
    <div>
      <HeroSlider />
      <AD />
      <Categories />
      <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 bg-white'>
        <div className='flex justify-center items-center gap-2 p-2 border-2 border-sky-200'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 text-sky-400">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
          </svg>
          <div>
            <h1 className='text-xl font-semibold text-sky-950'>Assured Quality</h1>
            <p className='text-lg text-sky-900'>
              Explore our collection of technology products, chosen from established industry leaders.
            </p>
          </div>
        </div>
        <div className='flex justify-center items-center gap-2 p-2 border-2 border-sky-200 bg-white'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 text-sky-400">
            <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
            <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
            <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
          </svg>
          <div>
            <h1 className='text-xl font-semibold text-sky-950'>Transport</h1>
            <p className='text-lg text-sky-900'>
              Experience the convenience of free. Your orders will reach you swiftly and securely.
            </p>
          </div>
        </div>
        <div className='flex justify-center items-center gap-2 p-2 border-2 border-sky-200 bg-white'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 text-sky-400">
            <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clipRule="evenodd" />
            <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
          </svg>
          <div>
            <h1 className='text-xl font-semibold text-sky-950'>Guarantee</h1>
            <p className='text-lg text-sky-900'>
              Enjoy peace of mind as your purchase is covered, ensuring lasting quality and satisfaction.
            </p>
          </div>
        </div>
      </div>
      <Sponsors />
    </div>
  )
}

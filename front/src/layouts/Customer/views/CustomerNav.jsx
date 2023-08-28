import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Drawer from './Drawer';
import loader from '../../Unix/images/5.png'

export default function CustomerNav() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isFirstSvg, setIsFirstSvg] = useState(true);

    const toggleOpt = () => {
        setIsFirstSvg(prevState => !prevState);
    };

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }

    const HomeNavigate = useNavigate();

    return (
        <nav className="bg-white backdrop-blur-lg bg-opacity-80 fixed w-full z-30 top-0 left-0 h-24 shadow-sm ">
            <div className="flex justify-between p-2 items-center">
                <div className="flex items-center justify-center">
                    <a href="" className="flex items-center">
                        <div className='flex justify-center items-center p-4'>
                            <img onClick={() => HomeNavigate("/home")} src={loader} alt="" className='w-14 h-14 scale-150' />
                        </div>
                    </a>
                </div>

                <div className="flex items-center justify-center">
                    <form className="flex items-center">
                        <label for="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-sky-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                                </svg>
                            </div>
                            <input type="text" id="simple-search" className="bg-white outline-none shadow-md text-sky-900 text-md focus:ring-sky-300 p-3.5 pl-10 h-full" placeholder="What are you looking for" required />
                        </div>
                        <button type="submit" className="p-4 h-full text-sm font-medium text-white hover:bg-sky-400 shadow-md bg-sky-500 focus:outline-none">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </form>
                </div>

                <div className="flex items-center justify-center">
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <div className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-sky-100 rounded-lg bg-sky-0 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                            <div>
                                <button onClick={toggleDrawer} className="p-2 ml-0 text-sm font-medium text-sky-950 hover:text-sky-500" >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <button onClick={toggleOpt} className="p-2 ml-0 text-sm font-medium text-sky-950 hover:text-sky-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" strokeWidth={1.5} className="w-6 h-6">
                                        <path fillRule="evenodd" d={isFirstSvg ? "M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" : "M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm7 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"} clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {isDrawerOpen && <Drawer />}
        </nav>
    )
}

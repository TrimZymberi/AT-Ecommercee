import React from 'react'
import { Link } from 'react-router-dom'
import loader from '../../Unix/images/WEBDEV.gif'
export default function Footer() {
    return (
        <div class="flex bottom-100 border-t-2 border-sky-200 bg-white z-20 w-full dark:bg-gray-900">
            <div class="w-full ">
                <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                    <div className='flex justify-center items-center p-4 border-4 border-sky-200' style={{ backgroundColor: '#ecf5fb' }}>
                        <img src={loader} alt="" className='w-24 h-24 scale-150' />
                    </div>
                    <div>
                        <h2 class="mb-4 text-xl font-bold text-sky-950 uppercase">Shortcuts</h2>
                        <ul class="text-sky-800 font-medium">
                            <li class="mb-4">
                                <Link to="#" class="hover:underline hover:text-sky-500 active:opacity-80 transition-all">My Orders</Link>
                            </li>
                            <li class="mb-4">
                                <Link to="#" class="hover:underline hover:text-sky-500 active:opacity-80 transition-all">Orders Cistory</Link>
                            </li>
                            <li class="mb-4">
                                <Link to="#" class="hover:underline hover:text-sky-500 active:opacity-80 transition-all">About us</Link>
                            </li>
                            <li class="mb-4">
                                <Link to="#" class="hover:underline hover:text-sky-500 active:opacity-80 transition-all">Contact Company</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-xl font-bold text-sky-950 uppercase">Join us</h2>
                        <ul class="text-sky-800 font-medium">
                            <li class="mb-4">
                                <Link to="login" class="hover:underline hover:text-sky-500 active:opacity-80 transition-all">Login</Link>
                            </li>
                            <li class="mb-4">
                                <Link to="signup" class="hover:underline hover:text-sky-500 active:opacity-80 transition-all">Sign up</Link>
                            </li>
                            <li class="mb-4">
                                <Link to="#" class="hover:underline hover:text-sky-500 active:opacity-80 transition-all">Benefits of registering</Link>
                            </li>
                            <li class="mb-4">
                                <Link to="#" class="hover:underline hover:text-sky-500 active:opacity-80 transition-all">Why should you register?</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-xl font-bold text-sky-950 uppercase">Why us?</h2>
                        <ul class="text-sky-800 text-sm font-medium">
                            <li class="mb-4">
                                <p>We serve the best in the market, for the best. 😉</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="p-1.5 bg-sky-200 md:flex md:items-center md:justify-between">
                    <span class=" text-sky-950 sm:text-center">© 2023 <Link to="https://flowbite.com/">Flowbite™</Link>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </div>
    )
}

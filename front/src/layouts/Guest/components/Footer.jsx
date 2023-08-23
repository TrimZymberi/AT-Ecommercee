import React from 'react'
import { Link } from 'react-router-dom'
import loader from '../../Unix/images/WEBDEV.gif'
export default function Footer() {
    return (
        <footer class="absolute bottom-100 z-20 w-full bg-white dark:bg-gray-900">
            <div class="w-full">
                <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                    <div className='flex justify-center items-center p-4 border-4 border-sky-200' style={{ backgroundColor: '#ecf5fb' }}>
                        <img src={loader} alt="" className='w-24 h-24 scale-150' />
                    </div>
                    <div>
                        <h2 class="mb-6 text-md font-semibold text-sky-200 uppercase">Shortcuts</h2>
                        <ul class="text-sky-50 text-sm font-medium">
                            <li class="mb-4">
                                <Link to="#" class="hover:underline">My Orders</Link>
                            </li>
                            <li class="mb-4">
                                <Link to="#" class="hover:underline">Orders Cistory</Link>
                            </li>
                            <li class="mb-4">
                                <Link to="#" class="hover:underline">About us</Link>
                            </li>
                            <li class="mb-4">
                                <Link to="#" class="hover:underline">Contact Company</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-md font-semibold text-sky-200 uppercase">Join us</h2>
                        <ul class="text-sky-50 text-sm font-medium">
                            <li class="mb-4">
                                <Link to="login" class="hover:underline">Login</Link>
                            </li>
                            <li class="mb-4">
                                <Link to="signup" class="hover:underline">Sign up</Link>
                            </li>
                            <li class="mb-4">
                                <Link to="#" class="hover:underline">Benefits of registering</Link>
                            </li>
                            <li class="mb-4">
                                <Link to="#" class="hover:underline">Why should you register?</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-md font-semibold text-sky-200 uppercase">Why us?</h2>
                        <ul class="text-sky-50 text-sm font-medium">
                            <li class="mb-4">
                                <Link to="#" class="hover:underline">We serve the best in the market, for the best. 😉</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="p-1.5 bg-sky-200 md:flex md:items-center md:justify-between">
                    <span class=" text-sky-950 sm:text-center">© 2023 <Link to="https://flowbite.com/">Flowbite™</Link>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    )
}

import React from 'react'
import logo from '../../../Unix/images/WEBDEV.gif'
export default function ProductCard_skeleton() {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-4'>
                <div className="h-96 w-96 grid items-center">
                    <img src={logo} alt="" className='h-96 w-96 flex items-center justify-center' />
                </div>
        </div>
    )
}

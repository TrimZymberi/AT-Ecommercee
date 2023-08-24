import React from 'react'
import loader from '../../../Unix/images/ATcolor1.gif'

export default function ProductCard_skeleton() {
    return (
        <div className='flex justify-center items-center p-4'>
            <div className="text-center">
            <div className="h-40"></div>
                <img src={loader} alt="" className='h-96 flex items-center justify-center' />
            <div className="h-40"></div>
            </div>
        </div>
    )
}

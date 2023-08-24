import React from 'react'
import CategoryTab from './CategoryTab'
import gifImage from '../../Unix/images/ATLogo.gif'
export default function Categories() {
    return (
        <div class="border-b-4 border-sky-200 ">
            <CategoryTab />
            {/* <div className='flex items-center justify-center'>
                <img src={gifImage} alt="Animated GIF" />
            </div> */}
        </div>
    )
}
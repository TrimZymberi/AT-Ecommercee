import React from 'react'

export default function Sponsors() {
    return (
        <div>
            <div className="bg-white w-full">
                <div className="p-8">
                    <h2 className="text-center text-3xl font-normal text-sky-950">
                        Trusted by the world’s most innovative companies
                    </h2>
                    <div className="grid p-10 items-center grid-cols-5 gap-4">
                        <div className='flex justify-center'>
                            <img src="https://cdn.freebiesupply.com/images/large/2x/dell-logo-black-transparent.png" alt="" className='w-24' />
                        </div>

                        <div className='flex justify-center'>
                            <img src="https://cdn.freebiesupply.com/images/large/2x/lenovo-logo-black-transparent.png" alt="" className='w-24' />
                        </div>
                        <div className='flex justify-center'>
                            <img src="https://www.freepnglogos.com/uploads/apple-logo-png/file-apple-logo-black-svg-wikimedia-commons-1.png" alt="" className='w-20' />
                        </div>
                        <div className='flex justify-center'>
                            <img src="https://cdn.freebiesupply.com/logos/large/2x/razer-logo-black-and-white.png" alt="" className='w-20' />
                        </div>
                        <div className='flex justify-center'>
                            <img src="https://www.pcworld.pl/g1/news/thumbnails/3/3/331321_OMEN_logo_dia_rgb_black_png_95_adaptiveresize_432x432.webp" alt="" className='w-20' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

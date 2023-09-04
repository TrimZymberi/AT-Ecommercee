import React, { useRef, useEffect } from 'react';
import './styles/adcss.css'

const images = [
    'https://static.vecteezy.com/system/resources/previews/022/100/941/original/intel-logo-transparent-free-png.png',
    'https://download.logo.wine/logo/Ryzen/Ryzen-Logo.wine.png',
    'https://1000logos.net/wp-content/uploads/2020/05/AMD-Logo.png',
    'https://download.logo.wine/logo/Nvidia/Nvidia-Logo.wine.png',
    'https://logos-world.net/wp-content/uploads/2020/11/MSI-Logo.png',
    'https://download.logo.wine/logo/ASRock/ASRock-Logo.wine.png',
    'https://cdn.freebiesupply.com/logos/large/2x/gigabyte-logo-png-transparent.png',
    'https://www.zotac.com/download/files/styles/org/public/meta_thumb/zotac_logo.png?itok=35THlWqX',
    'https://cdn.freebiesupply.com/logos/large/2x/seagate-4-logo-png-transparent.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Cooler_Master_Logo.svg/1277px-Cooler_Master_Logo.svg.png',
    'https://logodownload.org/wp-content/uploads/2017/10/evga-logo-0.png',
];

export default function AD() {
    return (
        <div className="bg-white flex items-center justify-center">
            <div className="w-[200%] overflow-hidden relative h-32">
                <div className="p-6">
                    {/* 2. */}
                    <div className="w-100 h-100 flex items-center h-20 justify-around absolute left-0 animate gap-20 animate">
                        {/* 3 */}
                        {images.map((i) => {
                            return (
                                <div className="flex justify-center items-start sm:w-20 sm:h-20 w-14 h-14">
                                    <img src={i} className='sm:w-20 sm:h-20 w-14 h-14' />
                                </div>
                            );
                        })}
                        {images.map((i) => {
                            return (
                                <div className="flex justify-center items-start w-20 h-20">
                                    <img src={i} className='sm:w-20 sm:h-20 w-14 h-14' />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

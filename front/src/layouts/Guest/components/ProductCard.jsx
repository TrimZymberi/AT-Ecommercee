import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard(item) {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 p-4 gap-4 bg-sky-50">
                {showDetails && (
                    <div className="absolute bg-sky-200 text-center w-32 transition-all">
                        <p className="p-2 font-thin text-sky-950">Detailed information about the product. <Link className="underline font-normal">Here</Link></p>
                    </div>
                )}
                <div
                    className={`absolute flex items-center bg-sky-200 text-center p-1 w-8 h-8 transition-all text-sky-950 rounded-br-xl ${showDetails ? 'active:scale-90' : 'active:rounded-none active:w-24 active:h-24'
                        }`}
                    onClick={toggleDetails}
                >
                    {showDetails ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                    )}
                </div>
                <div className="grid gap-4 shadow-md bg-white h-110 p-2">
                    <img src="https://butonks.com/office/images/detailed/15/gigabyte-g5-ge-12th-gen-2.png" alt="Product image" />
                    <div className="">
                        <h1 className="grid text-lg font-semibold px-1 justify-start items-start text-start text-gray-700">
                            {item.name}
                        </h1>
                    </div>
                    <div className="grid grid-cols-2 hover:bg-opacity-90 hover:border-opacity-90">
                        <button className="text-sky-100 bg-sky-900 px-4 hover:scale-105 hover:rounded-sm hover:bg-sky-800 transition-all font-medium">
                            Add to Cart
                        </button>
                        <price className="flex justify-end tracking-tight text-sky-900 text-xl border-sky-900 border-4 p-1 rounded-b-sm">
                            {item.price}EUR
                        </price>
                    </div>
                </div>
            </div>
    );
}

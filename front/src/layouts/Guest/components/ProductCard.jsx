import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard(item) {
    // Truncate item.name to 28 characters and add ellipsis if it's longer
    const truncatedName = item.name.length > 28 ? item.name.substring(0, 28) + '...' : item.name;

    // The rest of your code
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 p-4 gap-4">
            {/* Rest of your code */}
            <div className="grid gap-6 shadow-md bg-white">
                <div className='flex-flow gap-0 justify-center items-center'>
                    <img src="https://butonks.com/office/images/detailed/15/gigabyte-g5-ge-12th-gen-2.png" alt="Product image" />
                    <Link className="text-lg text-center text-gray-700 px-2 hover:underline">
                        {truncatedName}
                    </Link>
                </div>
                <div className="grid grid-cols-2 hover:bg-opacity-90 hover:border-opacity-90 bg-sky-900 h-10 w-100">
                    <button className="text-sky-100 bg-sky-900 px-4 hover:scale-105 hover:rounded-sm hover:bg-sky-800 transition-all font-medium">
                        Add to Cart
                    </button>
                    <price className="flex justify-end tracking-tight bg-white text-sky-900 text-xl border-sky-900 border-4 p-1">
                        {item.price}EUR
                    </price>
                </div>
            </div>
        </div>
    );
}

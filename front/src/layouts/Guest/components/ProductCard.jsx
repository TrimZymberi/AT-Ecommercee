import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard(item) {

    return (
        <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 p-4 gap-4 bg-white">
            {/* <div class="absolute flex items-center justify-center rounded-full w-10 text-center bg-sky-200 p-2 text-sky-500">
        999
    </div>  https://butonks.com/office/images/detailed/15/gigabyte-g5-ge-12th-gen-2.png  GIGABYTE G5 ME 15.6" FHD 144Hz*/}
            <div class="grid gap-4 bg-white shadow-xl rounded-md">
                <img src="https://butonks.com/office/images/detailed/15/gigabyte-g5-ge-12th-gen-2.png" alt="Product image" />
                <div class="bg-white">
                    <h1 class="grid text-lg font-semibold px-1 justify-start items-start text-start text-gray-700">{item.name}
                    </h1>
                </div>
                <div class="grid grid-cols-2 hover:bg-opacity-90 hover:border-opacity-90 bg-white">
                    <button class="text-sky-100 bg-sky-900 px-4 hover:scale-105 hover:rounded-sm hover:bg-sky-800 transition-all font-thin">Click for details</button>
                    <price class="flex justify-end font-semibold tracking-tighter text-sky-900 text-xl border-sky-900 border-4 p-1 rounded-b-sm">{item.price}EUR</price>
                </div>
            </div>
        </div>
    )
}

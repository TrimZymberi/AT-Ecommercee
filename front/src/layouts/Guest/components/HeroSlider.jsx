// import React, { useState } from 'react'

// export default function HeroSlider() {
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);
//     const imageUrls = [
//         'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
//         'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
//         'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
//         'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
//         'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
//     ];

//     // Event handler to change the currently displayed image
//     const changeImage = (index) => {
//         setCurrentImageIndex(index);
//     };

//     return (
//         <section className="bg-white">
//             <div className="container px-5 pt-10 mx-auto">
//                 <div className="flex flex-wrap w-full mb-20">
//                     <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
//                         <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Don’t know where to begin? Start your journey here.</h1>
//                         <div className="h-1 w-28 bg-sky-500 rounded"></div>
//                     </div>
//                     <p className="lg:w-1/2 w-full font-semibold leading-relaxed text-sky-400">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
//                 </div>
//             </div>
//             <div className="grid gap-4 p-10">
//                 <div className='flex justify-start border-2 border-red-500 w-96 h-96'>
//                     <img
//                         className="h-96 max-w-full rounded-lg"
//                         src={imageUrls[currentImageIndex]}
//                         alt=""
//                     />
//                 </div>
//                 <div className="flex flow gap-4 border-2 border-red-500 w-full">
//                     {imageUrls.map((imageUrl, index) => (
//                         <div className="flex flow items-center justify-center text-center" key={index}>
//                             <img
//                                 className="h-24 max-w-full rounded-lg"
//                                 src={imageUrl}
//                                 alt=""
//                                 onClick={() => changeImage(index)}
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }
import React, { useState } from 'react';
export default function HeroSlider() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleImageClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const carouselData = [
        {
            header: 'Razer',
            image: 'https://assets2.razerzone.com/images/pnx.assets/381e915d58d2b9759725c30a9f2c3a0f/accessories-category-500x500.jpg',
        },
        {
            header: 'Apple',
            image: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBwcm9kdWN0fGVufDB8fDB8fHww&w=1000&q=80',
        },
        {
            header: 'Lenovo',
            image: 'https://static.lenovo.com/ww/campaigns/2022/x1-fold/lenovo-thinkpad-x1-fold-gen-2-feature-4-image-2.jpg',
        },
        {
            header: 'Omen',
            image: 'https://www.omen.com/content/dam/omen-ecosystem/zoom-slider-1/launch-image-1-min.jpg',
        },
        {
            header: 'Asus',
            image: 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/pic_laptop_strix_g15_g17.jpg',
        },
        {
            header: 'Microsoft',
            image: 'https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/1/AmazonStores/A1F83G8C2ARO7P/126027bf0c01ee31a67242e1e94a4042.w1500.h1500.jpg',
        },
        {
            header: 'HP',
            image: 'https://digiworthy.com/articles/wp-content/uploads/2020/06/Best-HP-Laptop-for-College.jpg',
        },
    ];

    const getBrandName = (brand) => {
        switch (brand) {
            case 'Razer':
                return (
                    <div className='grid grid-cols-1 w-40 text-center'>
                        <p className='flex justify-center items-center bg-emerald-50 text-emerald-800 text-xl font-thin'>New Razer Blade 16 & 18 Mercury</p>
                        <button className='transition-all border-none bg-emerald-100 text-emerald-900 font-medium text-md w-full p-4 hover:bg-emerald-200'>Learn more</button>
                    </div>
                );
            case 'HP':
                return (
                    <div className='grid grid-cols-1 w-40 text-center'>
                        <p className='flex justify-center items-center bg-sky-50 text-sky-800 text-xl font-thin'>Performance you can trust even if it is small</p>
                        <button className='transition-all border-none bg-sky-100 text-sky-900 font-medium text-md w-full p-4 hover:bg-sky-200'>Learn more</button>
                    </div>
                );
            case 'Omen':
                return (
                    <div className='grid grid-cols-1 w-40 text-center'>
                        <p className='flex justify-center items-center bg-orange-50 text-orange-800 text-xl font-thin'>Embark on your gaming journey with VICTUS</p>
                        <button className='transition-all border-none bg-orange-100 text-orange-900 font-medium text-md w-full p-4 hover:bg-orange-200'>Learn more</button>
                    </div>
                );
            case 'Apple':
                return (
                    <div className='grid grid-cols-1 w-40 text-center'>
                        <p className='flex justify-center items-center bg-gray-50 text-black text-xl font-thin'>Best production hardware in store</p>
                        <button className='transition-all border-none bg-gray-100 text-black font-medium text-md w-full p-4 hover:bg-gray-200'>Learn more</button>
                    </div>
                );
            case 'Lenovo':
                return (
                    <div className='grid grid-cols-1 w-40 text-center'>
                        <p className='flex justify-center items-center bg-rose-50 text-rose-800 text-xl font-thin'>These school laptops wont fail you anywhere</p>
                        <button className='transition-all border-none bg-rose-100 text-rose-900 font-medium text-md w-full p-4 hover:bg-rose-200'>Learn more</button>
                    </div>
                );
            case 'Asus':
                return (
                    <div className='grid grid-cols-1 w-40 text-center'>
                        <p className='flex justify-center items-center bg-indigo-50 text-indigo-800 text-xl font-thin'>Seamless performance and guaranteed quality</p>
                        <button className='transition-all border-none bg-indigo-100 text-indigo-900 font-medium text-md w-full p-4 hover:bg-indigo-200'>Learn more</button>
                    </div>
                );
            case 'Microsoft':
                return (
                    <div className='grid grid-cols-1 w-40 text-center'>
                        <p className='flex justify-center items-center bg-blue-300 text-blue-900 text-xl font-thin'>Thoughtfully designed, productive and simple to use</p>
                        <button className='transition-all border-none bg-blue-400 text-blue-900  font-medium text-md w-full p-4 hover:bg-blue-200'>Learn more</button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className='bg-white'>
            <div className="container px-5 pt-10 mx-auto">
                <div className="flex flex-wrap w-full mb-10">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Don’t know where to begin? Start your journey here.</h1>
                        <div className="h-1 w-28 bg-sky-500 rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full text-lg leading-relaxed text-sky-400">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className="carousel carousel-center">
                    {carouselData.map((item, index) => (
                        <div className={`carousel-item ${index === activeIndex ? 'active' : ''}`} key={index}>
                            <div className='flex justify-center items-center bg-black relative'>
                                <div onClick={() => handleImageClick(index)} htmlFor="brand" className='absolute z-40 text-black ml-2 font-bold text-4xl uppercase text-center flex justify-center items-center hover:ring-b-4 ring-gray-500 hover:cursor-pointer'>
                                    {item.header}
                                </div>
                                <div onClick={() => handleImageClick(index)} htmlFor="brand" className='absolute z-40 text-gray-100 font-bold text-4xl uppercase text-center flex justify-center items-center hover:ring-b-4 ring-gray-500  hover:cursor-pointer'>
                                    {item.header}
                                </div>
                                <div
                                    onClick={() => handleImageClick(index)}
                                    className='absolute backdrop-blur-sm bg-opacity-20 z-30 w-96 h-full bg-gray-50 hover:py-10 transition-all  hover:cursor-pointer'></div>
                                <img
                                    src={item.image}
                                    alt="Pizza"
                                    className='object-full w-96 h-full'
                                />
                            </div>
                            {index === activeIndex && (

                                getBrandName(item.header)
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

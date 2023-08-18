import React from 'react'

export default function CategoryTab_skeleton() {
  return (
        <div>
            <div className="grid xl:grid-cols-6 lg:grid-cols-5 px-0.5 py-0.5 border-b-2 border-t-2 border-sky-200 md:grid-cols-3 sm:grid-cols-2 text-sky-950 text-xl font-medium bg-sky-50 items-center justify-center text-center uppercase">
                <Link to="#" className="">
                    <div className='bg-sky-50 hover:ring-4 transition-all hover:shadow-md hover:scale-105 ring-sky-200'>
                        <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="w-8 h-8"><path d="M384 96V320H64L64 96H384zM64 32C28.7 32 0 60.7 0 96V320c0 35.3 28.7 64 64 64H181.3l-10.7 32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H277.3l-10.7-32H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm464 0c-26.5 0-48 21.5-48 48V432c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H528zm16 64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H544c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H544c-8.8 0-16-7.2-16-16zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>
                        </div>
                        Desktop..
                    </div>
                </Link>

                <Link to="#" className="">
                    <div className='bg-sky-50 hover:ring-4 transition-all hover:shadow-md hover:scale-105 ring-sky-200'>
                        <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="w-8 h-8"><path d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z" /></svg>
                        </div>
                        Laptop
                    </div>
                </Link>

                <Link to="#" className="">
                    <div className='bg-sky-50 hover:ring-4 transition-all hover:shadow-md hover:scale-105 ring-sky-200'>
                        <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                <path fillRule="evenodd" d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z" clipRule="evenodd" />
                            </svg>
                        </div>
                        Monitor
                    </div>
                </Link>

                <Link to="#" className="">
                    <div className='bg-sky-50 hover:ring-4 transition-all hover:shadow-md active:ring-sky-400 hover:scale-105 ring-sky-200'>
                        <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                <path d="M5.507 4.048A3 3 0 017.785 3h8.43a3 3 0 012.278 1.048l1.722 2.008A4.533 4.533 0 0019.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008z" />
                                <path fillRule="evenodd" d="M1.5 10.5a3 3 0 013-3h15a3 3 0 110 6h-15a3 3 0 01-3-3zm15 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.25.75a.75.75 0 100-1.5.75.75 0 000 1.5zM4.5 15a3 3 0 100 6h15a3 3 0 100-6h-15zm11.25 3.75a.75.75 0 100-1.5.75.75 0 000 1.5zM19.5 18a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                        Server
                    </div>
                </Link>

                <Link to="#" className="">
                    <div className='bg-sky-50 hover:ring-4 transition-all hover:shadow-md hover:scale-105 ring-sky-200'>
                        <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" className="w-8 h-8 text-sky-950">
                                <path d="M0 192H176V0H160C71.6 0 0 71.6 0 160v32zm0 32V352c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160V224H192 0zm384-32V160C384 71.6 312.4 0 224 0H208V192H384z" fill="#082f49" />
                            </svg>
                        </div>
                        Parts
                    </div>
                </Link>

                <Link to="#" className="">
                    <div className='bg-sky-50 hover:ring-4 transition-all hover:shadow-md hover:scale-105 ring-sky-200'>
                        <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                <path d="M19.5 6h-15v9h15V6z" />
                                <path fillRule="evenodd" d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z" clipRule="evenodd" />
                            </svg>
                        </div>
                        TV, Audio & Smart
                    </div>
                </Link>
            </div>
    </div>
  )
}

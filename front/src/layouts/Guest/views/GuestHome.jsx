import React from 'react'
import { Link } from 'react-router-dom'
import Categories from '../components/Categories'

export default function GuestHome() {
  return (
    <div>
      <div className="fixed bg-blur-xl bg-white bg-opacity-90 right-0 left-0 flex justify-between p-6 z-10">
          <Link>AT Electronics</Link>
        </div>
        <div className="shadow-sm bg-sky-100 grid items-end sm:items-center">
          <img src="//i.dell.com/sites/csimages/App-Merchandizing_Images/all/homepage-hero-banner-mobile-non-commerce-2800x839.jpg" alt="" />
            <div className="absolute">
              <h1 className="text-sky-500 font-bold text-2xl sm:text-6xl">Geek Out with Us!</h1>
              <p className="text-sky-50 p-1 text-xs sm:text-xl">Dive into our tech treasure trove and discover gadgets that'll blow your mind. From coding champs to gadget gurus, we've got something epic for everyone. Ready to level up your tech game? Let the geeking out begin!</p>
            </div>
        </div>
        <Categories />
    </div>
  )
}

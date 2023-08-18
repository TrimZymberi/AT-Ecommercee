import React from 'react'
import { Link } from 'react-router-dom'
import Categories from '../components/Categories'
import homepage from '../../Unix/images/homepage.webp'
import Sponsors from './Sponsors'

export default function GuestHome() {
  return (
    <div>
        <div className="shadow-sm bg-sky-100 grid items-end sm:items-center">
          <img src={homepage} alt="" />
            <div className="absolute">
              <h1 className="text-sky-500 font-bold text-2xl sm:text-6xl">Geek Out with Us!</h1>
              <p className="text-sky-50 p-1 text-xs sm:text-xl">Dive into our tech treasure trove and discover gadgets that'll blow your mind. From coding champs to gadget gurus, we've got something epic for everyone. Ready to level up your tech game? Let the geeking out begin!</p>
            </div>
        </div>
        <Categories />
    </div>
  )
}

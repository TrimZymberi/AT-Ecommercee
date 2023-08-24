import React from 'react'

export default function LoginPage() {
  return (
    
    
    <div className='flex justify-center items-center h-screen  bg-sky-50'>
      <div className='w-96 scale-x-110 scale-y-110 p-6 shadow-lg bg-white rounded-md'>
          <h1 className='text-3xl block text-center font-semibold'><i class="fa-solid fa-user"></i> Login</h1>
          <hr className='mt-3'/>
          <div className='mt-3'>
            <label htmlFor="username" className='block text-base mb-2'>Username</label>
            <input type="text" id='Username' className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter Username'/>
          </div>
          <div className='mt-3'>
            <label htmlFor="password" className='block text-base mb-2'>Password</label>
            <input type="password" id='Password' className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter Password'/>
          </div>
          <div className='mt-3'>
            <a href="#" className='text-sky-800 font-semibold'>Forgot pawssord?</a>
          </div>
          <div className='mt-5'>
              <button type='submit' className='border-2 border-sky-800 bg-sky-800 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-sky-700 font-semibold'>Login</button>
          </div>
          <div className='mt-3  flex justify-between items-center'>
            <div className='ml-8'>
            <h5 className='font-thin text-black'>Don't have an account?</h5>
            </div>
            <div className='mr-11'>
            <a href="#" className='text-sky-800 font-semibold'>Register Now</a>
            </div>
          </div>
      </div>
    </div>

  )
}

import React from 'react'

export default function RegisterPage() {
  return (
    
    <div className='flex justify-center items-center h-screen  bg-sky-50'>
      <div className='w-96 scale-x-110 scale-y-110 p-6 shadow-lg bg-white rounded-md'>
          <h1 className='text-3xl block text-center font-semibold'><i class="fa-solname fa-user"></i> Register</h1>
          <hr className='mt-3'/>
          <div className='mt-3'>
            <label htmlFor="username" className='block text-lg mb-2'>Username</label>
            <input type="text" name='username' className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter username'/>
          </div>
          <div className='mt-3'>
            <label htmlFor="email" className='block text-lg mb-2'>Email</label>
            <input type="text" name='email' className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter email'/>
          </div>
          <div className='mt-3'>
            <label htmlFor="address" className='block text-lg mb-2'>Address</label>
            <input type="text" name='address' className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter email'/>
          </div>
          <div className='mt-3'>
            <label htmlFor="password" className='block text-lg mb-2'>Password</label>
            <input type="password" name='Password' className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter password'/>
          </div>
          <div className='mt-3'>
            <label htmlFor="confirm-password" className='block text-lg mb-2'>Confirm Password</label>
            <input type="password" name='confirm-password' className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Re-enter password'/>
          </div>
          <div className='mt-5'>
              <button type='submit' className='border-2 border-sky-800 bg-sky-800 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-sky-700 font-semibold'>Register</button>
          </div>
          
      </div>
    </div>
  )
}

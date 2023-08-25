import React, { useState } from 'react'
import axiosClient from '../../../api/axios';
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState({ __html: "" });
  const navigate = useNavigate();

  const SignupValidation = (ev) => {
    ev.preventDefault();
    setError({ __html: "" });
    setSubmitting(true);

    axiosClient
      .post("/signup", {
        name: username,
        email,
        password,
        password_confirmation: passwordConfirmation,
        address,
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.errors) {
          const errors = error.response.data.errors;
          setError({
            name: errors.name ? errors.name.join("<br>") : "",
            email: errors.email ? errors.email.join("<br>") : "",
            emailex: errors.email ? errors.email[0] : "",
            password: errors.password ? errors.password.join("<br>") : "",
            password_confirmation: errors.password_confirmation
              ? errors.password_confirmation.join("<br>")
              : "",
            address: errors.address ? errors.address.join("<br>") : "",
            other: errors.error ? errors.error.join("<br>") : "",
          });
        } else if (error.response && error.response.data && error.response.data.error) {
          setError({
            email: "",
            password: "",
            other: error.response.data.error,
          });
        } else {
          setError({ other: "An error occurred. Please try again later." });
        }
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  if (submitting) {
    return (
      <div className='flex justify-center items-center h-screen  bg-sky-50'>
        <div className='w-96 scale-x-110 scale-y-110 p-6 shadow-lg bg-white rounded-md'>
          <h1 className='text-3xl block text-center font-semibold'><i class="fa-solname fa-user"></i> Register</h1>
          <hr className='mt-3' />
          <div className='mt-3'>
            <label htmlFor="username" className='block text-lg mb-2'>Username</label>
            <input type="text" name='username' value={username} className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter username' />
          </div>
          <div className='mt-3'>
            <label htmlFor="email" className='block text-lg mb-2'>Email</label>
            <input type="text" name='email' value={email} className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter email' />
          </div>
          <div className='mt-3'>
            <label htmlFor="address" className='block text-lg mb-2'>Address</label>
            <input type="text" name='address' value={address} className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter email' />
          </div>
          <div className='mt-3'>
            <label htmlFor="password" className='block text-lg mb-2'>Password</label>
            <input type="password" name='password' value={password} className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter password' />
          </div>
          <div className='mt-3'>
            <label htmlFor="confirm-password" className='block text-lg mb-2'>Confirm Password</label>
            <input type="password" name='confirm-password' value={passwordConfirmation} className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Confirm password' />
          </div>
          <div className='mt-5'>
            <button type='submit' className='hover:cursor-wait border-2 border-sky-800 bg-sky-800 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-sky-700 font-semibold'>Testing
              <div role="status" class="opacity-100 absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                <svg aria-hidden="true" class="opacity-100 w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-sky-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                <span class="sr-only">Loading...</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='flex justify-center items-center h-screen  bg-sky-50'>
      <form onSubmit={SignupValidation}>
        <div className='w-96 scale-x-110 scale-y-110 p-6 shadow-lg bg-white rounded-md'>
          <h1 className='text-3xl block text-center font-semibold'><i class="fa-solname fa-user"></i> Register</h1>
          <hr className='mt-3' />
          <div className='mt-3'>
            <label htmlFor="username" className='block text-lg mb-2'>Username</label>
            <input type="text"
              name='username'
              onChange={(ev) => setUsername(ev.target.value)}
              value={username}
              className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
              placeholder='Enter username' />
          </div>
          <div className='mt-3'>
            <label htmlFor="email" className='block text-lg mb-2'>Email</label>
            <input type="text"
              name='email'
              onChange={(ev) => setEmail(ev.target.value)}
              value={email}
              className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
              placeholder='Enter email' />
          </div>
          <div className='mt-3'>
            <label htmlFor="address" className='block text-lg mb-2'>Address</label>
            <input type="text"
              name='address'
              onChange={(ev) => setAddress(ev.target.value)}
              value={address}
              className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
              placeholder='Enter your address' />
          </div>
          <div className='mt-3'>
            <label htmlFor="password" className='block text-lg mb-2'>Password</label>
            <input type="password"
              name='password'
              onChange={(ev) => setPassword(ev.target.value)}
              value={password}
              className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
              placeholder='Enter password' />
          </div>
          <div className='mt-3'>
            <label htmlFor="confirm-password" className='block text-lg mb-2'>Confirm Password</label>
            <input type="password" name='confirm-password'
              onChange={(ev) => setPasswordConfirmation(ev.target.value)}
              value={passwordConfirmation}
              className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
              placeholder='Confirm password' />
          </div>
          {error.password && (
            <div class="flex p-2 mt-4 text-sm text-sky-900 rounded-lg bg-sky-50" role="alert">
              <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              <span class="sr-only">Danger</span>
              <div>
                <span class="font-medium">Ensure that these requirements are met:</span>
                <ul class="mt-1.5 ml-4 list-disc list-inside">
                  {error.name && <li dangerouslySetInnerHTML={{ __html: error.name }}></li>}
                  {error.email && <li dangerouslySetInnerHTML={{ __html: error.email }}></li>}
                  {error.address && <li dangerouslySetInnerHTML={{ __html: error.address }}></li>}
                  {error.password && <li dangerouslySetInnerHTML={{ __html: error.password }}></li>}
                </ul>
              </div>
            </div>
          )}
          {error.other && (
            <div class="flex p-2 mt-4 text-sm text-sky-600 rounded-lg bg-sky-50 " role="alert">
              <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              <span class="sr-only">Danger</span>
              <div>
                <span class="font-medium">Ensure that these requirements are met:</span>
                <ul class="mt-1.5 ml-4 list-disc list-inside">
                  {error.other && <li dangerouslySetInnerHTML={{ __html: error.other }}></li>}
                </ul>
              </div>
            </div>
          )}
          <div className='mt-5'>
            <button type='submit' className='border-2 border-sky-800 bg-sky-800 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-sky-700 font-semibold'>Register</button>
          </div>
        </div>
      </form>
    </div>
  )
}

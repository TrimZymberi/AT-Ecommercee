import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosClient from '../../../api/axios';
import Swal from 'sweetalert2'
import { useStateContext } from '../../../contexts/ContextProvider';

export default function LoginPage() {
  const { setCurrentUser, setUserToken } = useStateContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ __html: "" });
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();
  const RegisterNow = useNavigate();

  const loginValidation = (ev) => {
    ev.preventDefault();
    setError({ __html: "" });
    setSubmitting(true);

    const request = {
      email,
      password,
    };

    axiosClient
      .post("/login", request)
      .then(({ data }) => {
        setCurrentUser(data.user);
        setUserToken(data.token);
        if (data.user.role === 'manager') {
          navigate('../management');
          Swal.fire(
            `Hello ${data.user.name}!`,
            `Welcome back ${data.user.role}.`,
            'info'
          )
        } else if (data.user.role === 'employee') {
          navigate('../workspace');
          Swal.fire(
            `Hello ${data.user.name}!`,
            `Welcome back ${data.user.role}.`,
            'info'
          )
        } else if (data.user.role === 'customer') {
          navigate('../app');
        } else if (data.user.role === 'driver') {
          navigate('../workdrive');
          Swal.fire(
            `Hello ${data.user.name}!`,
            `Welcome back ${data.user.role}.`,
            'info'
          )
        }
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.errors) {
          const errors = error.response.data.errors;
          setError({
            name: errors.name ? errors.name.join("<br>") : "",
            email: errors.email ? errors.email.join("<br>") : "",
            emailex: errors.email ? errors.email[0] : "",
            password: errors.password ? errors.password.join("<br>") : "",
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
          <h1 className='text-3xl block text-center font-semibold'><i class="fa-solid fa-user"></i> Login</h1>
          <hr className='mt-3' />
          <div className='mt-3'>
            <label htmlFor="email" value={email} className='block text-lg mb-2'>Email</label>
            <input type="email" name='email' className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter Email' />
          </div>
          <div className='mt-3'>
            <label htmlFor="password" value={password} className='block text-lg mb-2'>Password</label>
            <input type="password" name='Password' className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter Password' />
          </div>
          <div className='mt-3'>
            <a href="#" className='text-sky-800 font-semibold'>Forgot pawssord?</a>
          </div>
          <div className='mt-5'>
            <button type='submit' className='hover:cursor-wait border-2 border-sky-800 bg-sky-800 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-sky-700 font-semibold'>Testing
              <div role="status" class="opacity-100 absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                <svg aria-hidden="true" class="opacity-100 w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-sky-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                <span class="sr-only">Loading...</span>
              </div>
            </button>
          </div>
          <div className='mt-3  flex justify-between items-center'>
            <div className='ml-8'>
              <h5 className='font-thin text-black'>Don't have an account?</h5>
            </div>
            <div className='mr-11'>
              <a onClick={() => RegisterNow("/register")} className='text-sky-800 font-semibold hover:cursor-pointer'>Register Now</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (

    <div className='flex justify-center items-center h-screen  bg-sky-50'>
          <form onSubmit={loginValidation}>
      <div className='w-96 scale-x-110 scale-y-110 p-6 shadow-lg bg-white rounded-md'>
        <h1 className='text-3xl block text-center font-semibold'><i class="fa-solid fa-user"></i> Login</h1>
        <hr className='mt-3' />
        <div className='mt-3'>
          <label htmlFor="email" className='block text-lg mb-2'>Email</label>
          <input type="text"
            onChange={(ev) => setEmail(ev.target.value)}
            value={email}
            name='email'
            className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter Email' />
        </div>
        <div className='mt-3'>
          <label htmlFor="password" className='block text-lg mb-2'>Password</label>
          <input type="password"
            onChange={(ev) => setPassword(ev.target.value)}
            value={password}
            name='password'
            className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter Password' />
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
            <a onClick={() => RegisterNow("/register")} className='text-sky-800 font-semibold hover:cursor-pointer'>Register Now</a>
          </div>
        </div>
      </div>
      </form>
    </div>

  )
}

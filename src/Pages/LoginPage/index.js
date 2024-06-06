import React from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const navigate = useNavigate()
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <p className='text-6xl'>Login to enter</p>
      <button className='px-4 py-1 rounded-lg bg-[#FFDC03] mt-5 text-2xl font-semibold' onClick={() => navigate("/dashboard")}>Log In</button>
    </div>

  )
}

export default LoginPage
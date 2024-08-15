import React, { useState } from 'react'
import {base_url} from '../../config/config'
import axios from 'axios'
import toast from 'react-hot-toast'
const Login = () => {


const [loader,setLoader] = useState(false)

  const [state,setState]=useState({
   email :"",
   password:"" 
  })


  const inputHandle = (e)=>{
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }

  const submit =  async(e)=>{
    e.preventDefault()
    try {
      const {data} = await axios.post(`${base_url}/api/login`,state)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='min-w-screen min-h-screen bg-blue-500 flex justify-center items-center'>
     <div className='w-[340px] text-slate-800 shadow-md'>
<div className='bg-pink-400 h-full px-7 py-8 rounded-md'>
  <div className='w-full justify-center items-center flex'>
<img className='w-[270px]' src='https://nepalrastrakhabar.com/wp-content/uploads/2023/01/nrk-logo.png' alt='Nepal Rastrakhabar' />
  </div>
  <form onSubmit={submit} className='mt-1'>
  <div className='flex flex-col gap-y-2'>
<label className='text-md font-medium tex-gray-600' htmlFor='email'>Email</label>
<input onChange={inputHandle} value={state.email} required type='email' placeholder='Email' name='email' className='px-3 py-2 rounded-md outline-0 border border-purple-300 focus:border-orange-500 h-10' id='email'/>
</div>

<div className='flex flex-col gap-y-2'>
<div className='flex flex-col gap-y-2'>
<label className='text-md font-medium tex-gray-600' htmlFor='password'>Password</label>
<input onChange={inputHandle} value={state.password} type='password' placeholder='Password' name='password' required className='px-3 py-2 rounded-md outline-0 border border-purple-300 focus:border-orange-500 h-10' id='password'/>
</div>
</div>
<div className='mt-4'>
<button className='px-3 py-[6px] w-full bg-purple-500 rounded-sm text-red-50 hover:bg-orange-600'>
Login
      </button>
</div>
  </form>
</div>
     </div> 
    </div>
  )
}

export default Login

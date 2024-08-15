import React from 'react'
import { IoIosImages } from "react-icons/io";
const Profile = () => {
  return (
    <div className='w-full grid grid-cols-2 gap-x-6 mt-5'>
      <div className='bg-white gap-x-3 p-6 rounded flex justify-center items-center'>
<div>
<label htmlFor='img' className={'w-[150px] h-[150px] flex rounded text-[#404040] gap-2 justify-center items-center cursor-pointer border-2 border-dashed'}>
  <div className='flex justify-center items-center flex-col gap-y-2'>
  <span className='text-2xl '>
  <IoIosImages />
  </span>
  <span>
    Select Image
  </span>

  </div>
</label>
<input className='hidden' type='file' id='img' />
</div>
<div className='text-[#404040] flex flex-col gap-y-1 justify-center items-start'>
<span>Name : Krishna Sapkota </span>
<span>Email : krishnasapkota22@gmail.com</span>
<span>Category : Poltics</span>

</div>
      </div>
      <div className='bg-white px-6 py-4 text-[#404040] '>
<h2 className='pb-3 text-center text-orange-800 font-semibold'>
  Change Password
</h2>
<form>
<div className='grid grid-cols-1 gap-y-5 mb-3'>
<div className='flex flex-col gap-y-2'>
<div className='flex flex-col gap-y-2'>
<label className='text-md font-medium tex-gray-600' htmlFor='old_password'>Old Password</label>
<input type='password' placeholder='Old Password' name='old_password' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-orange-500 h-10' id='old_password'/>
</div>
</div>
</div>
<div className='grid grid-cols-1 gap-y-5 mb-3'>
<div className='flex flex-col gap-y-2'>
<div className='flex flex-col gap-y-2'>
<label className='text-md font-medium tex-gray-600' htmlFor='new_password'>New Password</label>
<input type='password' placeholder='New Password' name='new_password' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-orange-500 h-10' id='new_password'/>
</div>
</div>
</div>
<div className='mt-4'>
<button className='px-3 py-[6px] bg-purple-500 rounded-sm text-red-50 hover:bg-pink-600'>
Change Password
      </button>
</div>
</form>
      </div>
    </div>
  )
}

export default Profile

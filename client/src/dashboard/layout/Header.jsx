import React from 'react'
import profile from '../../assets/profile.png'
const Header = () => {
  return (
    <div className='pl-4 fixed w-[calc(100vw-250px)] top-4 z-50'>
      <div className='w-full rounded h-[70px] flex justify-between items-center p-4 bg-gradient-to-r from-pink-300 to-blue-700 to-white-900'>
<input type='text' placeholder='Search' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-orange-500 h-10'/>
<div className='mr-4'>
<div className='flex gap-x-2'>
<div className='flex flex-col justify-center items-end text-white'>
<span>Krishna Sapkota</span>
<span>Admin</span>
</div>
<img src={profile} alt='' className='w-12 h-15 rounded-full'/>
</div>

</div>
      </div>
    </div>
  )
}

export default Header

import React from 'react'
import{Link} from 'react-router-dom'
import {FaEye} from 'react-icons/fa'
const AdminIndex = () => {
  return (
    <div className='mt-2'>
      <div className='grid grid-cols-5 gap-x-4'>
        <div className='w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-white text-slate-700'>
        <span className='text-xl font-bold '>50</span>
        <span className='text-md'>Total News</span>
 </div>
 <div className='w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-white text-slate-700'>
        <span className='text-xl font-bold '>50</span>
        <span className='text-md'>Pending News</span>
 </div>
 <div className='w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-white text-slate-700'>
        <span className='text-xl font-bold '>50</span>
        <span className='text-md'>Active News</span>
 </div>
 <div className='w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-white text-slate-700'>
        <span className='text-xl font-bold '>50</span>
        <span className='text-md'>Deactive News</span>
 </div>
 <div className='w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-white text-slate-700'>
        <span className='text-xl font-bold '>50</span>
        <span className='text-md'>Writers</span>
 </div>
      </div>
      <div className='bg-white p-4 mt-5'>
<div className='flex justify-between items-center pb-4'>
  <h2>
    Recent News
  </h2>
  <Link>
    View All
  </Link>
</div>
   <div className='px-4 py-3 flex gap-x-3'>
<select name="" className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-orange-500 h-10' id="">
<option value="">Select Type</option>
<option value="pending">Pending</option>
<option value="active">Active</option>
<option value="deactive">Deactive</option>
</select>
<input type='text' placeholder='Search News' className='px-3 py-2 rounded-md outline-0 border border-gray-400 focus:border-orange-500 h-10'/>
  </div>
  <div className='relative overflow-x-auto p-4'>
    <table className="w-full text-sm text-left text-slate-700 border-collapse border border-gray-400">
        <thead className='text-xs text-red-700 uppercase bg-gray-50'>
            <tr>
                <th className='px-7 py-3 border border-gray-400'>S.N</th>
                <th className='px-7 py-3 border border-gray-400'>Title</th>
                <th className='px-7 py-3 border border-gray-400'>Image</th>
                <th className='px-7 py-3 border border-gray-400'>Category</th>
                <th className='px-7 py-3 border border-gray-400'>Description</th>
                <th className='px-7 py-3 border border-gray-400'>Date</th>
                <th className='px-7 py-3 border border-gray-400'>Status</th>
                <th className='px-7 py-3 border border-gray-400'>Active</th>
            </tr>
        </thead>
        <tbody>
        {
        [1,2,3,4,5,6,7].map((n,i) => <tr key={i} className='bg-white border border-gray-400'>
<td className='px-6 py-4 border border-gray-400'>1</td>
<td className='px-6 py-4 border border-gray-400'>hola amigos</td>
<td className='px-6 py-4 border border-gray-400'>
    <img className='w-[40px] h-[40px]' src='https://i.etsystatic.com/22389053/r/il/e08833/2807075853/il_fullxfull.2807075853_7593.jpg' alt=''/>
</td>
<td className='px-6 py-4 border border-gray-400'>Spain</td>
<td className='px-6 py-4 border border-gray-400'>Very good</td>
<td className='px-6 py-4 border border-gray-400'>may 27,2024</td>
<td className='px-6 py-4 border border-gray-400'>
    <span className='px-2 py-[2px] bg-green-100 text-green-800 rounded-lg text-xs cursor-pointer'>Active</span>
</td>
<td className='px-6 py-4 border border-gray-400'>
    <div className='flex justify-start items-center gap-x-4 text-white'>
        <Link className='p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50'><FaEye/></Link>
      </div>
</td>
</tr>
            )
        }
        </tbody>
    </table>
    </div>
      </div>
    </div>
  )
}

export default AdminIndex

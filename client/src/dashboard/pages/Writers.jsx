import React from 'react'
import {Link} from 'react-router-dom'
import {FaEye} from 'react-icons/fa'
const Writers = () => {
  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
      <h2 className='text-xl font-medium'>Writers</h2>
     <Link className='px-3 py-[6px] bg-purple-500 rounded-sm text-red-50 hover:bg-pink-600' to='/dashboard/writer/add'>
Add Writer
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
                <th className='px-7 py-3 border border-gray-400'>Name</th>
                <th className='px-7 py-3 border border-gray-400'>Category</th>
                <th className='px-7 py-3 border border-gray-400'>Role</th>
                <th className='px-7 py-3 border border-gray-400'>Image</th>
                <th className='px-7 py-3 border border-gray-400'>Email</th>
                <th className='px-7 py-3 border border-gray-400'>Active</th>
            </tr>
        </thead>
        <tbody>
        {
        [1,2,3,4,5,6,7].map((n,i) => <tr key={i} className='bg-white border border-gray-400'>
<td className='px-6 py-4 border border-gray-400'>{i+1}</td>
<td className='px-6 py-4 border border-gray-400'>Shyam</td>
<td className='px-6 py-4 border border-gray-400'>Tourism</td>
<td className='px-6 py-4 border border-gray-400'>Writer</td>
<td className='px-6 py-4 border border-gray-400'>
    <img className='w-[40px] h-[40px]' src='https://i.etsystatic.com/22389053/r/il/e08833/2807075853/il_fullxfull.2807075853_7593.jpg' alt=''/>
</td>
<td className='px-6 py-4 border border-gray-400'>shyam22@gmail.com</td>
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
  )
}

export default Writers

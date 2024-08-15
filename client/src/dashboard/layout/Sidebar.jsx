import React from "react"
import { Link,useLocation } from "react-router-dom"
import {AiFillDashboard,AiOutlinePlus} from "react-icons/ai"
import {ImProfile} from "react-icons/im"
import {FiUsers} from "react-icons/fi"
import {BiNews} from "react-icons/bi"
import {FaPlus} from "react-icons/fa"
const Sidebar = () => {
const userInfo={
  role : "writer"
}

  const{pathname} = useLocation()

  return (
    <div className="w-[250px] h-screen fixed left-0 top-0 bg-gradient-to-r from-blue-700 to-white-900">
    <div className="h-[70px] flex justify-center items-center">
<Link to="/" className="text-black text-xl font-bold cursor-pointer">
  <img className="w-[200px] h-[65px]" src="https://nepalrastrakhabar.com/wp-content/uploads/2023/01/nrk-logo.png" alt="Nepal Rastra Khabar" />
</Link>
    </div>
    <br></br><br></br>
    <ul className="px-3 flex flex-col gap-y-1 font-medium">
{
  userInfo.role === "admin" ? <>

<li>
  <Link to='/dashboard/admin' className={`px-3 ${pathname === '/dashboard/admin'? 'bg-purple-500 text-black' : 'bg-white text-[#4040f6]'} py-2 hover:shadow-lg hover:shadow-orange-900 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-purple-500 hover:text-white`}>

    <span className=""> <AiFillDashboard/></span>
    <span className="text-black">
      Dashboard
    </span>
  </Link>
</li>
<br></br>
<li>
  <Link to='/dashboard/writer/add' className={`px-3 ${pathname === '/dashboard/writer/add'? 'bg-purple-500 text-white' : 'bg-purple-400 text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-orange-900 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-purple-500 hover:text-white`}>

<span className=""> <AiOutlinePlus/></span>
<span className="text-white">
  Add Writer
</span>
</Link>
</li>
<br></br>
<li>
  <Link to='/dashboard/writers' className={`px-3 ${pathname === '/dashboard/writers'? 'bg-purple-500 text-white' : 'bg-purple-400 text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-orange-900 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-purple-500 hover:text-white`}>

    <span className=""> <FiUsers/></span>
    <span className="text-white">
      Writers
    </span>
  </Link>
</li>
<br></br>
</>:<>
<li>
  <Link to='/dashboard/writer' className={`px-3 ${pathname === '/dashboard/writer'? 'bg-purple-500 text-black' : 'bg-white text-[#4040f6]'} py-2 hover:shadow-lg hover:shadow-orange-900 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-purple-500 hover:text-white`}>

    <span className=""> <AiFillDashboard/></span>
    <span className="text-black">
      Dashboard
    </span>
  </Link>
</li>
<br></br>
<li>
  <Link to='/dashboard/news/create' className={`px-3 ${pathname === '/dashboard/news/create'? 'bg-purple-500 text-white' : 'bg-purple-400 text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-orange-900 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-purple-500 hover:text-white`}>

    <span className="text-xl"> <FaPlus/></span>
    <span className="text-white">
     Add News
    </span>
  </Link>
</li>
<br></br>


  </>
}

<li>
  <Link to='/dashboard/news' className={`px-3 ${pathname === '/dashboard/news'? 'bg-purple-500 text-white' : 'bg-purple-400 text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-orange-900 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-purple-500 hover:text-white`}>

    <span className=""> <BiNews/></span>
    <span className="text-white">
      News
    </span>
  </Link>
</li>
<br></br>

<li>
  <Link to='/dashboard/profile' className={`px-3 ${pathname === '/dashboard/profile'? 'bg-purple-500 text-white' : 'bg-purple-400 text-[#404400f6]'} py-2 hover:shadow-lg hover:shadow-orange-900 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-purple-500 hover:text-white`}>

    <span className=""> <ImProfile/></span>
    <span className="text-white">
      Profile
    </span>
  </Link>
</li>

    </ul>
    
    </div>
  )
}

export default Sidebar

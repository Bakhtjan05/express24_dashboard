import React, { useState } from 'react'
import titleImg from "../../Assets/images/titleImg.png"
import addIcon from "../../Assets/icons/add-icon.png"
import chartBar from "../../Assets/icons/chart-bar.png"
import chartDonut from "../../Assets/icons/chart-donut.png"
import checkOutline from "../../Assets/icons/check-outline.png"
import usersIcon from "../../Assets/icons/ph_users-three-light.png"
import burgerIcon from "../../Assets/icons/charm_menu-hamburger.png"
import avatar from "../../Assets/icons/header.png"
import Requests from '../Requests'
import { Route, Link, Routes, useNavigate } from 'react-router-dom'
import Delivered from '../Delivered'
import AddBlock from '../AddPage'
import Users from '../Users'
import NotFoundPage from '../../Pages/NotFoundPage'

function Hero() {
  const navigate = useNavigate()
  const [activeItem, setActiveItem] = useState(null)

  const handleBgColor = (item) => {
    setActiveItem(item)
  }
  return (
    <div className='flex h-screen relative'>
      <aside className=' p-8 bg-[#FFFCED] shadow-[0px_4px_4px_0px_#00000040]'>
        <div>
          <img src={titleImg} alt="" />
        </div>
        <nav className='mt-10'>
          <ul>
            <li >
              <Link to="requests" className={`flex items-center gap-3 ${activeItem === "request" ? "bg-[#FFDC03]" : ""} text-nowrap hover:bg-[#FFDC03] px-3 py-1 rounded-lg transition duration-300`} onClick={() => handleBgColor("request")}>
                <div>
                <img src={chartDonut} alt="" />
                </div>
                <div>
                <p className='text-lg font-semibold'>Arizalar</p>
                <p className='text-xs'>Yetib kelgan arizalarni kuzatishingiz mumkin</p>
                </div>
              </Link>
            </li>
            <li className='mt-2'>
              <Link to="delivered" className={`flex items-center gap-3 ${activeItem === "delivered" ? "bg-[#FFDC03]" : ""} text-nowrap hover:bg-[#FFDC03] px-3 py-1 rounded-lg transition duration-300`} onClick={() => handleBgColor("delivered")}>
                <div>
                <img src={checkOutline} alt="" />
                </div>
                <div>
                <p className='text-lg font-semibold'>Yetkazilgan</p>
                <p className='text-xs'>Yetkazilgan taomlar ro’yxati bilan tanishing</p>
                </div>
              </Link>
            </li>
            <li className='flex mt-2 items-center gap-3 text-nowrap hover:bg-[#FFDC03] px-3 py-1 rounded-lg transition duration-300'>
              <div>
                <img src={chartBar} alt="" />
              </div>
              <div>
                <p className='text-lg font-semibold'>Statistika</p>
                <p className='text-xs'>Diagrammalar bilan ishlangan statistika</p>
              </div>
            </li>
            <li className='mt-2' >
             <Link to="adduser" className={`flex items-center gap-5 ${activeItem === "add" ? "bg-[#FFDC03]" : ""} text-nowrap hover:bg-[#FFDC03] px-3 py-1 rounded-lg transition duration-300`} onClick={() => handleBgColor("add")}>
             <div>
                <img className='' src={addIcon} alt="" />
              </div>
              <div>
                <p className='text-lg font-semibold'>Qo’shish</p>
                <p className='text-xs'>Yangi taom qo’shish </p>
              </div>
             </Link>
            </li>
            <li className='mt-2' >
              <Link to="users" className={`flex items-center gap-3 ${activeItem === "users" ? "bg-[#FFDC03]" : ""} text-nowrap hover:bg-[#FFDC03] px-3 py-1 rounded-lg transition duration-300`} onClick={() => handleBgColor("users")}>
              <div>
                <img src={usersIcon} alt="" />
              </div>
              <div>
                <p className='text-lg font-semibold'>Foydalanuvchilar</p>
                <p className='text-xs'>Rollarni biriktirishingiz mumkin </p>
              </div>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div className='flex-1 '  >
        <header className='flex justify-between items-center shadow-[0px_4px_0px_0px_#00000040]'>
          <div className='ps-5'>
            <img src={burgerIcon} alt="" />
          </div>
          <div className='flex'>
            <div>
              <button className='px-4 py-1 rounded-lg bg-[#FFDC03] mt-5 text-2xl font-semibold' onClick={() => navigate("/")}>Log out</button>
            </div>
            <div>
              <img src={avatar} alt="" />
            </div>
          </div>
        </header>
        <main className='px-8 py-10'>
          
          <Routes>
            <Route path='requests' element={<Requests/>}></Route>
            <Route path='delivered' element={<Delivered/>}></Route>
            <Route path='adduser/*' element={<AddBlock/>}></Route>
            <Route path='users' element={<Users/>}></Route>
            <Route path='*' element={<NotFoundPage/>}></Route>

          </Routes>
        </main>
      </div>
    </div>
  )
}



export default Hero
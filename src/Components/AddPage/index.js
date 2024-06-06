import React, { useState } from 'react'
import { Route, Link, Routes } from 'react-router-dom'
import Category from '../Users/Category'
import FoodAdd from '../Users/FoodAdd'


function AddBlock() {
  const [activeBg, setActiveBg] = useState(null)
  
  const handleActiveBg = (item) => {
    setActiveBg(item)
  }

  return (
    <div>
      <p className='text-2xl font-bold'>Qo’shish</p>
      <p className='text-xs'>Yangi kategoriya/taom qo’shish </p>
      <div className='mt-5 flex gap-2 '>
        <Link to="category" onClick={() => handleActiveBg("category")}>
          <button className={`text-xl ${activeBg === "category" ? "bg-[#FFEC00]" : ""} hover:bg-[#FFEC00] font-semibold px-6 pt-1 pb-3 rounded-xl hover:shadow-[0px_4px_4px_0px_#00000040] transition duration-200`}>Kategoriya</button>

        </Link>
        <Link to="foodadd" onClick={() => handleActiveBg("food")}>
          <button className={`text-xl ${activeBg === "food" ? "bg-[#FFEC00]" : ""} hover:bg-[#FFEC00] font-semibold px-6 pt-1 pb-3 rounded-xl hover:shadow-[0px_4px_4px_0px_#00000040] transition duration-200`}>Taom</button>
        </Link>
      </div>
      
      
      <Routes>
        <Route path="category" element={<Category/>}></Route>
        <Route path="foodadd" element={<FoodAdd/>}></Route>
        <Route path="/" element={<Category/>}></Route>
      </Routes>
    
    </div>
  )
}

export default AddBlock
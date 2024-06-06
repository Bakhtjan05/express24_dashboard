import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pen from "../../../Assets/icons/pen.png"
import trash from "../../../Assets/icons/Trash.png"
import { useDispatch, useSelector } from 'react-redux'
import { addCategory, deleteCategory, editCategory } from '../../../Redux/FoodCategoryAdding/actions'
import { faXmark } from '@fortawesome/free-solid-svg-icons';



function Category() {
  const categories = useSelector((state) => state.foodCategories.category)

  const dispatch = useDispatch() 

  const [categoryName, setCategoryName] = useState("")
  const [editCategoryName, setEditCategoryName] = useState("")
  const [editWindow, setEditWindow] = useState(false)
  const [index, setIndex] = useState(null)

  const addNewTask = () => {
    if(categoryName.trim() !== "") {
      dispatch(addCategory(categoryName))
      setCategoryName("")
    }

  }

  const deleteTask = (index) => {
    dispatch(deleteCategory(index))
  }

  const openEditCategory = (index) => {
    const category = categories[index]
    setEditWindow(!editWindow)
    setEditCategoryName(category.name)
    setIndex(index)
    
  }

  const editCategoryFunc = () => {
    dispatch(editCategory(index, editCategoryName))
    setEditCategoryName("")
    setEditWindow(false)
    console.log(editCategoryName);
  }


  return (
    <div>
      <div className='mt-5'>
        <input className='w-11/12 text-xl py-2 px-5 rounded-lg border-2 border-[#C9C9C9]' type="text" placeholder='Kategoriya nomi' value={categoryName} onChange={(e) => setCategoryName(e.target.value)}/>
      </div>
      <table className='mt-5 w-11/12'>
        <thead>
        <tr>
          <th className='text-start'>Kategoriya</th>
          <th></th>

        </tr>
        </thead>
        <tbody>
        {
          categories.map((category, index) => (
            <tr>
              <td className=''>{category.name}</td>
              <td className='px-2 py-1'>
              <div className='flex gap-3 justify-end'>
              <button onClick={() => openEditCategory(index)}>
                <img src={pen} alt="" />
              </button>
              <button onClick={() => deleteTask(index)}>
                <img src={trash} alt="" />
              </button>
            </div>
          </td>
        </tr>
          ))
        }
        </tbody>
      </table>
      <div className={`w-[500px] h-[400px] bg-white px-8 py-6  shadow-2xl rounded-lg absolute right-0 top-1/2 transform -translate-x-full -translate-y-1/2 ${editWindow ? "block" : "hidden"}`}>
        <div className='flex justify-end'>
          <FontAwesomeIcon icon={faXmark} size='xl' className='cursor-pointer' onClick={openEditCategory}/>
        </div>
        <h1 className='text-2xl font-semibold'>O'zgartirish</h1>
        <div className='mt-4'>
          <input type="text" placeholder='Kategoriya nomi' className='w-11/12 rounded-lg px-2 py-1 border-slate-400 border-2 ' value={editCategoryName} onChange={(e) => setEditCategoryName(e.target.value)}/>
        </div>
        {/* <div className='mt-6 flex gap-4'>
          <input type="text" placeholder='Taom nomi' className='w-4/5 rounded-lg px-2 py-1 border-slate-400 border-2' value={editFoodName} onChange={(e) => setFoodName(e.target.value)}/>
          <input type="number" placeholder='soni' className='w-1/5 rounded-lg px-2 py-1 border-slate-400 border-2 ' value={editQuantity} onChange={(e) => setEditQuantity(e.target.value)}/>
        </div>
        <div className='mt-6'>
          <input type="text" placeholder='Telefon raqami' className='w-3/4 rounded-lg px-2 py-1 border-slate-400 border-2' value={editPhoneNumber} onChange={(e) => setEditPhoneNumber(e.target.value)}/>
        </div> */}
        <div className='flex mt-16 justify-center'>
          <button className='text-xl bg-[#FFEC00] font-semibold px-20 py-2 rounded-xl shadow-[0px_4px_4px_0px_#00000040] transition duration-200' onClick={editCategoryFunc}>Save</button>
        </div>
      </div>
      <div className='mt-14 flex justify-center'>
        <button className='text-xl bg-[#FFEC00] font-semibold px-20 py-2 rounded-xl shadow-[0px_4px_4px_0px_#00000040] transition duration-200' onClick={addNewTask}>Qo’shish</button>
      </div>
    </div>
  )
}

export default Category
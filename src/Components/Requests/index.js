import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pen from "../../Assets/icons/pen.png"
import trash from "../../Assets/icons/Trash.png"
import { useDispatch, useSelector } from 'react-redux'
import { deleteCategory, editRequest } from '../../Redux/RequestAdding/actions'
import { faXmark } from '@fortawesome/free-solid-svg-icons';






function Requests() {

  const requestsList = useSelector((state) => state.requestsState.requests)
  const [editWindow, setEditWindow] = useState(false)
  const [editName, setEditName] = useState("")
  const [editFoodName, setFoodName] = useState("")
  const [editQuantity, setEditQuantity] = useState("")
  const [editPhoneNumber, setEditPhoneNumber] = useState("")
  const [editIndex, setEditIndex] = useState(null)

  const dispatch = useDispatch()

  const deleteRequest = (index) => {
    dispatch(deleteCategory(index))
  }

  const openEditRequest = (index) => {
    const request = requestsList[index]
    setEditWindow(!editWindow)
    setEditName(request.fullName)
    setFoodName(request.foodName)
    setEditQuantity(request.quantity)
    setEditPhoneNumber(request.phoneNumber)
    setEditIndex(index)

    
  }

  const editRequestSave = () => {
    dispatch(editRequest(editIndex, editName, editFoodName, editQuantity, editPhoneNumber))
    setEditName("")
    setFoodName("")
    setEditQuantity("")
    setEditPhoneNumber("")
    setEditWindow(false)
  }

  

  return (
    <div>
      <p className='text-2xl font-bold'>Arizalar</p>
      <p className='text-xs'>Yetib kelgan arizalarni kuzatishingiz mumkin</p>
      <table className='mt-11 w-11/12 text-start'>
        <tr className='border-b-2 border-gray-300'>
          <th className='px-2 py-1 text-left'>#</th>
          <th className='px-2 py-1 text-left'>To’liq ismi</th>
          <th className='px-2 py-1 text-left'>Taom nomi</th>
          <th className='px-2 py-1 text-left'>Narxi</th>
          <th className='px-2 py-1 text-left'>Soni</th>
          <th className='px-2 py-1 text-left'>Umumiy narx</th>
          <th className='px-2 py-1 text-left'>Telefon raqami</th>
          <th className='px-2 py-1 text-left'>Status</th>
          <th className='px-2 py-1 text-left'></th>
        </tr>
        {requestsList && requestsList.map((request, index) => (
            <tr className='border-b-2 border-gray-300' key={index}>
            <td className='px-2 py-1'>{index + 1}</td>
            <td className='px-2 py-1'>{request.fullName}</td>
            <td className='px-2 py-1'>{request.foodName}</td>
            <td className='px-2 py-1'>{request.price}</td>
            <td className='px-2 py-1'>{request.quantity}</td>
            <td className='px-2 py-1'>{request.price * request.quantity}</td>
            <td className='px-2 py-1'>{request.phoneNumber}</td>
            <td className='px-2 py-1'>{request.status}</td>
            <td className='px-2 py-1'>
            <div className='flex gap-5 justify-end'>
                <button>
                  <img src={pen} alt="" onClick={() => openEditRequest(index)} />
                </button>
                <button>
                  <img src={trash} alt="" onClick={() => deleteRequest(index)}/>
                </button>
              </div>
            </td>
          </tr>
        ))}
        
        <tr >
          <th className='px-2 py-1 text-left'>Jami</th>
          <th className='px-2 py-1'></th>
          <th className='px-2 py-1'></th>
          <th className='px-2 py-1'></th>
          <th className='px-2 py-1'></th>
          <th className='px-2 py-1'></th>
          <th className='px-2 py-1'></th>
          <th className='px-2 py-1 text-left'>{requestsList.reduce((total, item) => total + (item.price * item.quantity), 0).toLocaleString()} so’m</th>
        </tr>
      </table>
      <div className={`w-[500px] h-[400px] bg-white px-8 py-6  shadow-2xl rounded-lg absolute right-0 top-1/2 transform -translate-x-full -translate-y-1/2 ${editWindow ? "block" : "hidden"}`}>
        <div className='flex justify-end'>
          <FontAwesomeIcon icon={faXmark} size='xl' className='cursor-pointer' onClick={editRequest}/>
        </div>
        <h1 className='text-2xl font-semibold'>O'zgartirish</h1>
        <div className='mt-4'>
          <input type="text" placeholder='Ismi' className='w-11/12 rounded-lg px-2 py-1 border-slate-400 border-2 ' value={editName} onChange={(e) => setEditName(e.target.value)}/>
        </div>
        <div className='mt-6 flex gap-4'>
          <input type="text" placeholder='Taom nomi' className='w-4/5 rounded-lg px-2 py-1 border-slate-400 border-2' value={editFoodName} onChange={(e) => setFoodName(e.target.value)}/>
          <input type="number" placeholder='soni' className='w-1/5 rounded-lg px-2 py-1 border-slate-400 border-2 ' value={editQuantity} onChange={(e) => setEditQuantity(e.target.value)}/>
        </div>
        <div className='mt-6'>
          <input type="text" placeholder='Telefon raqami' className='w-3/4 rounded-lg px-2 py-1 border-slate-400 border-2' value={editPhoneNumber} onChange={(e) => setEditPhoneNumber(e.target.value)}/>
        </div>
        <div className='flex mt-16 justify-center'>
          <button className='text-xl bg-[#FFEC00] font-semibold px-20 py-2 rounded-xl shadow-[0px_4px_4px_0px_#00000040] transition duration-200' onClick={editRequestSave}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default Requests
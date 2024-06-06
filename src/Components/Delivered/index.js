import React from 'react'
import trash from "../../Assets/icons/Trash.png"
import { useDispatch, useSelector } from 'react-redux'
import { deleteDeliveredRequest } from '../../Redux/RequestAdding/actions'

function Delivered() {
  const deliveredRequestsList = useSelector((state) => state.requestsState.deliveredRequests)

  const dispatch = useDispatch()

  const deleteRequest = (index) => {
    dispatch(deleteDeliveredRequest(index))
  }

  return (
    <div>
      <p className='text-2xl font-bold'>Yetkazilgan</p>
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
          <th></th>
        </tr>
        {deliveredRequestsList && deliveredRequestsList.map((request, index) => (
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
          <th className='px-2 py-1 text-left'>{deliveredRequestsList.reduce((total, item) => total + (item.price * item.quantity), 0).toLocaleString()} so’m</th>
        </tr>
      </table>
    </div>
  )
}

export default Delivered
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import pen from "../../Assets/icons/pen.png"
import trash from "../../Assets/icons/Trash.png"
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, editUser } from '../../Redux/UsersAdding/action'

function Users() {
  const usersList = useSelector((state) => state.usersState.users)

  const dispatch = useDispatch()

  const [editWindow, setEditWindow] = useState(false)
  const [editUserName, setEditUserName] = useState("")
  const [editUserPhoneNumber, setEditUserPhoneNumber] = useState("")
  const [editUserRole, setEditUserRole] = useState("")
  const [editIndex, setEditIndex] = useState(null)

  const deleteUserBtn = (index) => {
    dispatch(deleteUser(index))
  }

  const openEditWindow = (index) => {
    const users = usersList[index]
    setEditWindow(!editWindow)
    setEditUserName(users.fullName)
    setEditUserPhoneNumber(users.phoneNumber)
    setEditUserRole(users.role)
    setEditIndex(index)
  }

  const editUsersSave = () => {
    dispatch(editUser(editIndex, editUserName, editUserPhoneNumber, editUserRole))
    setEditUserName("")
    setEditUserPhoneNumber("")
    setEditUserRole("")
    setEditWindow(false)
  }

  return (
    <div>
      <p className='text-2xl font-bold'>Foydalanuvchilar</p>
      <p className='text-[#F3AA18] text-xs'>Rollarni biriktirishingiz mumkin</p>
      <table className='mt-11 w-11/12 text-start'>
        <tr className='border-b-2 border-gray-300'>
          <th className='px-2 py-1 text-left'>#</th>
          <th className='px-2 py-1 text-left'>To’liq ismi</th>
          <th className='px-2 py-1 text-left'>Telefon raqami</th>
          <th className='px-2 py-1 text-left'>Roli</th>
          <th className='px-2 py-1 text-left'></th>
        </tr>
        {usersList.map((user, index) => (
          <tr className='border-b-2 border-gray-300'>
          <td className='px-2 py-1'>{index + 1}</td>
          <td className='px-2 py-1'>{user.fullName}</td>
          <td className='px-2 py-1'>{user.phoneNumber}</td>
          <td className='px-2 py-1'>{user.role}</td>
          <td className='px-2 py-1'>
            <div className='flex gap-5 justify-end'>
              <button>
                <img src={pen} alt="" onClick={() => openEditWindow(index)}/>
              </button>
              <button onClick={() => deleteUserBtn(index)}>
                <img src={trash} alt="" />
              </button>
            </div>
          </td>
          
        </tr>
        ))}
        <tr >
          <th className='px-2 py-1 text-left'>Jami</th>
          <th className='px-2 py-1'></th>
          <th className='px-2 py-1'></th>
          <th className='px-2 py-1 text-left'>{usersList.length} ta akkaunt</th>
        </tr>
      </table>
      <div className={`w-[500px] h-[400px] bg-white px-8 py-6  shadow-2xl rounded-lg absolute right-0 top-1/2 transform -translate-x-full -translate-y-1/2 ${editWindow ? "block" : "hidden"}`}>
        <div className='flex justify-end'>
          <FontAwesomeIcon icon={faXmark} size='xl' className='cursor-pointer' onClick={editWindow}/>
        </div>
        <h1 className='text-2xl font-semibold'>O'zgartirish</h1>
        <div className='mt-4'>
          <input type="text" placeholder='Foydalanuvchini ismi' className='w-11/12 rounded-lg px-2 py-1 border-slate-400 border-2 ' value={editUserName} onChange={(e) => setEditUserName(e.target.value)}/>
        </div>
        <div className='mt-6 flex gap-4'>
          <input type="text" placeholder='Telefon raqami' className='w-4/5 rounded-lg px-2 py-1 border-slate-400 border-2' value={editUserPhoneNumber} onChange={(e) => setEditUserPhoneNumber(e.target.value)}/>
          <input type="text" placeholder='roli' className='w-1/4 rounded-lg px-2 py-1 border-slate-400 border-2 ' value={editUserRole} onChange={(e) => setEditUserRole(e.target.value)}/>
        </div>
        <div className='flex mt-16 justify-center'>
          <button className='text-xl bg-[#FFEC00] font-semibold px-20 py-2 rounded-xl shadow-[0px_4px_4px_0px_#00000040] transition duration-200' onClick={editUsersSave}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default Users
import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import pen from "../../../Assets/icons/pen.png"
import trash from "../../../Assets/icons/Trash.png"
import { useDispatch, useSelector } from 'react-redux'
import { addFood, deleteFood, editFood } from '../../../Redux/FoodCategoryAdding/actions'


function FoodAdd() {
  const foodList = useSelector((state) => state.foodCategories.food)

  const dispatch = useDispatch()

  const [newFoodName, setNewFoodName] = useState("");
  const [foodPrice, setFoodPrice] = useState("");
  const [foodDescription, setFoodDescription] = useState("");
  const [editFoodName, setEditFoodName] = useState("")
  const [editFoodPrice, setEditFoodPrice] = useState("")
  const [editFoodDescription, setEditFoodDescription] = useState("")
  const [editIndex, setEditIndex] = useState(null)
  const [editWindow, setEditWindow] = useState(false)

  const addNewFood = () => {

    if(newFoodName.trim() !== "" && foodPrice.trim() !== "" && foodDescription.trim() !== "") {
      dispatch(addFood(newFoodName, foodPrice, foodDescription));
      setNewFoodName("")
      setFoodPrice("")
      setFoodDescription("")

    }
  }

  const deleteFoodBtn = (index) => {
    dispatch(deleteFood(index))
  }

  const openEditWindow = (index) => {
    const food = foodList[index]
    setEditFoodName(food.name)
    setEditFoodDescription(food.description)
    setEditFoodPrice(food.price)
    setEditWindow(!editWindow)
    setEditIndex(index)

  }

  const editFoodSave = () => {
    dispatch(editFood(editIndex, editFoodName, editFoodDescription, editFoodPrice))
    setEditFoodName("")
    setEditFoodDescription("")
    setEditFoodPrice("")
    setEditWindow(false)
  }

  
  return (
    <div className='mt-10'>
      <div className='flex  w-11/12'>
      <input className='w-11/12 text-xl py-2 px-5 rounded-lg border-2 border-[#C9C9C9]' type="text" placeholder='Taom nomi' value={newFoodName} onChange={(e) => setNewFoodName(e.target.value)}/>
      </div>
      <div className='mt-5'>
      <input className='w-11/12 h-48 text- text-xl py-2 px-5 rounded-lg border-2 border-[#C9C9C9]' type="text" placeholder='Tarif' value={foodDescription} onChange={(e) => setFoodDescription(e.target.value)}/>
      </div>
      <div className='flex w-11/12 mt-5'>
      <input className='w-11/12 text-xl py-2 px-5 rounded-lg border-2 border-[#C9C9C9]' type="text" placeholder='Narxi' value={foodPrice} onChange={(e) => setFoodPrice(e.target.value)}/>
      </div>
      <table className='w-11/12 mt-7'>
        <thead>
        <tr>
          <th className='text-left'>Taom</th>
          <th className='text-left'>Narxi</th>
          <th className='text-left'>Tavsifi</th>
        </tr>
        </thead>
        <tbody>
        {foodList.map((food, index) => (
          <tr key={index}>
          <td>{food.name}</td>
          <td>{food.price}</td>
          <td>{food.description}</td>
          <td className='px-2 py-1'>
            <div className='flex gap-3 justify-end'>
              <button>
                <img src={pen} alt="" onClick={() => openEditWindow(index)}/>
              </button>
              <button onClick={() => deleteFoodBtn(index)}>
                <img src={trash} alt="" />
              </button>
            </div>
          </td>
        </tr>
        
        ))}
        
        </tbody>
      </table>
      <div className={`w-[500px] h-[400px] bg-white px-8 py-6  shadow-2xl rounded-lg absolute right-0 top-1/2 transform -translate-x-full -translate-y-1/2 ${editWindow ? "block" : "hidden"}`}>
        <div className='flex justify-end'>
          <FontAwesomeIcon icon={faXmark} size='xl' className='cursor-pointer' onClick={editWindow}/>
        </div>
        <h1 className='text-2xl font-semibold'>O'zgartirish</h1>
        <div className='mt-4'>
          <input type="text" placeholder='Taom nomi' className='w-11/12 rounded-lg px-2 py-1 border-slate-400 border-2 ' value={editFoodName} onChange={(e) => setEditFoodName(e.target.value)}/>
        </div>
        <div className='mt-6 flex gap-4'>
          <input type="text" placeholder='Taom nomi' className='w-4/5 rounded-lg px-2 py-1 border-slate-400 border-2' value={editFoodDescription} onChange={(e) => setEditFoodDescription(e.target.value)}/>
          <input type="number" placeholder='soni' className='w-1/5 rounded-lg px-2 py-1 border-slate-400 border-2 ' value={editFoodPrice} onChange={(e) => setEditFoodPrice(e.target.value)}/>
        </div>
        <div className='flex mt-16 justify-center'>
          <button className='text-xl bg-[#FFEC00] font-semibold px-20 py-2 rounded-xl shadow-[0px_4px_4px_0px_#00000040] transition duration-200' onClick={editFoodSave}>Save</button>
        </div>
      </div>
      <div className='mt-14 flex justify-center'>
        <button className='text-xl bg-[#FFEC00] font-semibold px-20 py-2 rounded-xl shadow-[0px_4px_4px_0px_#00000040] transition duration-200' onClick={addNewFood}>Qo’shish</button>
      </div>
    </div>
  )
}

export default FoodAdd
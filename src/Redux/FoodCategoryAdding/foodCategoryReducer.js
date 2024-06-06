import { ADD_CATEGORY, DELETE_FOOD, EDIT_FOOD } from "./actions";
import { DELETE_CATEGORY } from "./actions";
import { ADD_FOOD } from "./actions";
import { EDIT_CATEGORY } from "./actions";


const initialState = {
  category: [{name: "Taom kategoriyasi"}],
  food: [{
    name: "Chizburger",
    price: 35000,
    description: "Sirli burger",
  },
  {
    name: "DubleBurger",
    price: 40000,
    description: "Kotta burger",
  }
]
}

const foodCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        category: [...state.category, {name: action.payload}],
        
      }

    case DELETE_CATEGORY:
      return {
        ...state,
        category: [
          ...state.category.slice(0, action.payload),
          ...state.category.slice(action.payload + 1)
          
        ]
      }

    case ADD_FOOD:
      return {
          ...state,
          food: [...state.food, action.payload]
      }

    case DELETE_FOOD:
      return {
        ...state,
        food: [
          ...state.food.slice(0, action.payload),
          ...state.food.slice(action.payload + 1)
        ]
      }


    case EDIT_CATEGORY:
      return {
        ...state,
        category: state.category.map((category, index) => {
          if (index === action.payload.index) {
            return { ...category, name: action.payload.categoryName };
          }
          return category;
        })
      }

    case EDIT_FOOD:
      return {
        ...state,
        food: state.food.map((food, index) => {
          if(index === action.payload.index) {
            return {...food, name: action.payload.foodName, description: action.payload.foodDescription, price: action.payload.foodPrice}
          }

          return food
        })
      }

    default:
        return state;
  }

  
}

export default foodCategoryReducer
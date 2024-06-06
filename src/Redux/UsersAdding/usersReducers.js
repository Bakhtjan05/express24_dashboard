import { DELETE_USER, EDIT_USER } from "./action";

const initialState = {
  users: [{
    id: 1,
    fullName: "Abdulaziz Ochilov",
    phoneNumber: "+998 97 888 10 27",
    role: "admin"
  },
  {
    id: 2,
    fullName: "Ergashev Islom",
    phoneNumber: "+998 97 888 12 35",
    role: "yetkazuvchi"
  },
  {
    id: 3,
    fullName: "Samidullayev Bahodir",
    phoneNumber: "+998 93 234 10 23",
    role: "foydalanuvchi"
  },
  {
    id: 4,
    fullName: "To’ramurodov Shoislom",
    phoneNumber: "+998 90 375 67 15",
    role: "foydalanuvchi"
  }
]
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER:
      return {
        ...state,
        users: [
          ...state.users.slice(0, action.payload),
          ...state.users.slice(action.payload + 1)
        ]
      }

    case EDIT_USER:
      return {
        ...state,
        users: state.users.map((user, index) => {
          if(index === action.payload.index) {
            return {...user, fullName: action.payload.userFullName, phoneNumber: action.payload.userPhoneNumber, role: action.payload.userRole}
          }

          return user
        })
      }
      
  
    default:
      return state
  }
}

export default userReducer
import { DELETE_CATEGORY, DELETE_DELIVERED_REQUEST, EDIT_REQUEST } from "./actions";


const initialState = {
  requests: [{
      id: 1,
      fullName: "Abdulaziz Ochilov",
      foodName: "Osh",
      price: 20000,
      quantity: 2,
      totalPrice: 40000,
      phoneNumber: "+998 97 888 10 27",
      status: "Lorem ipsou"

    },
    {
      id: 2,
      fullName: "Ergashev Islom",
      foodName: "Osh",
      price: 20000,
      quantity: 1,
      totalPrice: 20000,
      phoneNumber: "+998 97 888 12 35",
      status: "..."
    },
    {
      id: 3,
      fullName: "Samidullayev Bahodir",
      foodName: "Manti",
      price: 5000,
      quantity: 10,
      totalPrice: 50000,
      phoneNumber: "+998 93 234 10 23",
      status: "..."
    },
    {
      id: 4,
      fullName: "To’ramurodov Shoislom",
      foodName: "Big Lavash",
      price: 24000,
      quantity: 3,
      totalPrice: 72000,
      phoneNumber: "+998 90 375 67 15",
      status: "..."
    }
  ],
  deliveredRequests: [{
    id: 1,
    fullName: "Abdulaziz Ochilov",
    foodName: "Osh",
    price: 20000,
    quantity: 2,
    totalPrice: 40000,
    phoneNumber: "+998 97 888 10 27",
    status: "yetkazilgan"

  },
  {
    id: 2,
    fullName: "Ergashev Islom",
    foodName: "Osh",
    price: 20000,
    quantity: 1,
    totalPrice: 20000,
    phoneNumber: "+998 97 888 12 35",
    status: "yetkazilgan"
  },
  {
    id: 3,
    fullName: "Samidullayev Bahodir",
    foodName: "Manti",
    price: 5000,
    quantity: 10,
    totalPrice: 50000,
    phoneNumber: "+998 93 234 10 23",
    status: "yetkazilgan"
  },
  {
    id: 4,
    fullName: "To’ramurodov Shoislom",
    foodName: "Big Lavash",
    price: 24000,
    quantity: 3,
    totalPrice: 72000,
    phoneNumber: "+998 90 375 67 15",
    status: "yetkazilgan"
  }
],
}



const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CATEGORY:
        return {
          ...state,
          requests: [
            ...state.requests.slice(0, action.payload),
            ...state.requests.slice(action.payload + 1)
          ]
        }
    case DELETE_DELIVERED_REQUEST:
      return {
        ...state,
        deliveredRequests: [
          ...state.deliveredRequests.slice(0, action.payload),
          ...state.deliveredRequests.slice(action.payload + 1)
        ]
      }
    case EDIT_REQUEST:
      return {
        ...state,
        requests: state.requests.map((request, index) => 
          index === action.payload.index
            ? { ...request, ...action.payload }
            : request
        )
      };

    default:
      return state;
  }
}

export default requestReducer;
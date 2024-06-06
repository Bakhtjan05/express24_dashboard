import { combineReducers } from "@reduxjs/toolkit";
import foodCategoryReducer from "../FoodCategoryAdding/foodCategoryReducer";
import requestReducer from "../RequestAdding/requestReducer";
import userReducer from "../UsersAdding/usersReducers";

const rootReducer = combineReducers({
  foodCategories: foodCategoryReducer,
  requestsState: requestReducer,
  usersState: userReducer,
})

export default rootReducer;
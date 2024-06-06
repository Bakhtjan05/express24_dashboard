export const ADD_CATEGORY = "ADD_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY"
export const ADD_FOOD = "ADD_FOOD"
export const DELETE_FOOD = "DELETE_FOOD"
export const EDIT_CATEGORY = "EDIT_CATEGORY"
export const EDIT_FOOD = "EDIT_FOOD"

export const addCategory = (categoryName) => ({
  type: ADD_CATEGORY,
  payload: categoryName

})

export const deleteCategory = (index) => ({
  type: DELETE_CATEGORY,
  payload: index
})

export const addFood = (newFoodName, foodPrice, foodDescription) => ({
  type: ADD_FOOD,
  payload: {name: newFoodName, price: foodPrice, description: foodDescription}
})

export const deleteFood = (index) => ({
  type: DELETE_FOOD,
  payload: index
})

export const editCategory = (index, categoryName) => ({
  type: EDIT_CATEGORY,
  payload: {index, categoryName}
})

export const editFood = (index, foodName, foodDescription, foodPrice) => ({
  type: EDIT_FOOD,
  payload: {index, foodName, foodDescription, foodPrice}
})


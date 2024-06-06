export const DELETE_CATEGORY = "DELETE_CATEGORY"
export const DELETE_DELIVERED_REQUEST = "DELETE_DELIVERED_REQUEST"
export const EDIT_REQUEST = "EDIT_CATEGORY"

export const deleteCategory = (index) => ({
  type: DELETE_CATEGORY,
  payload: index
})

export const deleteDeliveredRequest = (index) => ({
  type: DELETE_DELIVERED_REQUEST,
  payload: index
})

export const editRequest = (index, name, foodName, quantity, phoneNumber) => ({
  type: EDIT_REQUEST,
  payload: {index, name, foodName, quantity, phoneNumber}
})
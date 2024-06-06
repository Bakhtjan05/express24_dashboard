export const DELETE_USER = "DELETE_USER"
export const EDIT_USER = "EDIT_USER"

export const deleteUser = (index) => ({
  type: DELETE_USER,
  payload: index
})

export const editUser = (index, userFullName, userPhoneNumber, userRole) => ({
  type: EDIT_USER,
  payload: {index, userFullName, userPhoneNumber, userRole}
})
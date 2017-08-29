export function addToOrder(id) {
  return {
    type: "ADD_TO_ORDER",
    payload: id 
  }
}

export function removeFromOrder(id) {
  return {
    type: "REMOVE_FROM_ORDER",
    payload: id
  }
}
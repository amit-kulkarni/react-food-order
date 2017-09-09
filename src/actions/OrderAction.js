export function addToNewOrder(order) {
  return {
    type: "ADD_TO_NEW_ORDER",
    payload: order
  }
}

export function updateOrder(order) {
  return {
    type: "UPDATE_ORDER",
    payload: order
  }
}

export function addToOrder(id, qty) {

  return (dispatch, getState) => {

    const doesOrderExist = getState().order.some((item) => {
      return item.id == id
    });

    if (doesOrderExist) {
      return dispatch(updateOrder({ id, qty }))
    } else {
      return dispatch(addToNewOrder({ id, qty }));
    }
  }
}

export function removeFromOrder(id) {
  return {
    type: "REMOVE_FROM_ORDER",
    payload: id
  }
}

export function getOrder() {
  return {
    type: "GET_ORDER"
  }
}
export default function orderReducer(state = [], action) {

  switch (action.type) {

    case "ADD_TO_NEW_ORDER":
      return [...state, action.payload];

    case "UPDATE_ORDER":
      return state.map((order) => {
        if (order.id === action.payload.id)
          return { id: order.id, qty: action.payload.qty };
        else
          return order;
      });

    case "REMOVE_FROM_ORDER":
      return state.map((order) => {
        return order.id !== action.payload.id;
      });

    case "GET_ORDER":
      return state;

    default:
      return state;
  }
}
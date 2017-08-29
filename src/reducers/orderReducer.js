export default function orderReducer(state =[],action) {

  switch (action.type) {

    case "ADD_TO_ORDER":
      return [...state, action.payload];

    case "REMOVE_FROM_ORDER":
      return state.map((order) => {
        return order.id !== action.payload;
      });
    
    case "GET_ORDER":
      return state; 

    default:
      return state;
  }
}
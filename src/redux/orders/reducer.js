import { GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS } from "../actionTypes";

const initialState = {
  orders: []
}

export default function ordersReducer(state = initialState, action){
  switch (action.type) {
    case GET_ORDERS_REQUEST:
      return { ...state, orders: []}
    case GET_ORDERS_SUCCESS:
      return { ...state, orders: action.data}
    default:
      return state;
  }
}

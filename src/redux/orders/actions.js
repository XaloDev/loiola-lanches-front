import { GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS } from "../actionTypes";

export function getOrdersRequest(params){
  return {
    type: GET_ORDERS_REQUEST,
    params
  }
}

export function getOrdersSuccess(data){
  return {
    type: GET_ORDERS_SUCCESS,
    data
  }
}

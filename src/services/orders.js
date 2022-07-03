import api from "./api";

const baseUrl = 'orders/'

export function getOrders(params){
  return api.get(`${baseUrl}`)
}

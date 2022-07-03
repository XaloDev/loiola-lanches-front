import { call, put, all, takeLatest } from 'redux-saga/effects'
import { GET_ORDERS_REQUEST } from "../actionTypes";
import { sendErrorMessage, stopLoadingLocal, startLoadingLocal } from '../utils/actions';
import { getOrdersSuccess } from './actions';
import * as Orders from '../../services/orders'



function* getOrders({ params }){
  try {
    yield put(startLoadingLocal())

    const response = yield call(Orders.getOrders, params)

    yield put(getOrdersSuccess(response.data))
  } catch (error) {
    yield put(sendErrorMessage("Erro ao buscar Pedidos"))
  } finally {
    yield put(stopLoadingLocal())
  }
}



export default all([
  takeLatest(GET_ORDERS_REQUEST, getOrders)
])

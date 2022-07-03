import { all } from 'redux-saga/effects';
import utilsSaga from './utils/saga'
import ordersSaga from './orders/saga'

export default function* rootSaga(getState) {
  yield all([
    utilsSaga,
    ordersSaga
  ]);
}

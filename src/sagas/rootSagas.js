import {all, takeEvery} from 'redux-saga/effects/'
import * as Types from '../redux/actions/types'
import { fetchGold } from './gold'
export default function* watchSagas() {
  yield all([
    yield takeEvery(Types.REQUEST_GOLD_PRICE,fetchGold)
  ])
}

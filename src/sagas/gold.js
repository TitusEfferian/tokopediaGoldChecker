import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {
  goldApi
} from '../apis/gold'
import { REQUEST_GOLD_PRICE_SUCCESS, REQUEST_GOLD_PRICE_FAILED } from '../redux/actions/types'

export function* fetchGold(action) {
    try {
      console.log(action)
      const data = yield call(goldApi)
      yield put({ type: REQUEST_GOLD_PRICE_SUCCESS, data })
    } catch (e) {
      yield put({ type: REQUEST_GOLD_PRICE_FAILED, errData: { message: e.message } })
    }
  }
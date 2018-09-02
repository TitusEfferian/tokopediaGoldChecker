import {createAction} from 'redux-actions'
import { REQUEST_GOLD_PRICE, REQUEST_GOLD_PRICE_SUCCESS, REQUEST_GOLD_PRICE_FAILED } from './types';

export const requestGoldPrice = createAction(REQUEST_GOLD_PRICE)
export const requestGoldPriceSuccess = createAction(REQUEST_GOLD_PRICE_SUCCESS)
export const requestGoldPriceFailed = createAction(REQUEST_GOLD_PRICE_FAILED)
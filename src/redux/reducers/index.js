import {combineReducers} from 'redux'

export default combineReducers({
    goldPrice:require('./gold').reducer,
})

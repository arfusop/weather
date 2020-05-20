import { combineReducers } from 'redux'
import weatherReducer from './weather'
import userReducer from './user'

const rootReducer = combineReducers({
    weather: weatherReducer,
    user: userReducer
})

export default rootReducer

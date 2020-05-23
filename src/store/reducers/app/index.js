import {
    UPDATE_WEATHER,
    SET_LOADING,
    SET_THEME,
    SET_LOCATION,
    SET_ALERT
} from '../../types/app'
const initState = {
    location: {},
    weather: {},
    loading: false,
    loaderTheme: 'sun',
    alert: { type: '', text: '' }
}

const appReducer = (state = initState, action) => {
    const { payload, type } = action
    switch (type) {
        case UPDATE_WEATHER:
            return {
                ...state,
                weather: payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: payload
            }
        case SET_THEME:
            return {
                ...state,
                loaderTheme: payload
            }
        case SET_LOCATION:
            return {
                ...state,
                location: payload
            }
        case SET_ALERT:
            return {
                ...state,
                alert: payload
            }
        default:
            return state
    }
}

export default appReducer

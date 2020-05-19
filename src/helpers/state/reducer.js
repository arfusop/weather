import { LOCATION, LOADING, UPDATE_WEATHER, SET_THEME } from './types'

export const initialState = {
    location: {},
    weather: {},
    loading: false,
    theme: 'day'
}

export const reducer = (state, action) => {
    const { type, payload } = action
    const { data, label } = payload

    switch (type) {
        case LOCATION:
            const { lat, long } = data
            return {
                ...state,
                [label]: {
                    lat,
                    long
                }
            }
        case LOADING:
            return {
                ...state,
                [label]: data
            }

        case UPDATE_WEATHER:
            return {
                ...state,
                weather: data
            }
        case SET_THEME:
            return {
                ...state,
                theme: data
            }
        default:
            return { ...state }
    }
    // return {
    //     ...state,
    //     [type]: {
    //         ...state[type],
    //         [label]: data
    //     }
    // }
}

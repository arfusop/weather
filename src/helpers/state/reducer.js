import { LOCATION, LOADING, UPDATE_WEATHER } from './types'

export const initialState = {
    location: {
        lat: 0,
        long: 0
    },
    weather: {},
    loading: false
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

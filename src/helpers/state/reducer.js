import { LOCATION } from './types'

export const initialState = {
    location: {
        lat: 0,
        long: 0
    }
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

        default:
            break
    }
    // return {
    //     ...state,
    //     [type]: {
    //         ...state[type],
    //         [label]: data
    //     }
    // }
}

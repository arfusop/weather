const initState = {
    data: {}
}

const weatherReducer = (state = initState, action) => {
    const { payload, type } = action
    switch (type) {
        case 'UPDATE_WEATHER':
            return {
                ...state,
                data: payload
            }
        default:
            return state
    }
}

export default weatherReducer

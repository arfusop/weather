const initState = {
    agent: {}
}

const userReducer = (state = initState, action) => {
    const { payload, type } = action
    switch (type) {
        case 'UPDATE_USER_AGENT':
            return {
                ...state,
                agent: payload
            }
        default:
            return state
    }
}

export default userReducer

import { SET_USER_AGENT } from '../../types/user'

const initState = {
    agent: {}
}

const userReducer = (state = initState, action) => {
    const { payload, type } = action
    switch (type) {
        case SET_USER_AGENT:
            return {
                ...state,
                agent: payload
            }
        default:
            return state
    }
}

export default userReducer

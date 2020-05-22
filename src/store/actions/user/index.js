import { UAParser } from 'ua-parser-js'
import { SET_USER_AGENT } from '../../types/user'
import { SET_LOADING } from '../../types/app'

export const getUserAgent = () => dispatch => {
    const parsed = new UAParser()
    const userAgent = parsed.getResult()

    dispatch({ type: SET_LOADING, payload: false })
    dispatch({ type: SET_USER_AGENT, payload: userAgent })
}

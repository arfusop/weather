import { UAParser } from 'ua-parser-js'
import { SET_USER_AGENT } from '../../types/user'

export const getUserAgent = () => dispatch => {
    const parsed = new UAParser()
    const userAgent = parsed.getResult()

    dispatch({ type: SET_USER_AGENT, payload: userAgent })
}

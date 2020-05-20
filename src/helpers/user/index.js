import { UAParser } from 'ua-parser-js'

export const getUserAgent = () => {
    const parsed = new UAParser()
    const userAgent = parsed.getResult()
    return userAgent
}

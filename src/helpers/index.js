export const getWeatherIcon = label => {
    let icon
    switch (label) {
        case 'clear-day':
            icon = 'wi-day-sunny'
            break
        case 'clear-night':
            icon = 'wi-night-clear'
            break
        case 'rain':
            icon = 'wi-rain'
            break
        case 'snow':
            icon = 'wi-snow'
            break
        case 'sleet':
            icon = 'wi-sleet'
            break
        case 'wind':
            icon = 'wi-windy'
            break
        case 'fog':
            icon = 'wi-fog'
            break
        case 'cloudy':
            icon = 'wi-cloudy'
            break
        case 'partly-cloudy-day':
            icon = 'wi-day-cloudy'
            break
        case 'partly-cloudy-night':
            icon = 'wi-night-cloudy'
            break
        default:
            icon = 'wi-na'
            break
    }
    return icon
}

export const getDayOfWeek = day => {
    switch (day) {
        case 1:
            return 'Mon'
        case 2:
            return 'Tue'
        case 3:
            return 'Wed'
        case 4:
            return 'Thu'
        case 5:
            return 'Fri'
        case 6:
            return 'Sat'
        case 7:
            return 'Sun'

        default:
            return null
    }
}

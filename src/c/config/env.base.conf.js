const loc = window.location
const origin = loc.origin || loc.protocol + '//' + loc.host
export default {
    environment: 'develop',
    debug: true,
    origin: origin,
    webBaseURL: origin,
    apiBaseURL: origin
}

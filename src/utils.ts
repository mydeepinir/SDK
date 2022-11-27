
// TODO: needs polyfill
export function getIso8601() {
    return (new Date()).toISOString()
}

export function log(msg: string) {
    console.log('Deepin', msg)
    return msg
}
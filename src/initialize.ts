import { Configuration } from "./types"

export let configuration: Configuration
export function init(config: Configuration) {
    configuration = config
    setUser(config.userID)
}

function log(msg: string) {
    console.log('Deepin', msg)
}

export function setUser(userId?: string) {
    configuration.userID = userId
}

export function hasConfiguredWell() {
    if (!configuration) {
        log('It must be initialized')
        return false
    } else if (!configuration.apiKey) {
        log('Please set the Api key in the init method')
        return false
    } else if (!configuration.userID) {
        log('userId is null')
        return false
    }
    return true
}
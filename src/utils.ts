import { v4 as uuid } from '@lukeed/uuid'
import { LocalStorage, storage } from "./storage"


// TODO: needs polyfill
export function getIso8601() {
    return (new Date()).toISOString()
}

const localStorageIsAvailable = LocalStorage.available()
let deviceId = localStorageIsAvailable && storage.get('device_id')
export function getDeviceId() {
    if (!deviceId) {
        deviceId = uuid()
        localStorageIsAvailable && storage.set('device_id', deviceId)
    }
    return deviceId
}

export function log(msg: string) {
    console.log('Deepin', msg)
}
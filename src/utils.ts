import { v4 as uuid } from '@lukeed/uuid'
import { storage } from "./storage"


// TODO: needs polyfill
export function getIso8601() {
    return (new Date()).toISOString()
}

let deviceId = storage.get('device_id')
export function getDeviceId() {
    if (!deviceId) {
        deviceId = uuid()
        storage.set('device_id', deviceId)
    }
    return deviceId
}
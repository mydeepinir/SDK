import { v4 as uuid } from '@lukeed/uuid'
import { storage } from "./storage"

export let deviceId = ""
const DeviceIdKey = "deepin_deviceId"
function checkDeviceId() {
    if (!deviceId) {
        deviceId = uuid()
        storage.set(DeviceIdKey, deviceId)
    }
}

export function init() {
    deviceId = storage.getString(DeviceIdKey)
    checkDeviceId()
}
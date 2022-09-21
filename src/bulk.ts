import { ActionType, EventType } from "./types"
import { storage, LocalStorage } from "./storage"
import { configuration } from "./initialize"
import { sendRequest } from './ajax'
import { hasConfiguredWell } from './initialize'
import { getDeviceId, getIso8601 } from "./utils"

const BUNCH_KEY = 'DeepinEventsBulk'

function releaseCondition(items: EventType[]) {
    return items.length > 5
}

export function sendInQueue(actionType: ActionType, eventData: any, eventObject: EventType) {
    if (!hasConfiguredWell()) { return Promise.reject() }

    const event = {
        type: actionType,
        ...eventObject,
        ...eventData,
        deviceId: getDeviceId(),
        timestamp: getIso8601(),
    }

    const localStorageIsAvailable = LocalStorage.available()
    let items: any[] = localStorageIsAvailable ? storage.get(BUNCH_KEY) || [] : []
    items.push(event)
    const releaseEventsStack = !configuration.sendEventsBulky || !localStorageIsAvailable || releaseCondition(items)
    if (releaseEventsStack) {
        storage.set(BUNCH_KEY, [])
        return sendRequest(items)
    } else {
        storage.set(BUNCH_KEY, items)
        return Promise.resolve()
    }
}
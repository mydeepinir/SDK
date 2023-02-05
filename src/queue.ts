import { ActionType, EventType } from "./types"
import { storage, LocalStorage } from "./storage"
import config from "./config"
import { sendRequest } from './ajax'
import { getIso8601 } from "./utils"
import { deviceId } from "./deviceId"

const BUNCH_KEY = 'DeepinEventsBulk'

const localStorageIsAvailable = LocalStorage.available()
class Queue {
    items: any[] = []
    lockTimeItems: any[] = []
    locked: boolean = false
    constructor() {
        this.items = storage.get(BUNCH_KEY, [])
    }

    add(item: any) {
        if (this.locked) {
            this.lockTimeItems.push(item)
        }
        this.items.push(item)
        storage.set(BUNCH_KEY, this.items)
    }

    clear() {
        this.items = []
        storage.set(BUNCH_KEY, this.items)
    }
    lock() {
        this.locked = true
        this.lockTimeItems = []
    }
    unlock() {
        this.locked = false
        this.items = [...this.lockTimeItems]
    }
}
const queue = new Queue();

function releaseCondition(items: EventType[]) {
    return items.length > 5
}

export async function sendInQueue(actionType: ActionType, eventData: any, eventObject: EventType): Promise<any> {
    if (config.checkError()) { return Promise.reject(config.checkError()) }

    const event = {
        ...eventObject,
        ...eventData,
        type: actionType,
        deviceId,
        timestamp: getIso8601(),
    }
    if (config.configuration.userID) {
        event.userId = config.configuration.userID
    }

    queue.add(event)
    const releaseEventsStack = deviceId && (!localStorageIsAvailable || releaseCondition(queue.items))

    if (releaseEventsStack) {
        return flushEvents()
    }
}

export async function flushEvents() {
    queue.lock()
    const result = await sendRequest(queue.items)
    queue.clear()
    queue.unlock()

    return result
}

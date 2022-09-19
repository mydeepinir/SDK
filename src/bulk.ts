import { EventType } from "./types"
import { LocalStorage } from "./storage"
import { configuration } from "./initialize"

const BUNCH_KEY = 'DeepinEventsBulk'
const storage = new LocalStorage()

function releaseCondition(items: EventType[]) {
    return items.length > 5
}

export function putInQueue(eventObject: EventType) {
    if (!configuration.sendEventsBulky || !LocalStorage.available()) {
        return [eventObject]
    }
    let items: EventType[] = storage.get(BUNCH_KEY) || []
    items.push(eventObject)

    const releaseEventsStack = releaseCondition(items)
    storage.set(BUNCH_KEY, releaseEventsStack ? [] : items)
    return releaseEventsStack ? items: null
}

import { EventType } from './types'
import { putInQueue } from './bulk'
import { hasConfiguredWell } from './initialize'
import { sendRequest } from './ajax'

export { init } from './initialize'

export function sendEvent(eventObject: EventType) {
    if (!hasConfiguredWell()) { return }
    const eventArray = putInQueue(eventObject)
    if (eventArray) {
        sendRequest(eventArray)
    }
}

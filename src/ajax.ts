import fetch from 'unfetch'
import { ActionType, EventType } from './types'
import { configuration } from './initialize'

const baseUrl = "https://stage-api.mydeepin.ir/v1/"
export function sendRequest(eventsArray: EventType[]) {
    let body: any = eventsArray[0]
    let endpoint = body.type

    if (eventsArray.length > 1) {
        endpoint = ActionType.Batch,
        body = {
            type: ActionType.Batch,
            batch: eventsArray
        }
    }

    return fetch(baseUrl + endpoint, { 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'write-key': configuration.writeKey
        },
        method: 'POST',
        body: JSON.stringify(body)
    })
}
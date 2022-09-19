import fetch from 'unfetch'
import { EventType } from './types'

const url = ''
export function sendRequest(eventsArray: EventType[]) {
    fetch(url, { body: eventsArray as any })
}
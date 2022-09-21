
import { ActionType, GroupProperties, IdentifyProperties, TrackProperties } from './types'
import { sendInQueue } from './bulk'
import { setUser } from './initialize'

export { init } from './initialize'

export function identify(userId: string, traits: IdentifyProperties) {
    setUser(userId)
    return sendInQueue(ActionType.Identify, { userId }, traits)
}

export function track(event: string, properties: TrackProperties) {
    return sendInQueue(ActionType.Track, { event }, properties)
}

export function page(category: string, name: string, properties: IdentifyProperties) {
    return sendInQueue(ActionType.Page, { category, name }, properties)
}

export function group(groupId: string, traits: GroupProperties) {
    return sendInQueue(ActionType.Group, { groupId }, traits)
}

export function alias(userId: string, previousId: string) {
    return sendInQueue(ActionType.Alias, { userId, previousId }, {})
}

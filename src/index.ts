
import { GroupProperties, IdentifyProperties, TrackProperties } from './types'
import { sendInQueue } from './bulk'
import { hasConfiguredWell, setUser } from './initialize'

export { init } from './initialize'

export function identify(userId: string, traits: IdentifyProperties) {
    if (!hasConfiguredWell()) { return }
    setUser(userId)
    sendInQueue({ userId }, traits)
}

export function track(event: string, properties: TrackProperties) {
    sendInQueue({ event }, properties)
}

export function page(category: string, name: string, properties: IdentifyProperties) {
    sendInQueue({ category, name }, properties)
}

export function group(groupId: string, traits: GroupProperties) {
    sendInQueue({ groupId }, traits)
}

export function alias(userId: string, previousId: string) {
    sendInQueue({ userId, previousId }, {})
}

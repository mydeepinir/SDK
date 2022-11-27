
import { ActionType, GroupProperties, IdentifyProperties, InitProperties, TrackProperties } from './types'
import { sendInQueue } from './queue'
import { init as initDeviceId } from './deviceId'
import config from './config'

import deepInConfig from './config'

class DeepInSDK {
    /**
     * Initializing the SDK
     *
     * @param writeKey - Your write key
     * @param properties - Some shared configurations
     */
    init(writeKey: string, properties: InitProperties = {}) {
        initDeviceId()
        deepInConfig.init(writeKey, properties)
    }

    /**
     * lets you identify every user that visits your site.
     *
     * @param userId - The database ID for the user. 
     * @param traits - A dictionary of traits you know about the user.
     */
    identify(userId: string, traits: IdentifyProperties = {}): Promise<any> {
        config.setUser(userId)
        return sendInQueue(ActionType.Identify, { userId }, traits)
    }

    /**
     * lets you tell us the actions your users are performing on your site.
     *
     * @param event - The name of the event you’re tracking.
     * @param properties - A dictionary of properties for the event.
     */
    track(event: string, category?: string, properties: TrackProperties = {}): Promise<any> {
        return sendInQueue(ActionType.Track, { event, category }, properties)
    }

    /**
     * lets you record page views on your website
     *
     * @param category - The category of the page. Useful for cases like ecommerce where many pages might live under a single category.
     * @param properties - associated properties of a page
     */
    page(category?: string, properties: IdentifyProperties = {}): Promise<any> {
        return sendInQueue(ActionType.Page, { category }, properties)
    }

    /**
     * The Group method associates an identified user with a company, organization, project, workspace, team, tribe, platoon, assemblage, cluster, troop, gang, party, society or any other collective noun you come up with for the same concept.
     *
     * @param groupId - The Group ID to associate with the current user.
     * @param properties - A dictionary of traits for the group.
     */
    group(groupId: string, traits: GroupProperties = {}): Promise<any> {
        return sendInQueue(ActionType.Group, { groupId }, traits)
    }

    /**
     * The Alias method combines two unassociated user identities.
     *
     * @param userId - The new user ID you want to associate with the user.
     * @param previousId - The previous ID that the user was recognized by. This defaults to the currently identified user’s ID.
     */
    alias(userId: string, previousId: string): Promise<any> {
        return sendInQueue(ActionType.Alias, { userId, previousId: previousId || deepInConfig.configuration?.userID }, {})
    }
}

const deepIn = new DeepInSDK()
export default deepIn
export const { alias, group, page, track, identify, init } = deepIn
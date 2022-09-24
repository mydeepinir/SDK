export interface Configuration {
    sendEventsBulky?: boolean
    writeKey: string
    userID?: string
}
export interface InitProperties {
    sendEventsBulky?: boolean
    userID?: string
}

export interface CommonProperties {
    active?: boolean
    app_name?: string
    app_version?: string
    app_build?: string
    campaign_name?: string
    campaign_source?: string
    campaign_medium?: string
    campaign_term?: string
    campaign_content?: string
    device_id?: string
    device_advertisingId?: string
    device_manufacturer?: string
    device_model?: string
    device_name?: string
    device_type?: string
    device_version?: string
    ip?: string
    library_axios?: string
    locale?: string
    location_city?: string
    location_country?: string
    location_latitude?: string
    location_longitude?: string
    location_region?: string
    location_speed?: string
    network_bluetooth?: string
    network_carrier?: string
    network_cellular?: string
    network_wifi?: string
    os_name?: string
    os_version?: string
    page_path?: string
    page_referrer?: string
    page_search?: string
    page_title?: string
    page_url?: string
    referrer_type?: string
    referrer_name?: string
    referrer_url?: string
    referrer_link?: string
    screen_density?: string
    screen_height?: string
    screen_width?: string
    timezone?: string
    timezone_groupId?: string
    timezone_userAgent?: string
    anonymousId?: string
    userId?: string
    groupId?: string
    integrations?: Object
    messageId?: string
    type?: string
    version?: string
    receivedAt?: number
    sentAt?: number
    timestamp?: number
    originalTimestamp?: number
    properties?: Object
    source?: string
}

export interface AliasProperties extends CommonProperties{
    previousId?: string
}

export interface GroupProperties extends CommonProperties {
    traits_employees?: string
    traits_industry?: string
    traits_plan?: string
}

export interface IdentifyProperties extends CommonProperties {
    traits_age?: number | string
    traits_birthday?: string
    traits_firstName?: string
    traits_gender?: string
    traits_lastName?: string
    traits_title?: string
    traits_username?: string
    traits_company_name?: string
    traits_company_id?: string
    traits_company_industry?: string
    traits_company_employeeCount?: string
    traits_company_plan?: string
}

export interface PageProperties extends CommonProperties {
    category?: string
    channel?: string
}

export interface ScreenProperties extends CommonProperties {
    channel?: string
}

export interface TrackProperties extends CommonProperties {
    event?: string
    category?: string
}

export type EventType = PageProperties | ScreenProperties | TrackProperties | AliasProperties

export enum ActionType {
    Identify = 'identify',
    Track = 'track',
    Alias = 'alias',
    Group = 'group',
    Page = 'page',
    Screen = 'screen',
    Batch = 'batch',
}
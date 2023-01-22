export interface App {
  name?: string,
  version?: string,
  build?: string,
}
export interface Campaign {
  name?: string,
  source?: string,
  medium?: string,
  term?: string,
  content?: string,
}
export interface Device {
  id?: string,
  advertisingId?: string,
  manufacturer?: string,
  model?: string,
  name?: string,
  type?: string,
  version?: string,
}
export interface Location {
  city?: string
  country?: string
  latitude?: string
  longitude?: string
  region?: string
  speed?: string
}
export interface Network {
  bluetooth?: string
  carrier?: string
  cellular?: string
  wifi?: string
}
export interface Os {
  name?: string
  version?: string
}
export interface Page {
  path?: string
  referrer?: string
  search?: string
  title?: string
  url?: string
}
export interface Referer {
  type?: string
  name?: string
  url?: string
  link?: string
}
export interface Screen {
  density?: string
  height?: string
  width?: string
}

export interface CommonProperties {
  active?: boolean
  app?: App,
  campaign?: Campaign
  device?: Device
  ip?: string
  library_axios?: string
  locale?: string
  location?: Location
  network?: Network
  os?: Os
  page?: Page
  referer?: Referer
  screen?: Screen
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
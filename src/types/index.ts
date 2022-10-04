import { PageProperties } from './page'
export { PageProperties } from './page'
import { ScreenProperties } from './screen'
export { ScreenProperties } from './screen'
import { TrackProperties } from './track'
export { TrackProperties } from './track'
import { AliasProperties } from './alias'
export { AliasProperties } from './alias'
import { GroupProperties } from './group'
export { GroupProperties } from './group'
export { IdentifyProperties } from './identify'

export interface InitProperties {
    dontBunch?: boolean
    userID?: string
}
export interface Configuration extends InitProperties {
    writeKey: string
}

export type EventType = PageProperties | ScreenProperties | TrackProperties | AliasProperties | GroupProperties
export enum ActionType {
    Identify = 'identify',
    Track = 'track',
    Alias = 'alias',
    Group = 'group',
    Page = 'page',
    Screen = 'screen',
    Batch = 'batch',
}
import type { PageProperties } from './page'
import type { ScreenProperties } from './screen'
import type { TrackProperties } from './track'
import type { AliasProperties } from './alias'
import type { GroupProperties } from './group'
import type { IdentifyProperties } from './identify'

type EventType = PageProperties | ScreenProperties | TrackProperties | AliasProperties | GroupProperties

interface InitConfiguration {
    dontBunch?: boolean
    userID?: string
}
interface Configuration extends InitConfiguration {
    writeKey: string
}

enum ActionType {
    Identify = 'identify',
    Track = 'track',
    Alias = 'alias',
    Group = 'group',
    Page = 'page',
    Screen = 'screen',
    Batch = 'batch',
}

export {
    PageProperties,
    ScreenProperties,
    TrackProperties,
    AliasProperties,
    GroupProperties,
    IdentifyProperties,
    EventType,
    ActionType,
    Configuration,
    InitConfiguration
}
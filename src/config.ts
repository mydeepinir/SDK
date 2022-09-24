import { Configuration, InitProperties } from "./types"
import { log } from "./utils"

class DeepInConfig {
    public configuration: Configuration = {writeKey: ''}
    init(writeKey: string, properties: InitProperties) {
        this.configuration = { ...properties, writeKey }
    }
    setUser(userId?: string) {
        this.configuration.userID = userId
    }
    isConfigured() {
        if (!this.configuration) {
            log('It must be initialized')
            return false
        } else if (!this.configuration.writeKey) {
            log('Please set the writeKey in the init method')
            return false
        }
        return true
    }
}

export default new DeepInConfig()
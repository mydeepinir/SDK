import { Configuration, InitProperties } from "./types"

class DeepInConfig {
    public configuration: Configuration = { writeKey: '' }
    init(writeKey: string, properties: InitProperties) {
        this.configuration = { ...properties, writeKey }
    }
    setUser(userId?: string) {
        this.configuration.userID = userId
    }
    checkError() {
        if (!this.configuration) {
            return 'It must be initialized'
        } else if (!this.configuration.writeKey) {
            return 'Please set the writeKey in the init method'
        }
        return ''
    }
}

export default new DeepInConfig()
export class LocalStorage {
    static available(): boolean {
        const test = 'test'
        try {
            localStorage.setItem(test, test)
            localStorage.removeItem(test)
            return true
        } catch (e) {
            return false
        }
    }

    get<T>(key: string): T | null {
        const val = localStorage.getItem(key)
        if (val) {
            try {
                return JSON.parse(val)
            } catch (e) {
                return JSON.parse(JSON.stringify(val))
            }
        }
        return null
    }

    set<T>(key: string, value: T): T | null {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch {
            console.warn(`Unable to set ${key} in localStorage, storage may be full.`)
        }

        return value
    }

    remove(key: string): void {
        return localStorage.removeItem(key)
    }
}


export const storage = new LocalStorage()
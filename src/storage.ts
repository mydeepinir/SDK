
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

    getString(key: string): string {
        return isAvailable ? localStorage.getItem(key) || "" : ""
    }
    get(key: string, initValue: any = {}): any {
        const val = this.getString(key)
        if (val) {
            try {
                return JSON.parse(val)
            } catch (e) {
                return initValue
            }
        }
        return initValue
    }

    set<T>(key: string, value: T): T | null {
        if (isAvailable) {
            let v: string = typeof value === "string" ? value : JSON.stringify(value)
            localStorage.setItem(key, v)
        }

        return value
    }

    remove(key: string): void {
        if (isAvailable) {
            return localStorage.removeItem(key)
        }
    }
}


export const storage = new LocalStorage()
const isAvailable = LocalStorage.available()
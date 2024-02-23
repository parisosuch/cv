import { redis } from "./redis"
import { getDate } from "./utils"

type AnalyticsArgs = {
    retention?: number
}

type TrackOptions = {
    persist?: boolean
}

export class Analytics {
    private retention: number = 60 * 60 * 24 * 7 * 4 // month in seconds

    constructor(opts?: AnalyticsArgs) {
        if (opts?.retention) {
            this.retention = opts.retention
        }
    }

    // track an event
    async track(namespace: string, event: object = {}, opts?: TrackOptions) {
        // create table key
        let key = `analytics::${namespace}`

        // if there is no option to persist, expire the data and use a date
        if (!opts?.persist) {
            key += `::${getDate()}`
        }

        // db call to persist the event
        await redis.hincrby(key, JSON.stringify(event), 1)

        // if there is no persistence, expire the key after the retention period
        if (!opts?.persist) {
            await redis.expire(key, this.retention)
        }
    }
}

export const analytics = new Analytics();
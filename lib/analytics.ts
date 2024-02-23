import { redis } from "./redis"

type AnalyticsArgs = {
    retention?: number
}

export class Analytics {
    private retention: number = 60 * 60 * 24 * 7 // week in seconds

    constructor(opts?: AnalyticsArgs) {
        if (opts?.retention) {
            this.retention = opts.retention
        }
    }

    // track an event
    async track(namespace: string, event: object = {}) {
        // create table key
        const key = `analytics::${namespace}`

        // db call to persist the event
        await redis.hincrby(key, JSON.stringify(event), 1);
    }
}

export const analytics = new Analytics();
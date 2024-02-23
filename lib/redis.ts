import { Redis } from '@upstash/redis'

export const redis = new Redis({
    url: 'https://usw1-unique-martin-33947.upstash.io',
    token: process.env.REDIS_KEY!,
})
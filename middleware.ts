import { NextRequest, NextResponse } from "next/server";
import { analytics } from "@/lib/analytics";

export default function middlware(req: NextRequest) {
    console.log(process.env.REDIS_KEY)
    // if user is on the homepage, count as visitor
    if (req.nextUrl.pathname === "/") {
        try {
            analytics.track('pageview', {
                page: '/',
                country: req.geo?.country,
            })
        } catch (err) {
            // fail silently during attempt
            console.error(err)
        }
    }
    return NextResponse.next()
}

// determine what paths middleware runs on
export const matcher = {
    matcher: ['/'],
}
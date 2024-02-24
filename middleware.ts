import { NextRequest, NextResponse } from "next/server";
import { analytics } from "@/lib/analytics";

export default async function middlware(req: NextRequest) {
    // if user is on the homepage, count as visitor
    if (req.nextUrl.pathname === "/") {
        console.log("Hit homepage.")
        try {
            analytics.track('pageview', {
                page: '/',
                country: req.geo?.country,
            }).then(() => {
                console.log("Successful track.")
            });

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
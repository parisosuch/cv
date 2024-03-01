import { NextRequest, NextResponse } from "next/server";
import { analytics } from "@/lib/analytics";

export default async function middlware(req: NextRequest) {
  // check if in dev mode, if so just pass tracking
  if (process.env.NODE_ENV === "development") {
    return NextResponse.next();
  }
  // if user is on the homepage, count as visitor
  if (req.nextUrl.pathname === "/") {
    try {
      await analytics
        .track("pageview", {
          page: "/",
          country: req.geo?.country,
        })
        .then(() => {
          console.log("Successful track.");
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (err) {
      // fail silently during attempt
      console.error(err);
    }
  }
  return NextResponse.next();
}

// determine what paths middleware runs on
export const config = {
  matcher: "/",
};

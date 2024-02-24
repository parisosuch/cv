import { parse } from "date-fns";
import { redis } from "@/lib/redis";
import { getDate } from "@/lib/utils";

type AnalyticsArgs = {
  retention?: number;
};

type TrackOptions = {
  persist?: boolean;
};

export class Analytics {
  private retention: number = 60 * 60 * 24 * 7 * 4; // month in seconds

  constructor(opts?: AnalyticsArgs) {
    if (opts?.retention) {
      this.retention = opts.retention;
    }
  }

  // track an event
  async track(namespace: string, event: object = {}, opts?: TrackOptions) {
    // create table key
    let key = `analytics::${namespace}`;

    // if there is no option to persist, expire the data and use a date
    if (!opts?.persist) {
      key += `::${getDate()}`;
    }

    // db call to persist the event
    await redis.hincrby(key, JSON.stringify(event), 1);

    // if there is no persistence, expire the key after the retention period
    if (!opts?.persist) {
      await redis.expire(key, this.retention);
    }
  }

  async retrieveDays(namespace: string, daysBack: number) {
    type AnalyticsPromise = ReturnType<typeof analytics.retrieve>;
    const promises: AnalyticsPromise[] = [];

    // push all retreive promises to promises array
    for (let i = 0; i < daysBack; i++) {
      const formattedDate = getDate(i);
      const promise = analytics.retrieve(namespace, formattedDate);
      promises.push(promise);
    }

    // execute all calls

    const fetched = await Promise.all(promises);

    const data = fetched.sort((a, b) => {
      if (
        parse(a.date, "dd/MM/yyyy", new Date()) >
        parse(b.date, "dd/MM/yyyy", new Date())
      ) {
        return 1;
      } else {
        return -1;
      }
    });

    return data;
  }

  // retrieve data by days backs
  async retrieve(namespace: string, date: string) {
    const res = await redis.hgetall<Record<string, string>>(
      `analytics::${namespace}::${date}`
    );

    return {
      date,
      // return list of events that are key value pair with the value being a number
      events: Object.entries(res ?? []).map(([key, value]) => ({
        [key]: Number(value),
      })),
    };
  }
}

export const analytics = new Analytics();

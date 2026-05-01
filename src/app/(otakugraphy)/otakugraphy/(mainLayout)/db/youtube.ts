"use server";
import { youtube } from "@googleapis/youtube";
import { unstable_cache } from "next/cache";

export async function getYoutubeViews(id: string) {
  const ytapi = youtube("v3");
  const res = await ytapi.videos.list({
    key: process.env.GOOGLE_APIKEY,
    id: [id],
    part: ["statistics"],
  });

  const data = res.data;
  if (res.data) {
    const vstat = data.items;
    if (vstat) {
      const target = vstat[0]?.statistics?.viewCount;
      // vstat[0].snippet?.publishedAt; Get date
      if (target) {
        return {
          status: "Success",
          vwc: parseInt(target),
        };
      } else {
        return {
          status: "Failed to get views..",
          vwc: 0,
        };
      }
    }

    console.log(vstat);
  }
  return {
    status: "Failed to get views...",
    vwc: 0,
  };
}

export async function getCachedYTViews(id: string) {
  return unstable_cache(
    async () => await getYoutubeViews(id),
    ["ytviews", id],
    {
      revalidate: 3600,
    },
  )();
}
export async function getMultipleYTViews(id: string[]) {
  const views = [];
  for (let i = 0; i < id.length; i++) {
    views.push(await getCachedYTViews(id[i]));
  }
  return views;
}

export async function getYoutubeDate(id: string) {
  const ytapi = youtube("v3");
  const res = await ytapi.videos.list({
    key: process.env.GOOGLE_APIKEY,
    id: [id],
    part: ["snippet"],
  });

  const data = res.data;
  if (res.data) {
    const vstat = data.items;
    if (vstat) {
      // const target = vstat[0].statistics?.viewCount;
      const date = vstat[0]?.snippet?.publishedAt;
      return {
        success: true,
        date: date,
      };
    }
  }

  return {
    success: false,
  };
}
export async function getCachedYoutubeDate(id: string) {
  return unstable_cache(async () => await getYoutubeDate(id), ["ytdate", id], {
    revalidate: 86000,
  })();
}

export async function groupByYoutubeDate(creators: any[]) {
  const datedCreators = [];
  for (let i = 0; i < creators.length; i++) {
    const currCreator = creators[i];
    // If the current creator has a video link then look up the youtube
    if (currCreator.Video) {
      const youtubeDate = await getCachedYoutubeDate(currCreator.Video);
      if (youtubeDate.success && youtubeDate.date) {
        currCreator.date = new Date(youtubeDate.date);
      }
    }
    datedCreators.push(currCreator);
  }
  // Sort by date
  datedCreators.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return datedCreators;
}

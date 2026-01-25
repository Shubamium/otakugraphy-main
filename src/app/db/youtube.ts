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
      const target = vstat[0].statistics?.viewCount;
      // vstat[0].snippet?.publishedAt; Get date
      return {
        status: "Success",
        vwc: target,
      };
    }
    console.log(vstat);
  }

  return {
    status: "Failed to get views...",
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

import React from "react";
import GalleryDisplayer from "../components/galleryDisplayer/GalleryDisplayer";
import { fetchData } from "../db/sanity";
import { redirect } from "next/navigation";

type Props = {
  params: Promise<{
    galleryid: string;
  }>;
};

export default async function Page({ params }: Props) {
  const gid = (await params).galleryid;
  const gd = await fetchData<any>(`
		*[_type == 'gallery' && s.current == '${gid}' ]{
			t,
			s,
			pages[]{
				...,
				ml[] -> {
					...,
					'video': video.asset -> url
				}
			}
	}[0]
	`);

  if (!gd) {
    redirect("/");
  }
  console.log(gd);
  return <GalleryDisplayer title={gd.t} pages={gd.pages}></GalleryDisplayer>;
}

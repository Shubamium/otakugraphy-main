import React from "react";

import { redirect } from "next/navigation";
import { fetchData } from "@/app/db/sanity";
import GalleryDisplayer from "@/app/components/galleryDisplayer/GalleryDisplayer";

type Props = {
  params: Promise<{
    galleryid: string;
  }>;
};

export default async function Page({ params }: Props) {
  const gid = (await params).galleryid;
  const gd = await fetchData<any>(`
		*[_type == 'gallery' && s.current == '${gid}' ]{
			...,
			t,
			s,
			pages[]{
				...,
				ml[] -> {
					...,
					'video': video.asset -> url,
					'metadata': image.asset -> metadata
				}
			},
			highlight_list,
	}[0]
	`);

  if (!gd) {
    redirect("/");
  }
  console.log(gd);
  return (
    <GalleryDisplayer
      title={gd.t}
      description={gd.description}
      side_images={gd.side_images}
      highlights={gd.highlight_list}
      pages={gd.pages}
    ></GalleryDisplayer>
  );
}

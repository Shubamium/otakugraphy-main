import EXIF from "exif-js";

export async function getExifFromUrl(imageUrl: string) {
  try {
    // Fetch the image as a Blob to avoid CORS issues
    const response = await fetch(imageUrl);
    const blob = await response.blob();

    // Create a local object URL
    const img = new Image();
    img.src = URL.createObjectURL(blob);

    img.onload = function () {
      EXIF.getData(img as any, function (this: any) {
        const allMetadata = EXIF.getAllTags(this);
        // console.log(allMetadata);
      });

      // Cleanup object URL after loading
      URL.revokeObjectURL(img.src);
    };
  } catch (error) {
    console.error("Error loading image:", error);
  }
}

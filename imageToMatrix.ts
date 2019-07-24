const Jimp = require("jimp");

export const imageToMatrix = async (image: string) => {
  const imageValuesMatix: number[][] = [];
  await Jimp.read(image)
    .then((workingImage: any) => {
      for (let i = 0; i < workingImage.bitmap.height; i++) {
        imageValuesMatix.push([]);
      }
      workingImage
        .greyscale()
        .scan(
          0,
          0,
          workingImage.bitmap.width,
          workingImage.bitmap.height,
          (x: number, y: number, idx: number) => {
            imageValuesMatix[y].push(workingImage.bitmap.data[idx]);
          }
        );
    })
    .catch((err: Error) => console.log(err));
  return imageValuesMatix;
};

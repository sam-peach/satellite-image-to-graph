const fs = require("fs");
const path = require("path");
import { imageToMatrix } from "./imageToMatrix";
const { createCanvas } = require("canvas");

const canvas = createCanvas(100, 100);
const ctx = canvas.getContext("2d");
ctx.strokeRect(10, 10, 80, 80);

const out = fs.createWriteStream(path.join(__dirname + ".." + "test_new.jpeg"));
const stream = canvas.createJPEGStream({
  quality: 0.95,
  chromaSubsampling: false
});
stream.pipe(out);
out.on("finish", () => console.log("The JPEG file was created."));

const myFunc = async () => {
  const val = await imageToMatrix("yellowStone.png");
  console.log(val);
};

// console.log(myFunc()); 

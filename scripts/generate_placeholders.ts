// BUN 

import sharp from "sharp";
import fs from "fs";
import { dirname as getDirName } from "path";

async function generateLowerQualityImage(inputBuffer: Buffer | string) {
    const smallerImage = await sharp(inputBuffer)
        .avif({ quality: 30 })
        .toBuffer();

    return smallerImage;
}

const teamPhotosDir = "./public/team_photos/";
const placeholderDir = "./public/team_photos_placeholders/";

function writeFile(path: string, contents: string | NodeJS.ArrayBufferView) {
    fs.mkdir( getDirName(path), { recursive: true}, function (err) {
      if (err) return;
      fs.writeFileSync(path, contents);
    });
}

const files = fs.readdirSync(teamPhotosDir, { recursive: true })
                .filter(file => typeof file === "string" && file.toLowerCase().endsWith(".jpg"));

for await (const file of files) {
    const buffer = await generateLowerQualityImage(`${teamPhotosDir}${file}`);
    writeFile(`${placeholderDir}${file}`, new Uint8Array(buffer));
}
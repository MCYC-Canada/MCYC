import { readdir, rm, rename } from "fs/promises";
import { join, extname } from "path";
import sharp from "sharp";

async function cropHeadshots(dir: string) {
    const entries = await readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
        const fullPath = join(dir, entry.name);
        
        if (entry.isDirectory()) {
            await cropHeadshots(fullPath); 
            continue;
        }
        
        const originalExt = extname(entry.name);
        const lowerExt = originalExt.toLowerCase();

        if (![".jpg", ".jpeg", ".png", ".gif", ".tiff", ".bmp", ".webp"].includes(lowerExt)) continue;
                
        try {
            await sharp(fullPath)
                .resize({ height: 500, width: 500 })
                .toFile(fullPath);

            console.log(`Resized: ${fullPath}`);
        } catch (err) {
            console.error(`Failed to convert: ${fullPath}`, err);
        }
    }
}


const headShotsDir = "./public/team_photos"
cropHeadshots(headShotsDir).then(() => console.log("Cropping complete."));
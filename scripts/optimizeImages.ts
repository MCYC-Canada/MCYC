import { readdir, rm, rename } from "fs/promises";
import { join, extname } from "path";
import sharp from "sharp";

async function convertToWebP(dir: string) {
    const entries = await readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
        const fullPath = join(dir, entry.name);
        
        if (entry.isDirectory()) {
            await convertToWebP(fullPath); 
            continue;
        }
        
        const originalExt = extname(entry.name);
        const lowerExt = originalExt.toLowerCase();

        if (![".jpg", ".jpeg", ".png", ".gif", ".tiff", ".bmp"].includes(lowerExt))
            continue;
        
        // Build the output path by slicing off the original extension
        const outputPath = fullPath.slice(0, -originalExt.length) + ".webp";
        
        try {
            await sharp(fullPath).toFormat("webp").toFile(outputPath);
            await rm(fullPath);
            console.log(`Converted: ${fullPath} -> ${outputPath}`);
        } catch (err) {
            console.error(`Failed to convert: ${fullPath}`, err);
        }
    }
}

const targetDir = process.argv[2];
if (!targetDir) {
    console.error("Usage: bun run script.ts <directory>");
    process.exit(1);
}

convertToWebP(targetDir).then(() => console.log("Conversion complete."));

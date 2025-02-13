import { readdir } from "fs/promises";
import { join, extname } from "path";

async function cropHeadshots(dir: string, isTeam = false): Promise<string> {
  let jsxOutput = "";
  const entries = await readdir(dir, { withFileTypes: true });

  if (isTeam) {
    // In a team folder, the folder name is used as the team name.
    const teamName = dir.split(/[\\/]/).pop() ?? "";
    let profiles = "";

    for (const entry of entries) {
      if (!entry.isFile()) continue;
      const fullPath = join(dir, entry.name);
      const originalExt = extname(entry.name);
      const lowerExt = originalExt.toLowerCase();
      if (![".jpg", ".jpeg", ".png", ".gif", ".tiff", ".bmp", ".webp"].includes(lowerExt)) {
        continue;
      }
      
      try {
        // Adjust "Name" and "Position" as needed.
        profiles += `          <Profile src="${teamName}/${entry.name}" name="Name" position="Position" />\n`;
      } catch (err) {
        console.error(`Failed to process: ${fullPath}`, err);
      }
    }

    if (profiles) {
      jsxOutput += `<div className="bg-gray-white m-0">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center pt-10 pb-5 text-line-brown">${teamName} Team</h2>

        {/* Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5 place-items-center">
${profiles.trimEnd()}
        </div>
      </div>\n`;
    }
  } else {
    // In the root directory, assume each subdirectory is a team folder.
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const fullPath = join(dir, entry.name);
        jsxOutput += await cropHeadshots(fullPath, true);
      }
    }
  }
  return jsxOutput;
}

const headShotsDir = "./public/team_photos";
cropHeadshots(headShotsDir).then((jsx) => console.log(jsx));

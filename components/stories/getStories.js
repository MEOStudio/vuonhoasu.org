import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getStoriesRaw = (folder) => {
    let files = [];
    let tempFolder = [folder];

    // get all files in folder and subfolders
    // in case there're side stories and stuff
    const getFiles = (teFolder) => {
        const tFolder = teFolder.join('\\');
        fs.readdirSync(tFolder).forEach((file) => {
            const tAbs = [...teFolder, file];
            const abs = tAbs.join('\\');
            if (fs.statSync(abs).isDirectory()) return getFiles(tAbs);
            else return files.push(tAbs);
        })
    }

    getFiles(tempFolder);

    // Finalize by remove the root folder from the path.
    const finalFiles = files.map((filePath) => {
        filePath.shift();
        return filePath;
      })
    return finalFiles;
}

// Get the metadata of the stories (title, date, etc.) from the files for preview.
export const getStoriesMetadata = (folder) => {
  const files = getPostsRaw(folder);

  // Get gray-matter data from each file.
  const posts = files.map((fileName) => {
    const filePath = path.join(folder, fileName.join('\\'));
    const fileContents = fs.readFileSync(filePath, "utf8");
    if (fileName[fileName.length - 1] == "index.md") fileName.pop();
    const fileString = fileName.join('\\');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileString.replace(".md", ""),
    };
  });

  return posts;
}

// Get the slug of the stories from the files for preview.
export const getStoriesSlugs = (folder) => {
  const files = getStoriesRaw(folder);

  // Remove .md from the end of the file name.
  const slugs = files.map((fileName) => {
    if (fileName[fileName.length - 1] == "index.md") fileName.pop();
    else fileName[fileName.length - 1] = fileName[fileName.length - 1].replace(".md", "");
    return fileName;
  });
  return slugs;
}
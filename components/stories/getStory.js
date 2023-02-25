import fs from "fs";
import matter from "gray-matter";

// Btw, there's a choice to get all in one but, well, I think seperating them is better.

export const getStoryContent = (slug) => {
    const folder = 'stories';
    const path = fs.existsSync(`${folder}/${slug}.md`) ? `${folder}/${slug}.md` : `${folder}/${slug}/index.md`;
    const fileContent = fs.readFileSync(path, 'utf-8');
    
    const { data, content } = matter(fileContent);
    return content;
}

export const getStoryMetadata = (slug) => {
    const folder = 'stories';
    const path = fs.existsSync(`${folder}/${slug}.md`) ? `${folder}/${slug}.md` : `${folder}/${slug}/index.md`;
    const fileContent = fs.readFileSync(path, 'utf-8');

    const {data, content} = matter(fileContent);

    return data;
}
import type { PageLoad } from "./$types";

interface Md {
  html: string;
  attributes: Record<string, unknown>;
}
async function getBulkMd(filePaths: Record<string, () => Promise<unknown>>) {
  // const filePaths = import.meta.glob(filePath);
  const files: Md[] = [];
  for (const filePath in filePaths) {
    const file = await filePaths[filePath]();
    files.push(file as Md);
  }

  return files;
}

export const prerender = true

export const load: PageLoad = async () => {
  const projects = await getBulkMd(import.meta.glob('../md/projects/*.md'));
  const experience = await getBulkMd(import.meta.glob('../md/experience/*.md'));
  experience.reverse()
  return {
    projects,
    experience
  }
}

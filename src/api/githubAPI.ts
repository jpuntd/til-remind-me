import axios from 'axios';

export interface RepositoryContent {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  _links: RepositoryLinks;
}

export interface Til extends RepositoryContent {
  title: string;
  tags: string[];
  markdownContent: string;
  htmlContent: string;
  revisit: Date | null;
}

export interface RepositoryLinks {
  self: string;
  git: string;
  html: string;
}

export async function getRepositoryContent(
  org: string,
  repo: string,
  directory?: string
) {
  const url = `https://api.github.com/repos/${org}/${repo}/contents/${directory}`;

  try {
    const { data } = await axios.get<RepositoryContent[]>(url);
    return data as RepositoryContent[];
  } catch (error) {
    throw new Error(error);
  }
}

export function convertRepositoryContentToTil(
  repositoryContent: RepositoryContent[]
): Til[] {
  return repositoryContent.map(fileObject => ({
    ...fileObject,
    title: fileObject.name.replace('.md', ''),
    tags: [fileObject.path.split('/')[0]],
    markdownContent: '',
    htmlContent: '',
    revisit: null
  }));
}

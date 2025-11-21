import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  forks_count: number;
}

export async function getPinnedRepos(username: string): Promise<GitHubRepo[]> {
  try {
    // Unfortunately, GitHub's REST API doesn't have a direct endpoint for pinned repos
    // So we'll fetch all repos and sort by stars, then take the top 6
    const { data: repos } = await octokit.rest.repos.listForUser({
      username,
      sort: "created",
      direction: "desc",
      per_page: 100,
    });

    // Filter out forks and sort by stars
    const ownRepos = repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0))
      

    // Fetch topics for each repo (topics require a separate API call)
    const reposWithTopics = await Promise.all(
      ownRepos.map(async (repo) => {
        try {
          const { data: topicsData } = await octokit.rest.repos.getAllTopics({
            owner: username,
            repo: repo.name,
          });

          return {
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            homepage: repo.homepage ?? null,
            topics: topicsData.names || [],
            language: repo.language ?? null,
            stargazers_count: repo.stargazers_count ?? 0,
            forks_count: repo.forks_count ?? 0,
          };
        } catch (error) {
          // If topics fetch fails, return repo without topics
          return {
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            homepage: repo.homepage ?? null,
            topics: [],
            language: repo.language ?? null,
            stargazers_count: repo.stargazers_count ?? 0,
            forks_count: repo.forks_count ?? 0,
          };
        }
      })
    );

    return reposWithTopics;
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}

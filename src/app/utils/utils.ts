export async function GithubApiService(githubUrl: string) {
    const accessToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

    const headers = {
        Authorization: `token ${accessToken}`,
    };

    // const res = await fetch(githubUrl, { headers });
    const res = await fetch(githubUrl);
    return res.json();
}
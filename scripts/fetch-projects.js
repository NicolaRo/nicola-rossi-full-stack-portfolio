import "dotenv/config";
import {writeFileSync} from "fs";

const GITHUB_USERNAME = "NicolaRo";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN

async function fetchPortfolioJson(repoName) {
    const response = await fetch (
        `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/contents/portfolio.json`,
        {
            headers:{
                Authorization: `Bearer ${GITHUB_TOKEN}`,
                Accept: "application/vnd.github+json",
            },
        }
    );

    const fileData = await response.json();
    const decoded = Buffer.from(fileData.content, "base64").toString("utf-8");
    return JSON.parse(decoded);
}

async function main() {

    const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
        {
            headers:{
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            Accept:"Application/vnd.github+json",
            },
        }
    );
    
    const data = await response.json();
    const portfolioRepos = data.filter((repo) => repo.topics.includes("portfolio"));

    const projects = await Promise.all(
        portfolioRepos.map(async (repo) => {
            const jsonData = await fetchPortfolioJson(repo.name);
            return {
                id: repo.name,
                bio: repo.description,
                repoUrl: repo.html_url,
                ...jsonData,
            };
        })
    );
    const fileContent = `export const projects = ${JSON.stringify(projects, null, 2)};\n`;
    writeFileSync("src/data/projectData.js", fileContent);
}
main();
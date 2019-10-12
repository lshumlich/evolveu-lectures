/*

    npm test github -- -t 'sort'

*/

import githubFunc from "./functions.js";
// import dataStuff from "../../../data/repositories.js";
import * as repoData from "./repositoriesTest.js";

const repositories = repoData.repositories;

global.fetch = require('node-fetch');

test('hours since function', () => {
    const now = new Date();
    const lessOneHour = new Date(now - (1000 * 3600 * 1));
    const lessOneDay = new Date(now - (1000 * 3600 * 24 * 1));
    const lessTwoDays = new Date(now - (1000 * 3600 * 24 * 2));

    expect(githubFunc.hoursSinceNow("2019-01-31T22:00:43Z"))
        .toBeGreaterThan(6000);
    expect(githubFunc.hoursSinceNow(now.toISOString()))
        .toEqual(0);
    expect(githubFunc.hoursSinceNow(lessOneHour.toISOString()))
        .toEqual(1);
    expect(githubFunc.hoursSinceNow(lessOneDay.toISOString()))
        .toEqual(24);
    expect(githubFunc.hoursSinceNow(lessTwoDays.toISOString()))
        .toEqual(48);
});

test('hours since function', () => {
    expect(githubFunc.lastChanged(data))
        .toEqual("2019-10-10T18:04:07Z");
});


test('get repository list', () => {
    // console.log(repositories);
    const repos = githubFunc.getRepositories(repositories);
    expect(repos[0].name)
        .toEqual("Larry Shumlich");
    expect(repos[2].repo)
        .toEqual("lshumlich/react-d3");
});

test('get repository data from github', (done) => {
    testGet(done);
    // console.log(data.name);
});

// This must be a standalone function to be async
async function testGet(done) {
    const data = await githubFunc.fetchRepositoryFromGithub("lshumlich/evolveu-lectures");
    expect(data.name)
        .toEqual("evolveu-lectures");
    done();
}

// this is just for testing so we don't need to hit all the repositories each test
test('assign random numbers', () => {
    const repos = githubFunc.getRepositories(repositories);
    githubFunc.randomTimes(repos);
    expect(repos[1].lastChanged).toBeGreaterThan(-1);
    // console.log(repos);
});

test('sort the repositories in last updated order', () => {
    const repos = githubFunc.getRepositories(repositories);
    githubFunc.randomTimes(repos);
    githubFunc.sortByTimes(repos);
    // console.log(repos);
    expect(repos[0].lastChanged).toBeGreaterThanOrEqual(repos[1].lastChanged);
    expect(repos[1].lastChanged).toBeGreaterThanOrEqual(repos[2].lastChanged);
});

test('create dom from repositories', () => {
    const repos = githubFunc.getRepositories(repositories);
    githubFunc.randomTimes(repos);
    githubFunc.sortByTimes(repos);
    const repoList = document.createElement("div");
    githubFunc.buildDom(repoList, repos);
    // console.log(repoList.textContent);
    // console.log(repoList.innerHTML);
});

// Simulates github api data for testing
const data =
{
    "id": 168603685,
    "node_id": "MDEwOlJlcG9zaXRvcnkxNjg2MDM2ODU=",
    "name": "evolveu-lectures",
    "full_name": "lshumlich/evolveu-lectures",
    "private": false,
    "owner": {
        "login": "lshumlich",
        "id": 15492114,
        "node_id": "MDQ6VXNlcjE1NDkyMTE0",
        "avatar_url": "https://avatars0.githubusercontent.com/u/15492114?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/lshumlich",
        "html_url": "https://github.com/lshumlich",
        "followers_url": "https://api.github.com/users/lshumlich/followers",
        "following_url": "https://api.github.com/users/lshumlich/following{/other_user}",
        "gists_url": "https://api.github.com/users/lshumlich/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/lshumlich/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/lshumlich/subscriptions",
        "organizations_url": "https://api.github.com/users/lshumlich/orgs",
        "repos_url": "https://api.github.com/users/lshumlich/repos",
        "events_url": "https://api.github.com/users/lshumlich/events{/privacy}",
        "received_events_url": "https://api.github.com/users/lshumlich/received_events",
        "type": "User",
        "site_admin": false
    },
    "html_url": "https://github.com/lshumlich/evolveu-lectures",
    "description": null,
    "fork": false,
    "url": "https://api.github.com/repos/lshumlich/evolveu-lectures",
    "forks_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/forks",
    "keys_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/teams",
    "hooks_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/hooks",
    "issue_events_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/issues/events{/number}",
    "events_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/events",
    "assignees_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/assignees{/user}",
    "branches_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/branches{/branch}",
    "tags_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/tags",
    "blobs_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/languages",
    "stargazers_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/stargazers",
    "contributors_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/contributors",
    "subscribers_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/subscribers",
    "subscription_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/subscription",
    "commits_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/contents/{+path}",
    "compare_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/merges",
    "archive_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/downloads",
    "issues_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/issues{/number}",
    "pulls_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/labels{/name}",
    "releases_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/releases{/id}",
    "deployments_url": "https://api.github.com/repos/lshumlich/evolveu-lectures/deployments",
    "created_at": "2019-01-31T22:00:43Z",
    "updated_at": "2019-10-10T18:04:09Z",
    "pushed_at": "2019-10-10T18:04:07Z",
    "git_url": "git://github.com/lshumlich/evolveu-lectures.git",
    "ssh_url": "git@github.com:lshumlich/evolveu-lectures.git",
    "clone_url": "https://github.com/lshumlich/evolveu-lectures.git",
    "svn_url": "https://github.com/lshumlich/evolveu-lectures",
    "homepage": null,
    "size": 2298,
    "stargazers_count": 1,
    "watchers_count": 1,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": null,
    "forks": 0,
    "open_issues": 0,
    "watchers": 1,
    "default_branch": "master",
    "network_count": 0,
    "subscribers_count": 2
}
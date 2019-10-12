
import githubFunc from "./functions.js";
import * as repoData from "./repositories.js";

const repositories = repoData.repositories;
const repos = githubFunc.getRepositories(repositories);
let sortColumn = "name";


// console.log("Hello world after import");

window.onload = () => {
    // document.body.appendChild(groupCard);
    startup();
};

window.onclick = (e) => {
    // console.log('you clicked', e.target);
    // console.log('you clicked', e.target.className);
    if (!e.target.className) {
        showRepo(e.target.textContent);
    } else if (e.target.className == 'repo') {
        showRepo(e.target.textContent);
    } else if (e.target.className == 'update') {
        console.log("you know what you have to do.");
        updateRepos();
    } else if (e.target.className == 'header') {
        sortRepos(e.target);
    } else {
        console.log("not sure how to deal with: ", e.target.className);
    };
}

function showRepo(txt) {
    const repo = "https://github.com/" + txt;
    // const src = "blob/master/src/javascript/daily.js"
    const src = idFile.value;
    console.log(idFile.value);
    console.log("Do Repo Stuff");
    console.log(repo);
    // window.open(repo, "_repo");
    window.open(repo + "/" + src, "_repo");
}

function updateRepos() {
    while (idRepoList.firstChild) {
        idRepoList.removeChild(idRepoList.firstChild);
    }
    githubFunc.buildDom(idRepoList, repos);
    // startup();
}

function sortRepos(node) {
    console.log("sortRepos:", node);

    console.log("sortRepos:", node.getAttribute("sortby"));

    // th.setAttribute("order","d");


    const sortBy = node.getAttribute("sortby");


    if (sortBy) {
        // if the same header is sorted twice we 
        // sort in decending order 
        // if the same header is sorted three times
        // sort in assending order again.
        let sortOrder;
        if (sortColumn == sortBy) {
             sortOrder = "d";
            sortColumn = "";
        } else {
            sortColumn = sortBy;
        }

        githubFunc.sort(repos, sortBy, sortOrder);
    }
    updateRepos();
}

function startup() {
    // const repos = githubFunc.getRepositories(repositories);
    githubFunc.randomTimes(repos);
    // githubFunc.sort(repos);
    // console.log(repos);
    // const repoList = document.createElement("div");
    githubFunc.buildDom(idRepoList, repos);
}
// NOTE... When creating this just copy and past the three columns from the spreadsheet

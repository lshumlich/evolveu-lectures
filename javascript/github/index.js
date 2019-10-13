/*

    One thing to fix is a scrolling table with fixed header. 
    This code does it.

    https://medium.com/@vembarrajan/html-css-tricks-scroll-able-table-body-tbody-d23182ae0fbc

*/
import githubFunc from "./functions.js";
import * as repoData from "./repositories.js";
// import * as repoData from "./repositoriesTest.js";

const repositories = repoData.repositories;
const repos = githubFunc.getRepositories(repositories);
let sortColumn = "name";


// console.log("Hello world after import");

window.onload = () => {
    // document.body.appendChild(groupCard);
    startup();
};

window.onclick = (e) => {
    if (!e.target.className) {
    } else if (e.target.className == 'repo') {
        showRepo(e.target.textContent);
    } else if (e.target.className == 'lastUpdated space') {
        // console.log("you know what you have to do.");
        updateRepositoryLastChanged();
    } else if (e.target.className == 'header') {
        sortRepos(e.target);
    } else if (e.target.className == 'name') {
        showPicture(e.target);
    } else if (e.target.className == 'modal') {
        closePicture(e.target);
    } else if (e.target.className == 'picture') {
        closePicture(e.target);
    } else if (e.target.className == 'modal-content') {
        closePicture(e.target);
    } else {
        console.log("not sure how to deal with: ", e.target.className);
    };
}
function showRepo(txt) {
    const repo = "https://github.com/" + txt;
    // const src = "blob/master/src/javascript/daily.js"
    const src = idFile.value;
    // console.log(idFile.value);
    // console.log("Do Repo Stuff");
    // console.log(repo);
    // window.open(repo, "_repo");
    window.open(repo + "/" + src, "_repo");
}

function updateRepos() {
    // while (idRepoList.firstChild) {
    //     idRepoList.removeChild(idRepoList.firstChild);
    // }
    removeChildren(idRepoList);
    githubFunc.buildDom(idRepoList, repos);
    // startup();
}

function removeChildren(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

function sortRepos(node) {

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

async function updateRepositoryLastChanged() {

    // console.log("----- index updateRepositoryLastChanged");
    
    await githubFunc.updateRepositoryLastChanged(repos);
    updateRepos();
    // console.log("----- index finished updateRepositoryLastChanged");
    
}

function startup() {
    // const repos = githubFunc.getRepositories(repositories);
    githubFunc.randomTimes(repos);
    // githubFunc.sort(repos);
    // console.log(repos);
    // const repoList = document.createElement("div");
    githubFunc.buildDom(idRepoList, repos);
}

function showPicture(node) {
    // console.log("Show the Picture");
    const picture = node.getAttribute("picture");
    var img = document.createElement("IMG");
    img.className="picture";
    img.src = "pictures/" + picture + ".jpg";
    removeChildren(pictureId);
    pictureId.appendChild(img);
    modelId.style.display = "block";
    // console.log("showPicture:", picture);
}

function closePicture(node) {
    modelId.style.display = "none";
}
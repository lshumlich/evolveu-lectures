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
let lastSelected;

window.onload = () => {
    startup();
};

window.onclick = (e) => {
    const className = e.target.className;


    // Add an indicator so you can tell what line you are on.
    if (className == 'name' ||
        className == 'repo' ) {
        if (lastSelected) {
            lastSelected.bgColor = "";
        }
        e.target.bgColor = "#8ed2be";
        lastSelected = e.target;
    }


    if (!e.target.className) {
    } else if (e.target.className == 'repo') {
        showRepo(e.target.textContent);
    } else if (e.target.className == 'lastUpdated space') {
        updateRepositoryLastChanged();
    } else if (e.target.className == 'header') {
        sortRepos(e.target);
    } else if (e.target.className == 'name') {
        showPicture(e.target);
    } else if (e.target.className == 'email') {
        showEmail(e.target);
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
    const src = idFile.value;
    window.open(repo + "/" + src, "_repo");
}

function updateRepos() {
    removeChildren(idRepoList);
    githubFunc.buildDom(idRepoList, repos);
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
    await githubFunc.updateRepositoryLastChanged(repos);
    updateRepos();
}

function startup() {
    // githubFunc.randomTimes(repos);
    githubFunc.buildDom(idRepoList, repos);
}

function showPicture(node) {
    const picture = node.getAttribute("picture");
    var img = document.createElement("IMG");
    img.className = "picture";
    img.src = "pictures/" + picture + ".jpg";
    removeChildren(pictureId);
    pictureId.appendChild(img);
    modelId.style.display = "block";
}

function closePicture(node) {
    modelId.style.display = "none";
}

function showEmail(node) {
    const email = node.textContent
    const subject = encodeURI("Feedback on your github repository");

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}&su=${subject}`, "_email");
}
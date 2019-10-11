
import githubFunc from "./functions.js";


console.log("Hello world after import");

window.onload = () => {
    // document.body.appendChild(groupCard);
    startup();
};


function startup() {
    const repos = githubFunc.getRepositories(repositories);
    githubFunc.randomTimes(repos);
    githubFunc.sortByTimes(repos);
    console.log(repos);
    // const repoList = document.createElement("div");
    githubFunc.buildDom(idRepoList, repos);
}
// NOTE... When creating this just copy and past the three columns from the spreadsheet
const repositories =
`
Adriana Chapellin-Silva	silva.adrianavc@gmail.com	https://github.com/asilva-cell/cohort3
Asif Mavany	mavany.asif@gmail.com	https://github.com/afernsmavany/cohort3
Brendan Stillwell	stillwellbrendan@gmail.com	https://github.com/Bstill8/cohort-3
`

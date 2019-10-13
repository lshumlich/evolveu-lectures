
// console.log('functions have been imported.')

const functions = {
    hoursSinceNow: (s) => {
        const date = new Date(s);
        const now = new Date();
        const diff = now - date;
        return Math.round(diff / (1000 * 3600));
    },

    niceDate: (s) => {
        return new Date(s).toString().substr(0,28);
    },
    lastChanged: (rep) => rep.pushed_at,

    getRepositories: (data) => {
        const repositories = []
        const lines = data.split('\n');
        for (const l of lines) {
            // console.log(l);
            if (l) {
                const fields = l.split('\t');
                const repo = fields[2].split('/');
                // console.log(repo);
                repositories.push({name:fields[0], email:fields[1], repo:repo[3] + '/' + repo[4], picture:fields[3]});
                // for (const f of fields) {
                //     console.log(f);
                // }
            }
        }
        // console.log(repositories);
        return repositories;
    },

    async fetchRepositoryFromGithub(repo) {
        //  https://api.github.com/repos/lshumlich/evolveu-lectures

        const url = "https://api.github.com/repos/" + repo
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw (error);
        }
    },

    // Useful fuction for playing
    randomTimes: (repos) => {
        repos.forEach((v) => {
            const hours = Math.floor(Math.random() * 100);
            v.elapsed = hours;
            const now = new Date();
            const lastChanged = new Date(now - (1000 * 3600 * hours));
            v.lastChanged = lastChanged.toISOString()
        });
    },

    sort: (repos, pSortBy, pOrder) => {
        const sortBy = pSortBy ? pSortBy : "elapsed";
        const decend = (pOrder == "d") ? true : false;

        repos.sort((a , b) => {
            if (b[sortBy] == a[sortBy]) return 0;
            if (b[sortBy] > a[sortBy]) return decend ? 1 : -1;
            return decend ? -1 : 1;
        })

    },

    buildDom(dom, repos) {
        const table = document.createElement('table');
        dom.appendChild(table);
        table.className="repoList";
        table.id="repoList";

        const row = document.createElement('tr');
        table.appendChild(row);

        let th;
        th = document.createElement('th');
        row.appendChild(th);
        th.appendChild(document.createTextNode("Name"));
        th.className="header";
        th.setAttribute("sortby","name");

        th = document.createElement('th');
        row.appendChild(th);
        th.appendChild(document.createTextNode("email"));
        th.className="header";
        th.setAttribute("sortby","email");

        th = document.createElement('th');
        row.appendChild(th);
        th.appendChild(document.createTextNode("Repo"));
        th.className="header";
        th.setAttribute("sortby","repo");

        th = document.createElement('th');
        row.appendChild(th);
        th.appendChild(document.createTextNode("Hours"));
        th.className="header";
        th.setAttribute("sortby","elapsed");


        th = document.createElement('th');
        row.appendChild(th);
        th.appendChild(document.createTextNode("Date"));
        th.className="header";
        th.setAttribute("sortby","lastChanged");


        repos.forEach( v => {

            const row = document.createElement('tr');
            table.appendChild(row);

            let td;
            td = document.createElement('td');
            row.appendChild(td);
            td.appendChild(document.createTextNode(v.name));
            td.className="name";
            td.setAttribute("picture",v.picture);

            td = document.createElement('td');
            row.appendChild(td);
            td.appendChild(document.createTextNode(v.email));
            td.className="email";

            td = document.createElement('td');
            row.appendChild(td);
            td.appendChild(document.createTextNode(v.repo));
            td.className="repo";

            td = document.createElement('td');
            row.appendChild(td);
            td.appendChild(document.createTextNode(v.elapsed));
            td.className="elapsed";

            td = document.createElement('td');
            row.appendChild(td);
            td.appendChild(document.createTextNode(functions.niceDate(v.lastChanged)));
            td.className="lastChanged";
        });
    },

    updateRepositoryLastChanged: async (repos) => {
        console.log("functions updateRepositoryLastChanged");
        
        repos.forEach(async (r) =>  {
            const data = await functions.fetchRepositoryFromGithub(r.repo);
            r.lastChanged = functions.lastChanged(data);
            r.elapsed = functions.hoursSinceNow(r.lastChanged);
            console.log(r.repo, r.lastChanged, r.elapsed);
        });

        console.log(repos);
    },
}

export default functions;
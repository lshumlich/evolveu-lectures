
console.log('functions have been imported.')

const functions = {
    hoursSinceNow: (s) => {
        const date = new Date(s);
        const now = new Date();
        const diff = now - date;
        return Math.round(diff / (1000 * 3600));
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
                repositories.push({name:fields[0], email:fields[1], repo:repo[3] + '/' + repo[4]})
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

    randomTimes: (repos) => {
        repos.forEach((v) => v.lastChanged = Math.floor(Math.random() * 100) )
    },

    sortByTimes: (repos) => {
        repos.sort((a , b) => b.lastChanged - a.lastChanged);
    },

    buildDom(dom, repos) {
        const table = document.createElement('table');
        dom.appendChild(table);
        repos.forEach( v => {

            const row = document.createElement('tr');
            table.appendChild(row);

            let td;
            td = document.createElement('td');
            row.appendChild(td);
            td.appendChild(document.createTextNode(v.name));

            td = document.createElement('td');
            row.appendChild(td);
            td.appendChild(document.createTextNode(v.email));

            td = document.createElement('td');
            row.appendChild(td);
            td.appendChild(document.createTextNode(v.repo));

            td = document.createElement('td');
            row.appendChild(td);
            td.appendChild(document.createTextNode(v.lastChanged));
        });
    }
}

export default functions;
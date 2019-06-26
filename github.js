class Github{
    constructor(){
        this.client_id = '98c063b66ac21e6d7b10';
        this.client_secret = 'f2c834cb994c062207a475dcab146e205e3805cd';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

        // getUsers is a prototype of Github class
    async getUsers(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}$client_secret=${this.client_secret}`);
        
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        };
    }
    
}
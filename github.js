class Github {
  constructor(){
    this.client_id='05bd9eb6321915842fad';
    this.client_secret='07a0fc5856b2414f35e928a413869e90f20c7b69';
    this.repos_count=5;
    this.repos_sort='created: asc';
  }

  async getUser(user){
    const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile=await profileResponse.json();
    const repos=await repoResponse.json();

    return{
      profile,
      repos
    }
  }
}
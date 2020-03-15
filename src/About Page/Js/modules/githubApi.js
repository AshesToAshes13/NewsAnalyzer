export class GithubApi {

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async fetchCommits() {
        const res = await fetch(this.baseUrl)
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(res.status)
    }
}
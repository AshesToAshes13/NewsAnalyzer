export class GithubApi {

    constructor(baseUrl) {
        this._baseUrl = baseUrl;
    }

    async fetchCommits() {
        const res = await fetch(this._baseUrl)
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(res.status)
    }
}
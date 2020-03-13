export class Api { 

    constructor(baseUrl, apiKey, todayDate, startDate, request) {
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
        this.todayDate = `to=${todayDate}&`;
        this.startDate =`from=${startDate}&`;
        this.request = `q=${request}&`;
    }

    async fetchNews() {
        const url = this.baseUrl + this.startDate + this.todayDate + this.request + this.apiKey;
        const res = await fetch(url);
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(res.status)
    }    
}
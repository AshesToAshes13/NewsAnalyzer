export class NewsApi { 

    constructor(baseUrl, apiKey, todayDate, startDate, request) {
        this._baseUrl = baseUrl;
        this._apiKey = apiKey;
        this._todayDate = `to=${todayDate}&`;
        this._startDate =`from=${startDate}&`;
        this._request = `q=${request}&`;
    }

    async fetchNews() {
        const _url = this._baseUrl + this._startDate + this._todayDate + this._request + this._apiKey;
        const res = await fetch(_url);
        if (res.ok) {
            
            return res.json()
        }
        return Promise.reject(res.status)
    }    
}
export class Api {
    constructor(baserUlr, todayDate, startDate , request, apiKey) {
        this.baserUlr = baserUlr;
        this.todayDate = `to=${todayDate}&`;
        this.startDate = `from=${startDate}&`;
        this.request = `q=${request}&`;
        this.apiKey = apiKey;
    }

    async fetchNews() {
        const url = this.baserUlr + this.startDate + this.todayDate + this.request + this.apiKey;
        const res = await fetch(url);
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res.status);
    }
}
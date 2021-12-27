import HttpClient from 'api/http-client'
import { TCompany } from 'types/api'

class ApiService {
    constructor() {
        this.httpClient = HttpClient('https://mocki.io/v1/')
    }

    private httpClient

    public fetchCompanies = async () =>
        await this.httpClient.get<TCompany[]>('32a9343c-9979-453c-93a2-5cfb96f11d0a')
}

export const apiService = new ApiService()
import HttpClient from 'api/http-client'
import { TCompanyResponse } from 'types/api'

class ApiService {
    constructor(host: string) {
        this.httpClient = HttpClient(host)
    }

    private httpClient

    public fetchCompanies = async () =>
        await this.httpClient.get<TCompanyResponse[]>('32a9343c-9979-453c-93a2-5cfb96f11d0a')
}

export const apiService = new ApiService('https://mocki.io/v1/')
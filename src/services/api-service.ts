import HttpClient from 'api/http-client'
import { TCompanyResponse } from 'types/api'

class ApiService {
    constructor(host: string) {
        this.httpClient = HttpClient(host)
    }

    private httpClient

    public fetchCompanies = async () =>
        await this.httpClient.get<TCompanyResponse[]>('319ccb1d-2777-4488-9b7a-7d34171d34bc')
}
        
export const apiService = new ApiService('https://mocki.io/v1/')
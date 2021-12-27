import React from 'react'
import { apiService } from 'services/api-service'
import { TCompany } from 'types/api'

const useApi = () => {
    const fetchCompanies = async () : Promise<TCompany[]> => {
        const result = await apiService.fetchCompanies()
        return result.data
    }

    return {
        fetchCompanies
    }
}

export default useApi
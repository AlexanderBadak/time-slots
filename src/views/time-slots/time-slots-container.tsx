import useApi from 'hooks/useApi'
import React, { useEffect, useState } from 'react'
import { TCompany } from 'types/ui'
import TimeSlotsView from './time-slots-view'

const TimeSlotsContainer = () => {
    const [companies, setCompanies] = useState<TCompany[]>([])

    const api = useApi()

    useEffect(() => {
        const fetchData = async () => {
            const companyData = await api.fetchCompanies()
            setCompanies(companyData)
        }
        fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <TimeSlotsView companies={companies} />
    )
}

export default TimeSlotsContainer
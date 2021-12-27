import dayjs from 'dayjs'
import React from 'react'
import { apiService } from 'services/api-service'
import { TCompanyResponse, TTimeSlotResponse } from 'types/api'
import { TCompany, TTimeSlot, TTimeSlotGroup } from 'types/ui'

const useApi = () => {
    const fetchCompanies = async () : Promise<TCompany[]> => {
        const result = await apiService.fetchCompanies()
        const companies = result.data.map(r => transformCompanyResponse(r))
        return companies
    }

    const transformCompanyResponse = (response: TCompanyResponse) : TCompany => ({
        id: response.id,
        name: response.name,
        type: response.type,
        timeSlotGroups: createTimeSlotGroups(response.time_slots)
    })

    const createTimeSlotGroups = (timeSlots: TTimeSlotResponse[]) : TTimeSlotGroup[] => {
        const transformedTimeSlots = timeSlots.map<TTimeSlot>(ts => {
            const startDate = dayjs(ts.start_time)
            const endDate = dayjs(ts.end_time)

            return {
                startDate,
                endDate,
                formattedStartDate: startDate.format('LT'),
                formattedEndDate: endDate.format('LT')
            }
        })

        transformedTimeSlots.sort((a, b) => b.endDate.isBefore(a.endDate) ? 1 : -1)

        const groups = transformedTimeSlots.reduce<TTimeSlotGroup[]>((acc, curr) => {
            const currentDay = curr.endDate.day()
            const isSameGroup = acc.length > 0 && acc[acc.length - 1].day === currentDay

            if (isSameGroup) {
                acc[acc.length - 1].timeSlots.push(curr)
            } else {
                acc.push({
                    name: curr.endDate.format('ddd'),
                    day: currentDay,
                    timeSlots: [curr]
                })
            }

            return acc
        }, [])

        return groups
    }

    return {
        fetchCompanies
    }
}

export default useApi
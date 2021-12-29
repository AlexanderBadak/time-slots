import { act, renderHook } from '@testing-library/react-hooks'
import { useApi } from './useApi'
import { apiService } from 'services/api-service'
import { TCompanyResponse, TTimeSlotResponse } from 'types/api'
import { TCompany } from 'types/ui'
import dayjs from 'dayjs'

jest.mock('services/api-service')

describe('useApi', () => {
    beforeEach(() => {
        jest.restoreAllMocks()
        jest.clearAllMocks()
        jest.resetAllMocks()
    })

    it('should fetch companies and transform the data', async () => {
        //Arrange
        const fakeTimeSlotA: TTimeSlotResponse = {
            start_time: '2018-07-12T09:00:00.000+02:00',
            end_time: '2018-07-12T10:30:00.000+02:00'
        }
        
        const fakeTimeSlotB: TTimeSlotResponse = {
            start_time: '2018-07-09T08:00:00.000+02:00',
            end_time: '2018-07-09T09:30:00.000+02:00'
        }

        const fakeTimeSlotC: TTimeSlotResponse = {
            start_time: '2018-07-10T10:00:00.000+02:00',
            end_time: '2018-07-10T11:30:00.000+02:00'
        }

        const fakeCompany: TCompanyResponse = {
            id: 0,
            name: 'Fake Company 1',
            type: 'fakeType1',
            time_slots: [fakeTimeSlotA, fakeTimeSlotB, fakeTimeSlotC]
        }

        apiService.fetchCompanies = jest.fn().mockReturnValue({data: [fakeCompany]})

        //Act
        const { result } = renderHook(() => useApi())

        await act(async () => {
            const companies = await result.current.fetchCompanies()

            //Assert
            const expectedCompanies: TCompany[] = [{
                id: fakeCompany.id,
                name: fakeCompany.name,
                type: fakeCompany.type,
                timeSlotGroups: [{
                    name: 'Monday',
                    day: 1,
                    timeSlots: [{
                        startDate: dayjs(fakeTimeSlotB.start_time),
                        endDate: dayjs(fakeTimeSlotB.end_time),
                        formattedStartDate: '8:00 AM',
                        formattedEndDate: '9:30 AM'
                    }]
                },
                {
                    name: 'Tuesday',
                    day: 2,
                    timeSlots: [{
                        startDate: dayjs(fakeTimeSlotC.start_time),
                        endDate: dayjs(fakeTimeSlotC.end_time),
                        formattedStartDate: '10:00 AM',
                        formattedEndDate: '11:30 AM'
                    }]
                },
                {
                    name: 'Thursday',
                    day: 4,
                    timeSlots: [{
                        startDate: dayjs(fakeTimeSlotA.start_time),
                        endDate: dayjs(fakeTimeSlotA.end_time),
                        formattedStartDate: '9:00 AM',
                        formattedEndDate: '10:30 AM'
                    }]
                }]
            }]

            expect.assertions(2)
            expect(companies).toStrictEqual(expectedCompanies)
            expect(apiService.fetchCompanies).toBeCalledTimes(1)
        })
    })
})
import { screen } from '@testing-library/react'
import dayjs from 'dayjs'
import React from 'react'
import { renderWithProviders } from 'setupTests'
import { TCompany, TTimeSlotGroup } from 'types/ui'
import TimeSlotsView from './time-slots-view'

describe('<TimeSlotsView />', () => {
    const fakeGroup: TTimeSlotGroup = {
        name: 'Monday',
        day: 0,
        timeSlots: [{
            startDate: dayjs('2018-07-09T08:00:00.000+02:00'),
            endDate: dayjs('2018-07-09T09:30:00.000+02:00'),
            formattedStartDate: '8:00 AM',
            formattedEndDate: '9:30 AM'
        }]
    }
    const fakeCompanies: TCompany[] = [{
        id: 0,
        name: 'Fake Company',
        type: 'fakeType',
        timeSlotGroups: [fakeGroup]
    }]

    const defaultProps = {
        companies: fakeCompanies
    }

    let props = {...defaultProps}

    beforeEach(() => {
        props = {...defaultProps}
    })

    it('should render and display the company name', () => {
        //Arrange

        //Act
        renderWithProviders(<TimeSlotsView {...props} />)
        const linkElement = screen.getByText('Company Time Slots')
        const companyName = screen.getByText('Fake Company')

        //Assert
        expect(linkElement).toBeVisible()
        expect(companyName).toBeVisible()
    })
})
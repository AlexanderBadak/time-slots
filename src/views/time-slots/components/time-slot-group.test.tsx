import { screen } from '@testing-library/react'
import dayjs from 'dayjs'
import React from 'react'
import { renderWithProviders } from 'setupTests'
import { TTimeSlotGroup } from 'types/ui'
import TimeSlotGroup from './time-slot-group'

describe('<TimeSlotGroup />', () => {
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
    const defaultProps = {
        companyId: 1,
        group: fakeGroup
    }

    let props = {...defaultProps}

    beforeEach(() => {
        props = {...defaultProps}
    })

    it('should render and show group name', () => {
        //Arrange

        //Act
        renderWithProviders(<TimeSlotGroup {...props} />)
        
        const groupNameElement = screen.getByText(fakeGroup.name)

        //Assert
        expect(groupNameElement).toBeVisible()
    })
})
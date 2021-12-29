import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import dayjs from 'dayjs'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from 'styles/theme'
import { TSelectedTimeSlot } from 'types/logic'
import TimeSlotsProvider from '../time-slots-provider'
import CompanySelectedTimeSlot from './company-selected-time-slot'

describe('<CompanySelectedTimeSlot />', () => {
    const defaultProps = {
        companyId: 1
    }

    let props = {...defaultProps}

    const fakeSelectedTimeSlot1: TSelectedTimeSlot = {
        companyId: props.companyId,
        timeSlot: {
            startDate: dayjs('2018-07-09T08:00:00.000+02:00'),
            endDate: dayjs('2018-07-09T09:30:00.000+02:00'),
            formattedStartDate: '8:00 AM',
            formattedEndDate: '9:30 AM'
        }
    }
    const fakeSelectedTimeSlot2: TSelectedTimeSlot = {
        ...fakeSelectedTimeSlot1,
        companyId: 2
    }

    beforeEach(() => {
        props = {...defaultProps}
    })

    it('should render, show group name, formatted time slot and button', () => {
        //Arrange
        const dayNameText = fakeSelectedTimeSlot1.timeSlot.startDate.format('ddd')
        const formattedMessage = `${fakeSelectedTimeSlot1.timeSlot.formattedStartDate} - ${fakeSelectedTimeSlot1.timeSlot.formattedEndDate}`

        //Act
        render(
            <ThemeProvider theme={defaultTheme}>
                <TimeSlotsProvider selectedTimeSlots={[fakeSelectedTimeSlot1]}>
                    <CompanySelectedTimeSlot {...props} />
                </TimeSlotsProvider>
            </ThemeProvider>
        )
        
        const dayNameElement = screen.getByText(dayNameText)
        const messageElement = screen.getByText(formattedMessage)
        const removeButton = screen.getByRole('button')

        //Assert
        expect(dayNameElement).toBeVisible()
        expect(messageElement).toBeVisible()
        expect(removeButton).toBeVisible()
        expect(removeButton).toBeEnabled()
    })

    it('should show no reservation', () => {
        //Arrange
        const noReservationText = 'No reservation'

        //Act
        render(
            <ThemeProvider theme={defaultTheme}>
                <TimeSlotsProvider selectedTimeSlots={[fakeSelectedTimeSlot2]}>
                    <CompanySelectedTimeSlot {...props} />
                </TimeSlotsProvider>
            </ThemeProvider>
        )
        
        const noReservationElement = screen.getByText(noReservationText)
        const removeButton = screen.queryByRole('button')

        //Assert
        expect(noReservationElement).toBeVisible()
        expect(removeButton).not.toBeInTheDocument()
    })

    it('should remove the selected time slot', async () => {
        //Arrange
        const formattedMessage = `${fakeSelectedTimeSlot1.timeSlot.formattedStartDate} - ${fakeSelectedTimeSlot1.timeSlot.formattedEndDate}`

        //Act
        render(
            <ThemeProvider theme={defaultTheme}>
                <TimeSlotsProvider selectedTimeSlots={[fakeSelectedTimeSlot1]}>
                    <CompanySelectedTimeSlot {...props} />
                </TimeSlotsProvider>
            </ThemeProvider>
        )
        
        screen.getByText(formattedMessage)
        const removeButton = screen.getByRole('button')
        userEvent.click(removeButton)

        //Assert
        await waitFor(async () => {
            expect(removeButton).not.toBeInTheDocument()
        })

        expect(screen.queryByText(formattedMessage)).not.toBeInTheDocument()
    })
})
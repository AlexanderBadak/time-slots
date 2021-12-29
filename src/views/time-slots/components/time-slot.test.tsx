import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import dayjs from 'dayjs'
import React from 'react'
import { renderWithProviders } from 'setupTests'
import { TTimeSlot } from 'types/ui'
import TimeSlot from './time-slot'

describe('<TimeSlot />', () => {
    const fakeTimeSlot: TTimeSlot = {
        startDate: dayjs('2018-07-09T08:00:00.000+02:00'),
        endDate: dayjs('2018-07-09T09:30:00.000+02:00'),
        formattedStartDate: '8:00 AM',
        formattedEndDate: '9:30 AM'
    }

    const defaultProps = {
        timeSlot: fakeTimeSlot,
        disabled: false,
        selected: false,
        onClick: jest.fn()
    }

    let props = {...defaultProps}

    beforeEach(() => {
        props = {...defaultProps}
    })

    it('should render without optional props', () => {
        //Arrange

        //Act
        renderWithProviders(<TimeSlot {...props} />)
        const timeSlotTextElement = screen.getByText(`${fakeTimeSlot.formattedStartDate} - ${fakeTimeSlot.formattedEndDate}`)
        const timeSlotButton = screen.getByRole('button')

        //Assert
        expect(timeSlotTextElement).toBeVisible()
        expect(timeSlotTextElement).toHaveStyle('border: .2rem solid transparent')
        expect(timeSlotButton).toBeEnabled()
    })

    it('should render with optional props', () => {
        //Arrange
        props.disabled = true
        props.selected = true

        //Act
        renderWithProviders(<TimeSlot {...props} />)
        const timeSlotTextElement = screen.getByText(`${fakeTimeSlot.formattedStartDate} - ${fakeTimeSlot.formattedEndDate}`)
        const timeSlotButton = screen.getByRole('button')

        //Assert
        expect(timeSlotTextElement).toBeVisible()
        expect(timeSlotTextElement).toHaveStyle('border: .2rem solid #e8b000')
        expect(timeSlotButton).toBeDisabled()
    })

    it('should call the onClick method', () => {
        //Arrange

        //Act
        renderWithProviders(<TimeSlot {...props} />)
        const timeSlotButton = screen.getByRole('button')
        userEvent.click(timeSlotButton)

        //Assert
        expect(props.onClick).toBeCalledTimes(1)
    })
})
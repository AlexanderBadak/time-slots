import { screen } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { renderWithProviders } from 'setupTests'
import TimeSlotsContainer from './time-slots-container'

jest.mock('hooks/useApi', () => ({
    useApi: () => ({
        fetchCompanies: jest.fn(() => [])
    })
}))

describe('<TimeSlotsContainer />', () => {
    it('should render and fetch data', async () => {
        //Arrange
        
        //Act
        await act(async () => {
            renderWithProviders(<TimeSlotsContainer />)
        })

        const linkElement = screen.getByText('Company Time Slots')
    
        //Assert
        expect(linkElement).toBeVisible()
    })
})
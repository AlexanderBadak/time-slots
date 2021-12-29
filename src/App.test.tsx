import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
    it('should render the headline', () => {
        //Arrange
    
        //Act
        render(<App />)
        const linkElement = screen.getByText('Company Time Slots')
    
        //Assert
        expect(linkElement).toBeVisible()
    })
})
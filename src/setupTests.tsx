import '@testing-library/jest-dom'
import React from 'react'
import { render } from '@testing-library/react'
import { defaultTheme } from 'styles/theme'
import { ThemeProvider } from 'styled-components'
import TimeSlotsProvider from 'views/time-slots/time-slots-provider'

export const renderWithProviders = (children: JSX.Element) => {
    const renderResult = render(
        <ThemeProvider theme={defaultTheme}>
            <TimeSlotsProvider selectedTimeSlots={[]}>
                {children}
            </TimeSlotsProvider>
        </ThemeProvider>
    )
    return renderResult
}
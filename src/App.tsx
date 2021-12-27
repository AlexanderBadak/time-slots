import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from 'styles/theme'
import TimeSlotsContainer from 'views/time-slots/time-slots-container'

const App = () => (
    <ThemeProvider theme={defaultTheme}>
        <TimeSlotsContainer />
    </ThemeProvider>
)

export default App
/// <reference types="react-scripts" />

import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string
            secondary: string
            white: string
            grey: string
            black: string
        }
        borderRadius: {
            small: string
            default: string
        }
    }
}

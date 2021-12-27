/// <reference types="react-scripts" />

import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string
        }
        borderRadius: {
            small: string
            default: string
        }
    }
}

import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const Container = styled.svg`
    width: 2em;
    height: 2em;
    stroke: black;
    stroke-width: 1.5;
    fill: none;
`

const Icon = (props: PropsWithChildren<Record<never, never>>) => (
    <Container viewBox='0 0 24 24'>
        {props.children}
    </Container>)

export default Icon
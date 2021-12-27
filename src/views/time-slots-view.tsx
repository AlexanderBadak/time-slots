import React from 'react'
import styled from 'styled-components'
import { TCompany } from 'types/api'

const ViewContainer = styled.div`
    
`
const Headline = styled.h1`

`

type Props = {
    companies: TCompany[]
}

const TimeSlotsView = (props: Props) => {
    const { companies } = props

    return (
        <ViewContainer>
            <Headline>{'Time Slots'}</Headline>
            {
                companies.map(c => c.name)
            }
        </ViewContainer>
    )
}

export default TimeSlotsView
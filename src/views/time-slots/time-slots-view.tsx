import React from 'react'
import styled from 'styled-components'
import { TCompany } from 'types/ui'
import CompanyTimeSlots from './components/company-time-slots'

const ViewContainer = styled.div`
    
`
const Headline = styled.h1`
    padding-left: 2rem;
    color: ${p => p.theme.colors.primary};
`
const CompanyListContainer = styled.div`
    display: flex;
    column-gap: 5rem;
    background-color: #bfbfbf26;
    padding: 2rem;
`

type Props = {
    companies: TCompany[]
}

const TimeSlotsView = (props: Props) => {
    const { companies } = props

    return (
        <ViewContainer>
            <Headline>{'Company Time Slots'}</Headline>
            <CompanyListContainer>
                {
                    companies.map(c => <CompanyTimeSlots key={`company-${c.id}`} company={c} />)
                }
            </CompanyListContainer>

        </ViewContainer>
    )
}

export default TimeSlotsView
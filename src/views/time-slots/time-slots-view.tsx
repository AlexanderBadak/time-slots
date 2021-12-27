import React from 'react'
import styled from 'styled-components'
import { TCompany } from 'types/api'
import CompanyTimeSlots from './components/company-time-slots'

const ViewContainer = styled.div`
    
`
const Headline = styled.h1`

`
const CompanyListContainer = styled.div`
    display: flex;
    column-gap: 5rem;
    background-color: rgba(0,0,0,.15);
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
                    companies.map(c => <CompanyTimeSlots key={c.id} company={c} />)
                }
            </CompanyListContainer>

        </ViewContainer>
    )
}

export default TimeSlotsView
import React from 'react'
import styled from 'styled-components'
import { TCompany } from 'types/api'
import TimeSlot from './time-slot'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(0,0,0,.25);
    padding: 2rem;
`

const SelectedTimeSlot = styled.div`
    padding: 2rem;
    background-color: rgba(0,0,0,.35);
`

type Props = {
    company: TCompany
}

const CompanyTimeSlots = (props: Props) => {
    const { company } = props

    return (
        <Container>
            {company.name}
            <SelectedTimeSlot>{'selected timeslot'}</SelectedTimeSlot>
            {
                company.time_slots.map((ts, i) =>
                    <TimeSlot key={`${company.id}-${i}`} timeSlot={ts} />)
            }
        </Container>
    )
}

export default CompanyTimeSlots
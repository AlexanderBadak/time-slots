import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { TCompany } from 'types/ui'
import TimeSlotGroup from './time-slot-group'

dayjs.extend(localizedFormat)

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(0,0,0,.20);
    padding: 2rem;
`

const SelectedTimeSlot = styled.div`
    padding: 2rem;
    background-color: rgba(0,0,0,.25);
`

const Scrollable = styled.div`
    overflow: auto;
    height: 70vh;
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
            <Scrollable>
                {
                    company.timeSlotGroups.map((g, i) =>
                        <TimeSlotGroup key={`${company.id}-${i}`} group={g} />)
                }
            </Scrollable>
        </Container>
    )
}

export default CompanyTimeSlots
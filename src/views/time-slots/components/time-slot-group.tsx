import React from 'react'
import styled from 'styled-components'
import { TTimeSlotGroup } from 'types/ui'
import TimeSlot from './time-slot'

const Container = styled.div`
    padding: 1rem;
    background-color: rgba(0,0,0,.35);
`
const GroupName = styled.h2`

`

type Props = {
    group: TTimeSlotGroup
}

const TimeSlotGroup = (props: Props) => {
    const { group } = props

    return (
        <Container>
            <GroupName>{group.name}</GroupName>
            {
                group.timeSlots.map((ts, i) => <TimeSlot key={`${group.day}-${i}`} timeSlot={ts} />)
            }
        </Container>
    )
}

export default TimeSlotGroup
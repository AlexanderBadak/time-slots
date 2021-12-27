import React, { useContext } from 'react'
import styled from 'styled-components'
import { TTimeSlot, TTimeSlotGroup } from 'types/ui'
import { TimeSlotsContext } from '../time-slots-provider'
import TimeSlot from './time-slot'

const Container = styled.div`
    padding: 1rem;
    background-color: rgba(0,0,0,.35);
`
const GroupName = styled.h2`

`

type Props = {
    companyId: number
    group: TTimeSlotGroup
}

const TimeSlotGroup = (props: Props) => {
    const { group, companyId } = props

    const { setSelectedTimeSlot } = useContext(TimeSlotsContext)

    const selectTimeSlot = (timeSlot: TTimeSlot) => {
        setSelectedTimeSlot && setSelectedTimeSlot({
            id: companyId,
            timeSlot
        })
    }

    return (
        <Container>
            <GroupName>{group.name}</GroupName>
            {
                group.timeSlots.map((ts, i) => (
                    <TimeSlot
                        key={`${group.day}-${i}`}
                        timeSlot={ts}
                        onClick={() => selectTimeSlot(ts)}
                    />)
                )
            }
        </Container>
    )
}

export default TimeSlotGroup